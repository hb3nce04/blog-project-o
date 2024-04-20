import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "Author" },
  category: { type: mongoose.Types.ObjectId, ref: "Category" },
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});
const Article = mongoose.model("Article", ArticleSchema);

export default Article;
