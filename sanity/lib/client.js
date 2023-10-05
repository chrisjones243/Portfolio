import { createClient } from "next-sanity";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const client = createClient({
  apiVersion: "2023-10-04",
  dataset: dataset,
  projectId: projectId,
  useCdn: false,
});

export default client;
