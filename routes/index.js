import { Router } from "express";

import {
  getArticles,
  getArticleByID,
  getArticlesByCategory,
  getArticlesByTag,
  getArticlesByAuthor,
} from "../controllers/article.js";

import { getCategoryByName } from "../controllers/category.js";
import { getTagByName } from "../controllers/tag.js";
import { getAuthorByName } from "../controllers/author.js";

const router = Router();

router.get("/", async (req, res, next) => {
  const { category, tag, author } = req.query;

  var articles = null;

  if (category) {
    const foundCategory = await getCategoryByName(category);
    articles = await getArticlesByCategory(foundCategory);
    return res.render("listByCategory", {
      articles: articles,
      categoryName: foundCategory.name,
    });
  } else if (tag) {
    const foundTag = await getTagByName(tag);
    articles = await getArticlesByTag(foundTag);
    return res.render("listByTag", {
      articles: articles,
      tagName: foundTag.name,
    });
  } else if (author) {
    const foundAuthor = await getAuthorByName(author);
    articles = await getArticlesByAuthor(foundAuthor);
    return res.render("listByAuthor", {
      articles: articles,
      authorName: foundAuthor.name,
    });
  } else {
    articles = await getArticles();
  }

  res.render("index", {
    articles: articles,
  });
});

router.get("/article/:id", async (req, res, next) => {
  const { id } = req.params;

  const article = await getArticleByID(id);
  res.render("article", {
    article: article,
  });
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

router.get("/contact", (req, res, next) => {
  res.render("contact");
});

router.get("/author", (req, res, next) => {
  res.render("author");
});

router.get("/policy", (req, res, next) => {
  res.render("policy");
});

router.get("/terms", (req, res, next) => {
  res.render("terms");
});

export default router;
