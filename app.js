import "dotenv/config";
import express from "express";
import morgan from "morgan";
import expressEjsLayouts from "express-ejs-layouts";
import mongoose from "mongoose";

import { getLatestArticles } from "./controllers/article.js";
import { getCategories } from "./controllers/category.js";
import { getTags } from "./controllers/tag.js";

import indexRoutes from "./routes/index.js";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = 3000 || process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(async () => {
    app.listen(PORT, () => {
      console.log(
        `Successfully connected to the database! The app is running at: http://localhost:${PORT}`
      );
    });

    app.locals.categories = await getCategories();
    app.locals.tags = await getTags();
    app.locals.latestArticles = await getLatestArticles();
  })
  .catch((err) => {
    console.log(`Unable to connect to the database: ${err}`);
  });

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("layout", "../layouts/index");
app.set("views", "./views/pages");
app.use(expressEjsLayouts);

app.use(indexRoutes);
app.use("/api", apiRoutes);
