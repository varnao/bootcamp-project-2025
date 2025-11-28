import mongoose from "mongoose";
import { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: String,
  comment: String,
  time: { type: Date, default: Date.now },
});

// typescript type (can also be an interface)
type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: {
    user: string;
    comment: string;
    time: Date;
  }[];
};

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  content: { type: String, required: true },
  // comments: { type: [String], required: false, default: [] }, // array of strings
  comments: [CommentSchema],
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
