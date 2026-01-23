import { BASE_URL } from "@/utils/config";
import { GraphQLClient } from "graphql-request";
export const graphcms = new GraphQLClient(BASE_URL, {
  cache: "no-store",
});
