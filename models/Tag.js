import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TagSchema = new Schema({ name: { type: String, required: true } });
const Tag = mongoose.model("Tag", TagSchema);

export default Tag;
