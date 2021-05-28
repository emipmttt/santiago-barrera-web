const ProductsRepository = require("../../infrastructure/repositories/ProductsRepository");
const Product = require("../../domain/Product");

module.exports = {
  async createProduct(req, res) {
    try {
      const model = new Product(null, req.body.title, req.body.description, req.body.url, req.body.price, req.body.oldPrice, req.body.size, req.body.publication, req.body.stock);
      console.log(model)
      const product = await ProductsRepository.store(model);

      return res.json({
        ok: true,
        data: product
      });

    } catch (e) {
      console.log(e);
    }
  },

  async updateProduct(req, res) {
    try {

      const id = req.params.id;
      const model = new Product(id, req.body.title, req.body.description, req.body.url, req.body.price, req.body.oldPrice, req.body.size, req.body.publication, req.body.stock);
      const result = await ProductsRepository.update(id, model);

      return res.json({
        ok: true,
        data: result
      });

    } catch (e) {
      console.log(e);
    }
  },

  async getProduct(req, res) {
    try {

      const id = req.params.id;
      const result = await ProductsRepository.findOne(id);

      return res.json({
        ok: true,
        data: result
      });

    } catch (e) {
      console.log(e);
    }
  },

  async getProducts(req, res) {
    try {
      const products = await ProductsRepository.gerAll();

      return res.json({
        ok: true,
        data: products
      });

    } catch (e) {
      console.log(e);
    }
  },

  async deleteProduct(req, res) {
    try {
      const deleted = await ProductsRepository.remove(req.params.id);

      return res.json({
        ok: true,
        data: deleted
      });

    } catch (e) {
      console.log(e);
    }
  }

}
