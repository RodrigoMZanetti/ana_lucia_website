/////POPUP FUNCTIONS
function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup.popup_is-opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.body.classList.add("overflow");
  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.body.classList.remove("overflow");
  document.removeEventListener("keydown", handleEscClose);
}
