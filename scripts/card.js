/////Popup image

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup.popup_is-open");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_is-open");
  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-open");
  document.removeEventListener("keydown", handleEscClose);
}
