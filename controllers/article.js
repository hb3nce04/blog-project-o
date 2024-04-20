import Article from "../models/Article.js";

import Author from "../models/Author.js";

const getArticles = async () => {
  return await Article.find({})
    .populate("category")
    .populate("tags")
    .populate("author");
};

const getArticleByID = async (id) => {
  return await Article.findOne({ _id: id })
    .populate("category")
    .populate("tags")
    .populate("author");
};

const getLatestArticles = async () => {
  return await Article.find({}).sort({ createdAt: -1 }).limit(3);
};

// JÓ-E ÍGY?
const getArticlesByCategory = async (category) => {
  return await Article.find({ category: category })
    .populate("category")
    .populate("tags")
    .populate("author");
};
const getArticlesByTag = async (tag) => {
  return await Article.find({ tags: tag })
    .populate("category")
    .populate("tags")
    .populate("author");
};

const getArticlesByAuthor = async (author) => {
  return await Article.find({ author: author })
    .populate("category")
    .populate("tags")
    .populate("author");
};

export {
  getArticles,
  getArticleByID,
  getLatestArticles,
  getArticlesByCategory,
  getArticlesByTag,
  getArticlesByAuthor,
};
