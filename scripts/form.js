const formulario = document.querySelector("#form");
const sendButton = formulario.querySelector(".formulario__form_button");

formulario.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("submit capturado");
});
