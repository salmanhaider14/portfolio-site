import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "x4f2ca6a",
  dataset: "production",
  apiVersion: "2022-09-21",
  useCdn: true,
  token:
    "sklcvfpHdLxTuNqzBxKdfbbIPseBxRNDsg4CgFJ68Y9ygbzM1dvQ0UTzfr6jIEMu7NLBRsMxJ0uPf9SxY5SVufuHpF10gFOj7FXWH5IVZs1ZAxtX9PMzl2Kjwfz4vz80mvC3w7bzgTZN1AIX1NBwkSTIEOVuHziBA2V5VQNzZNZUHaxeI0DJ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
