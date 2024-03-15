import { groq } from "next-sanity";

export const queryProjects = groq`*[_type == "blogPost"]`;

export const queryProjectsById = `*[_type == "blogPost" && _id == $id]`;
