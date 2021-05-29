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
    stock,
    bestSeller,
    colours,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.price = price;
    this.oldPrice = oldPrice;
    this.size = size;
    this.publication = publication;
    this.stock = stock;
    this.bestSeller = bestSeller;
    this.colours = colours;
  }
};
