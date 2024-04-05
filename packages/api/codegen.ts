import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.gql",
  generates: {
    "./src/generated/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  config: {
    avoidOptionals: true,
  },
};

export default config;
