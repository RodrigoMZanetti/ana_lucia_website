import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._text = this._popup.querySelector(".popup__text");
  }

  setContent({ image, alt, description }) {
    this._image.src = image;
    this._image.alt = alt;
    this._text.textContent = description;
  }
}

export default PopupWithImage;
