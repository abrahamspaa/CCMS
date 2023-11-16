// import { Directus } from "@directus/sdk";
import { createDirectus, rest, graphql } from '@directus/sdk';
import { MyCollections } from "../types/collections";

// export const directus = new Directus<MyCollections>(
//   process.env.NEXT_PUBLIC_API_URL as string,
//   {
//     auth: {
//       mode: "cookie",
//     },
//   }
// );

export const directus = createDirectus<MyCollections>('http://localhost:8055/').with(rest());