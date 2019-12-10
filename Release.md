# Releases

Vous pouvez également retrouver les releases et leurs documentations dans la partie releases de GitHub. 

## Version 0.1.0 (08/11/19)
Vous pouvez télécharger cette version du projet [ici](https://github.com/wassblack/CDP_Release/archive/v0.1.0.zip).
* Issues réalisées : 1, 2, 3, 4, 5, 6
* Architecture de l'application : [archi_0.1.0.pdf](https://github.com/wassblack/CDP_Release/files/3927468/app-archi.pdf)
* Documentation administrateur : [doc-admin_0.1.0.pdf](https://github.com/wassblack/CDP_Release/files/3927469/doc-admin.pdf)
* Documentation utilisateur : [doc-user_0.1.0.pdf](https://github.com/wassblack/CDP_Release/files/3927467/doc-user.pdf)

## Version 0.2.0 (22/11/19)
Vous pouvez télécharger cette version du projet [ici](https://github.com/wassblack/CDP_Release/archive/0.2.0.zip).
* Issues réalisées : 7, 8, 9, 10, 11, 12
* Architecture de l'application : [archi_0.2.0.pdf](https://github.com/wassblack/CDP_Release/files/3927517/app-archi_v0.2.0.pdf)
* Documentation administrateur : [doc-admin_0.2.0.pdf](https://github.com/wassblack/CDP_Release/files/3927516/doc-admin_v0.2.0.pdf)
* Documentation utilisateur : [doc-user_0.2.0.pdf](https://github.com/wassblack/CDP_Release/files/3927518/doc-user_v0.2.0.pdf)

## Version 0.3.0 (10/12/19)
Vous pouvez télécharger cette version du projet [ici](https://github.com/wassblack/CDP_Release/archive/0.3.0.zip).
* Issues réalisées : 13, 14, 15, 16
* Architecture de l'application : [doc-code_0.3.0.pdf](https://github.com/wassblack/CDP_Release/files/3944592/doc-code_v0.3.0.pdf)
* Documentation administrateur : [doc-admin_0.3.0.pdf](https://github.com/wassblack/CDP_Release/files/3944594/doc-admin_v0.3.0.pdf)
* Documentation utilisateur : [doc-user_0.3.0.pdf](https://github.com/wassblack/CDP_Release/files/3944595/doc-user_v0.3.0.pdf)

## Installation et lancement de ScrumIt

### Avec npm 
Vous devez avoir `npm` et `nodejs` d'installé. Sous Windows, vous pouvez installer npm en cliquant [ici](https://www.npmjs.com/get-npm) et nodejs [ici](https://nodejs.org/en/download/).<br>
Sous Linux, vous pouvez installer les deux en tapant `apt install nodejs`.

* Pour installer le projet, placez-vous dans le répertoire *src/* puis tapez `npm install`
* Une fois les installations des dépendances terminées, vous pourrez taper `npm start` pour lancer ScrumIt
* Vous pouvez ensuite ouvrir un navigateur Web et aller à l'adresse `localhost:3000` qui vous affichera la page de connexion.

### Avec Docker

Vous devez avoir `docker` d'installé.  Vous pouvez l'installer en suivant la procédure d'installation décrite [ici](https://docs.docker.com/install/linux/docker-ce/ubuntu/) pour les systèmes Linux et [ici](https://docs.docker.com/docker-for-windows/install/) pour Windows.

* Placez-vous dans le répertoire contenant le fichier *docker-compose.yml* et taper `docker-compose up`
* Vous pouvez ensuite ouvrir un navigateur Web et aller à l'adresse `localhost:3000` qui vous affichera la page de connexion.
