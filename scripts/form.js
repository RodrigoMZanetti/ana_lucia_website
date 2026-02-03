/////PEGANDO OS ELEMENTOS PARA O DOM

const { createElement } = require("react");

const formInput = document.querySelector(".formulario__form");
const inputName = formInput.querySelector("#name");
const inputDate = formInput.querySelector("#date");
const inputEmail = formInput.querySelector("#email");
const inputMessage = formInput.querySelector("#message");
const inputArquivo = formInput.querySelector("#arquivo");

/////EVITANDO AÇÃO NATIVA DO NAVEGADOR

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
});

/////ADICIONANDO FRASE DURANTE O INPUT NAME

let novoElementoMensagem = document.createElement("span");
inputName.after(novoElementoMensagem);

inputName.addEventListener("input", () => {
  const validacaoNome = inputName.checkValidity();

  if (!validacaoNome) {
    novoElementoMensagem.textContent = inputName.validationMessage;
    novoElementoMensagem.classList.add("span-class");
  } else {
    novoElementoMensagem.textContent = "";
    novoElementoMensagem.classList.remove("span-class");
  }
});
