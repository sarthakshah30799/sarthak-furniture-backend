import { defaultPlugins, getBuilder } from "graphile-build";
import { defaultPlugins as pgDefaultPlugins } from "graphile-build-pg";

export const getSchema = async () => {
  return getBuilder([...defaultPlugins, ...pgDefaultPlugins], {
    pgConfig: process.env.DATABASE_URL,
    pgSchemas: ["public"],
    pgExtendedTypes: true,
  });
};
