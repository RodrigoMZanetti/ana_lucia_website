class Card {
  constructor(product, template) {
    this._title = product.title;
    this._description = product.description;
    this._imageUrl = product.imageUrl;
    this._alt = product.alt;
    this._price = product.indicators.price;
    this._category = product.indicators.category;
    this._rating = product.indicators.rating;
    this._template = template;
  }

  generateCard() {
    const template = this._template.cloneNode(true);

    const templateTitle = template.querySelector(".card__title");
    templateTitle.textContent = this._title;

    const templateDescription = template.querySelector(".card__description");
    templateDescription.textContent = this._description;

    const templateImage = template.querySelector(".card__image");
    templateImage.src = this._imageUrl;
    templateImage.alt = this._alt;

    const templateRating = template.querySelector(".card__rating");
    templateRating.textContent = this._rating;

    const templateCategory = template.querySelector(".card__category");
    templateCategory.textContent = this._category;

    const templatePrice = template.querySelector(".card__price");
    templatePrice.textContent = this._price;

    return template;
  }
}

export default Card;
