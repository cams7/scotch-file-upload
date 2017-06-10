# Exemplo [Angular - File Uploads in Angular with a Node and Hapi Backend](https://scotch.io/tutorials/file-uploads-in-angular-with-a-node-and-hapi-backend)

* Autor: César Magalhães
* Tecnologias: Angular, Node JS
* Resumo: File Uploads in Angular with a Node and Hapi Backend
* Linguagens: TypeScript
* Fonte: <https://github.com/cams7/scotch-file-upload/>
* Site: <https://cams7.github.io/scotch-file-upload/>
* Linkedin: <https://br.linkedin.com/in/cams7>

## Qual a finalidade desses exemplos?

Esses exemplos foram estudados e testados com intuíto de aprender um pouco mais sobre o Angular.

## Sistemas requeridos

* [Microsoft Windows 10](https://www.microsoft.com/pt-br/software-download/windows10)
* [Ubuntu 16.04.5 LTS](http://releases.ubuntu.com/16.04/)
* [Git](https://git-scm.com/downloads)
* [Angular](https://angular.io/)
* [Node JS](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Para testa o exemplo

* Instale o Git
* Instale o Node JS
* Instale o Visual Studio Code

-------------------

```sh
cd /home/cams7/Dev/Angular2/Exemplos/scotch
ng new scotch-file-upload

cd /home/cams7/Dev/Angular2/Exemplos/scotch/scotch-file-upload

npm start
#Go to http://localhost:4200
#CTR-C
```

```sh
git remote add origin https://github.com/cams7/scotch-file-upload.git
git push -u origin master

sudo npm i -g angular-cli-ghpages

ng build --prod --base-href "https://cams7.github.io/scotch-file-upload/"

ngh
```

```sh
npm install bootstrap --save
```

Change `scotch-file-upload/.angular-cli.json`

`"styles": ["../node_modules/bootstrap/dist/css/bootstrap.css","styles.css"],`


```sh
cd /home/cams7/Dev/Angular2/Exemplos/scotch/scotch-file-upload

ng g m scotch-file-upload
ng g c scotch-file-upload/page-file-upload
ng g s scotch-file-upload/file-upload

npm test
#CTR-C

ng lint -fix

ng build --prod

http-server dist/
#Go to http://localhost:8080
#CTR-C
```