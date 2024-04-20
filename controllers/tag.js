import Tag from "../models/Tag.js";

const getTags = async () => {
  return await Tag.find({});
};

const getTagByName = async (name) => {
  return await Tag.findOne({ name: name });
};

export { getTags, getTagByName };
