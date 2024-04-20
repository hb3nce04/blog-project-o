import Category from "../models/Category.js";

const getCategories = async () => {
  return await Category.find({});
};

const getCategoryByName = async (name) => {
  return await Category.findOne({ name: name });
};

export { getCategories, getCategoryByName };
