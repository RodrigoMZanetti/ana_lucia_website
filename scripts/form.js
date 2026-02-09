/////PEGANDO OS ELEMENTOS PARA O DOM

const inputFormulario = document.querySelector(".formulario__form");
const inputNome = inputFormulario.querySelector("#name"); // ok
const inputData = inputFormulario.querySelector("#date"); // ok
const inputEmail = inputFormulario.querySelector("#email"); // ok
const checkboxButton = inputFormulario.querySelector(
  ".formulario__form-checkbox-button",
); // ok
const botaoSubmit = inputFormulario.querySelector(".formulario__form_button");

/////ADICIONANDO FRASE DURANTE O INPUT NAME

let spanPreenchimentoNome = document.createElement("span");
inputNome.after(spanPreenchimentoNome);

inputNome.addEventListener("input", () => {
  const inputValidacaoNome = inputNome.checkValidity();

  if (!inputValidacaoNome) {
    spanPreenchimentoNome.textContent = "Nome deve conter de 5 a 50 caracteres";
    spanPreenchimentoNome.classList.add("span-class");
  } else {
    spanPreenchimentoNome.textContent = "";
    spanPreenchimentoNome.classList.remove("span-class");
  }
});

/////ADICIONANDO FRASE DURANTE O INPUT DATA

let spanPreenchimentoData = document.createElement("span");
inputData.after(spanPreenchimentoData);

inputData.addEventListener("input", () => {
  const inputValidacaoData = inputData.checkValidity();

  if (!inputValidacaoData) {
    spanPreenchimentoData.textContent = "Data mínima 01/01/1910";
    spanPreenchimentoData.classList.add("span-class");
  } else {
    spanPreenchimentoData.textContent = "";
    spanPreenchimentoData.classList.remove("span-class");
  }
});

/////ADICIONANDO FRASE DURANTE O INPUT EMAIL

let spanPreenchimentoEmail = document.createElement("span");
inputEmail.after(spanPreenchimentoEmail);

inputEmail.addEventListener("input", () => {
  const inputValidacaoEmail = inputEmail.checkValidity();

  if (!inputValidacaoEmail) {
    spanPreenchimentoEmail.textContent =
      "Máximo 254 caracteres, contendo @ e um e-mail válido";
    spanPreenchimentoEmail.classList.add("span-class");
  } else {
    spanPreenchimentoEmail.textContent = "";
    spanPreenchimentoEmail.classList.remove("span-class");
  }
});

/////ADICIONANDO FRASE DE CHECKBOX

let spanPreenchimentoCheckbox = document.createElement("span");
checkboxButton.after(spanPreenchimentoCheckbox);

function checkBoxValidation(event) {
  const verifyCheckbox = event.target;
  if (!verifyCheckbox.checked) {
    spanPreenchimentoCheckbox.textContent = "Esse campo é obrigatório";
    spanPreenchimentoCheckbox.classList.add("span-class");
  } else {
    spanPreenchimentoCheckbox.textContent = "";
    spanPreenchimentoCheckbox.classList.remove("span-class");
  }
}
checkBoxValidation({ target: checkboxButton });

checkboxButton.addEventListener("change", checkBoxValidation);

/////BOTÃO DE SUBMIÇÃO APENAS QUANDO TUDO ESTIVER OKAY

botaoSubmit.disabled = true;
botaoSubmit.classList.add("sub-button-is-off");

function verificarInvalidezFormulario() {
  return !inputFormulario.checkValidity();
}

inputFormulario.addEventListener("input", () => {
  botaoSubmit.disabled = !inputFormulario.checkValidity();
  if (botaoSubmit.disabled) {
    botaoSubmit.classList.remove("sub-button-is-on");
    botaoSubmit.classList.add("sub-button-is-off");
  } else {
    botaoSubmit.classList.remove("sub-button-is-off");
    botaoSubmit.classList.add("sub-button-is-on");
  }
});

inputFormulario.addEventListener("change", () => {
  botaoSubmit.disabled = verificarInvalidezFormulario();
  if (botaoSubmit.disabled) {
    botaoSubmit.classList.remove("sub-button-is-on");
    botaoSubmit.classList.add("sub-button-is-off");
  } else {
    botaoSubmit.classList.remove("sub-button-is-off");
    botaoSubmit.classList.add("sub-button-is-on");
  }
});

inputFormulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputFormulario.checkValidity()) {
    return;
  } else {
    inputFormulario.reset();

    botaoSubmit.disabled = true;
    botaoSubmit.classList.remove("sub-button-is-on");
    botaoSubmit.classList.add("sub-button-is-off");

    spanPreenchimentoNome.textContent = "";
    spanPreenchimentoData.textContent = "";
    spanPreenchimentoEmail.textContent = "";
    spanPreenchimentoCheckbox.textContent = "";
  }
});
