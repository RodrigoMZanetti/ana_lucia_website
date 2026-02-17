import init from "../components/form.js";
import { openPopup, closePopup } from "../components/card.js";

/////IMAGE TEXTS
const photoOfAna = {
  "data-description":
    "Ana Lucia is a civil engineer with over 42 years of experience. She began her career with a three-year internship and later opened her own office. She has worked with inspections, construction supervision, property legalization, and Fire Department approvals. Today, she specializes in business permits and safety compliance projects.She is known for her honesty, dedication, clear communication, and delivering projects on schedule.",
};

/////DOM
const anaPhoto = document.querySelector(".hero__image");

/////POPUPs
const popupContainer = document.querySelector(".popup");
const popupImage = document.querySelector("#image-popup");
const imageContainer = popupImage.querySelector(".popup__image");
const closeImageButton = popupImage.querySelector(".popup-close");
const popupImageText = popupImage.querySelector(".popup__text");

init();

/////EVENTS
anaPhoto.addEventListener("click", () => {
  imageContainer.src = anaPhoto.src;
  popupImageText.textContent = photoOfAna["data-description"];
  openPopup(popupImage);
});

closeImageButton.addEventListener("click", () => {
  imageContainer.src = "";
  popupImageText.textContent = "";
  closePopup(popupImage);
});

popupContainer.addEventListener("click", (evt) => {
  if (evt.target === popupContainer) {
    closePopup(popupImage);
  }
});
