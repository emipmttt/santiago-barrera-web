const Product = require("../orm/mongoose/schemas/Product");

module.exports = {
  async store(model) {
    const product = new Product(model)
    return product.save();
  },

  async update(id, model) {
    return Product.updateOne({
      _id: id
    }, model);
  },

  async remove(id) {
    return Product.deleteOne({
      _id: id
    });
  },

  async findOne(id) {
    return Product.findOne({
      _id: id
    });
  },

  async gerAll() {
    return Product.find();
  }
}
