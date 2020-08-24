const Database = require("./db.js");
const createProffy = require("./createProffy.js");

Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "Breno Quirino",
    avatar: "https://avatars2.githubusercontent.com/u/56519951?s=460&u=19babe362bbaf6fbfc3f8eac16fa269bcb413986&v=4",
    whatsapp: "54988563214",
    bio: "Entusiasta das melhores tecnologias de física avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  }

  classValue = {
    subject: 5,
    cost: "50",
    // O proffy_id virá pelo banco de dados
  }

  classScheduleValues = [
    {
      // O class_id virá do banco de dados
      weekday: 3, 
      time_from: 2400, 
      time_to: 3000,
    },
    {
      // O class_id virá do banco de dados
      weekday: 0, 
      time_from: 720, 
      time_to: 1220,
      }
  ]

  // await createProffy (db, {proffyValue, classValue, classScheduleValues})

  // Consultar os dados inseridos
  // Todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys);

  // Consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectClassesAndProffys);

  // O horário que a pessoa trabalha, por exemplo, é das 08h às 18h
  // O horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
  // O horário do time_to (18h) precisa ser acima

  const selectClassesShedules = await db.all(`
    SELECT class_schedule.* 
    FROM  class_schedule 
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "720"
    AND class_schedule.time_to > "720"
  `)
  console.log(selectClassesShedules);
})