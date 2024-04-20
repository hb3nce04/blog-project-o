import Author from "../models/Author.js";

// const getAuthors = async () => {
//   return await Author.find({});
// };

const getAuthorByName = async (name) => {
  return await Author.findOne({ name: name });
};

export { getAuthorByName };
