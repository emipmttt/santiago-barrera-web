module.exports = class {
  constructor(
    id = null,
    title,
    description,
    url,
    price,
    oldPrice,
    size,
    publication,
    stock
  ) {
    this.id = id;
    this.name = title;
    this.email = description;
    this.password = url;
    this.active = price;
    this.active = oldPrice;
    this.active = size;
    this.active = publication;
    this.type = stock;
  }
};
