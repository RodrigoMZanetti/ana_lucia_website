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
