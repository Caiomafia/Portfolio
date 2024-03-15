import { client } from "./client";
import ImageUrlBuilder from "@sanity/image-url";

export const urlFor = (source: any) => {
  return ImageUrlBuilder(client).image(source);
};
