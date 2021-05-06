const articlesRepository = require("../../infrastructure/repositories/ArticlesRepository");
const Article = require("../../domain/Article");

module.exports = {
  async createArticle(req, res) {
    try {

      const model = new Article(null, req.body.title, req.body.body);
      const article = await articlesRepository.store(model);

      return res.json({
        ok: true,
        data: article
      });

    } catch (e) {
      console.log(e);
    }
  },

  async updateArticle(req, res) {
    try {

      const id = req.params.id;
      const model = new Article(id, req.body.title, req.body.body);
      const result = await articlesRepository.update(id, model);

      return res.json({
        ok: true,
        data: result
      });

    } catch (e) {
      console.log(e);
    }
  },

  async getArticle(req, res) {
    try {

      const id = req.params.id;
      const result = await articlesRepository.findOne(id);

      return res.json({
        ok: true,
        data: result
      });

    } catch (e) {
      console.log(e);
    }
  },

  async getArticles(req, res) {
    try {
      const articles = await articlesRepository.gerAll();

      return res.json({
        ok: true,
        data: articles
      });

    } catch (e) {
      console.log(e);
    }
  },

  async deleteArticle(req, res) {
    try {
      const deleted = await articlesRepository.remove(req.params.id);

      return res.json({
        ok: true,
        data: deleted
      });

    } catch (e) {
      console.log(e);
    }
  }

}
