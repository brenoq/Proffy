//Procurar Botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener("click", cloneField);

//Executar uma ação
function cloneField() {
  //Duplicar os campos
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
 
  //Pegar campos
  const fields = newFieldContainer.querySelectorAll("input");

  //Limpar os campos 
  fields.forEach((field) => {
    field.value = "";
  })

  //Colocar na página
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
