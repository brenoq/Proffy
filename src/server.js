//Dados
const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "54988563214",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0] , 
    time_from: [720], 
    time_to: [1200]
  },
  {
    name: "Breno Quirino",
    avatar: "https://avatars2.githubusercontent.com/u/56519951?s=460&u=19babe362bbaf6fbfc3f8eac16fa269bcb413986&v=4",
    whatsapp: "54988563214",
    bio: "Entusiasta das melhores tecnologias de física avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Física",
    cost: "50",
    weekday: [3] , 
    time_from: [2400], 
    time_to: [3000]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//Funcionalidades
function pageLanding (req, res) {
  return res.render("index.html")
}

function pageStudy (req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
  return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require("express");
const server = express();

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
