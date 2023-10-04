import { createClient } from "next-sanity";

const client = createClient({
  apiVersion: "2023-10-04",
  dataset: "production",
  projectId: "o72qckvs",
  useCdn: false,
});

export default client;
