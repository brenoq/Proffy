//Servidor
const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } =  require("./pages.js");

//Configurar Nunjucks (Template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//Início e configuração do servidor
server
//Define pasta public como estando na raiz (arquivos estáticos)
.use(express.static("public")) 
//Configura rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Define porta 5500 e inicia o servidor
.listen(5500)
