function createCard() {
  const templateModel = document
    .querySelector(".template")
    .content.querySelector(".card")
    .cloneNode(true);

  const likeButton = templateModel.querySelector(".card__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("like__button-is-on");
  });
  return templateModel;
}
