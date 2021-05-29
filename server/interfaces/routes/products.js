const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/ProductControllers");

const { Router } = require("express");
const router = Router();

router.get("/", getProducts);
router.get("/details/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/create", createProduct);

module.exports = router;
