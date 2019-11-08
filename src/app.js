const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const expressLay = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

require('./config/passport-config')(passport);
env.config();
app.use(express.static( "public" ));
app.use(flash());
app.use(expressLay);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
//global messages for use if redirect 
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    
    next();
});

//Routes
app.use('/', require('./routes/index'), require('./routes/createProject'), require('./routes/project'));
app.use('/users', require('./routes/users'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(3000, () => console.log('server started'));
});


