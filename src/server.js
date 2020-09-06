//Servidor
const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } =  require("./pages.js");

//Configurar Nunjucks (Template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//Início e configuração do servidor
server
// Receber dos dados do req.body
.use(express.urlencoded({ extended: true }))
//Define pasta public como estando na raiz (arquivos estáticos)
.use(express.static("public")) 
//Configura rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.get("/success", pageSuccess)
//Define porta 5500 e inicia o servidor
.listen(5500)
