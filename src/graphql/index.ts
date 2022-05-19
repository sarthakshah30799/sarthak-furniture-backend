import { makeExtendSchemaPlugin } from "postgraphile";
import { instagramTypeDefs, instagramResolvers } from "./instagram";

export const extendTendSchemPlugin = makeExtendSchemaPlugin((build) => {
  return {
    typeDefs: [instagramTypeDefs],
    resolvers: { ...instagramResolvers },
    introspection: false,
  };
});
