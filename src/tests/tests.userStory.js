const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const server = require('../app.js');
const supertest = require('supertest');
const input = require('./input');
const request = supertest.agent(server);
const mochaCredentials = input.mochaCredentials;

chai.use(chaiHTTP);
process.env.NODE_ENV = 'test';

describe('controller.userStory', function() {
    let mochaSession;
    describe('Testing User Stories', function() {
        it('/POST /users/login', function(done) {
            request.post('/users/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(mochaCredentials)
            .end((err, res) => {
                let cookies = res.header['set-cookie'];
                mochaSession = cookies[0].split(";")[0];
                res.should.have.status(302);
                done();
            });
        });
        const projectId = input.projectId;
        const userStoryId = input.userStoryId;
        it('/GET /project/projectId + userStory route', function(done) {
            request.get('/project/' + projectId)
            .set('Cookie', mochaSession)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.text).to.nested.include('/editUserStory/'+userStoryId);
                done();
            });
        });
        it('/GET /project/projectId/editUserStory/userStoryId', function(done) {
            request.get('/project/'+projectId+'/editUserStory/'+userStoryId)
            .set('Cookie', mochaSession)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.text).to.nested.include('value=\"first orphan us of mocha\"');
                expect(res.text)
                .to.nested.include('name=\"difficulty\" class=\"form-control\" min=\"1\" max=\"10\" value=\"4\"');
                expect(res.text).to.nested.include('name=\"priority\" class=\"form-control\" value=\"3\"');
                done();
            });
        });
    });
});
