import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2021-03-25",
  dataset: "production",
  projectId: "o72qckvs",
  useCdn: true,
});
