import mongoose, { Schema } from "mongoose";

type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
  link?: string; // optional link to project
  technologies?: string[]; // optional array of tech used
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: false },
  technologies: { type: [String], required: false },
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
