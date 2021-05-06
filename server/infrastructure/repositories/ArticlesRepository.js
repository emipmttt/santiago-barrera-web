const Article = require("../orm/mongoose/schemas/Article");

module.exports = {
  async store(model) {
    const article = new Article(model)
    return article.save();
  },

  async update(id, model) {
    return Article.updateOne({
      _id: id
    }, model);
  },

  async remove(id) {
    return Article.deleteOne({
      _id: id
    });
  },

  async findOne(id) {
    return Article.findOne({
      _id: id
    });
  },

  async gerAll() {
    return Article.find();
  }
}

