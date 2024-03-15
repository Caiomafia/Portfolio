import { client } from "@/sanity/lib/client";
import * as queries from "./sanityQueries";
import { TypeActiveProject } from "@/@types/type-active-project";

export async function getActiveProjects() {
  const result = await client.fetch(queries.queryProjects, {
    next: { tags: ["collection"] },
  });
  return result;
}

export async function getActiveProjectsById(id: TypeActiveProject) {
  const params = { id };

  const response = await client.fetch(queries.queryProjectsById, params, {
    next: { tags: ["collection"] },
  });

  return response;
}
