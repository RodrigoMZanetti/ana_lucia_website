import Card from "../components/Card.js";
import products from "../components/products.js";

const storeTemplate = document
  .querySelector("#template")
  .content.querySelector(".card");
const storeContainer = document.querySelector("#cards-container");

products.forEach((product) => {
  const newCard = new Card(product, storeTemplate);
  storeContainer.append(newCard.generateCard());
});

////user place
const buttonOpenUser = document.querySelector(".header__user-button");
const buttonCloseUser = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");

buttonOpenUser.addEventListener("click", () => {
  sidebar.classList.add("sidebar__open");
});

buttonCloseUser.addEventListener("click", () => {
  sidebar.classList.remove("sidebar__open");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    sidebar.classList.remove("sidebar__open");
  }
});

document.addEventListener("click", (evt) => {
  const clickedOutsideSidebar = !sidebar.contains(evt.target);
  const clickedOpenButton = buttonOpenUser.contains(evt.target);

  if (
    sidebar.classList.contains("sidebar__open") &&
    clickedOutsideSidebar &&
    !clickedOpenButton
  ) {
    sidebar.classList.remove("sidebar__open");
  }
});
