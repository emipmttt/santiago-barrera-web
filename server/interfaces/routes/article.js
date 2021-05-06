const {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle
} = require("../controllers/ArticleController");

const { Router } = require("express");
const router = Router();

router.get("/", getArticles);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
router.post("/create", createArticle);
router.get("/details/:id", getArticle);

module.exports = router;
