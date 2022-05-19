import { gql } from "postgraphile";
import { Instagram } from "../instagram";

export const instagramTypeDefs = gql`
  type Media {
    id: String
    media_url: String
    media_type: String
  }

  type Pagination {
    after: String
    before: String
  }

  type InstagramMedia {
    data: [Media]
    pagination: Pagination
  }

  extend type Query {
    instagramMedia(code: String!): InstagramMedia
  }
`;

export const instagramResolvers = {
  Query: {
    instagramMedia: async (_, { code }: { code: string }, context, info) => {
      const instagram = new Instagram();
      console.log("code", code);
      const tokenResponse = await instagram.getAuthorizationToken(code);

      const accessToken = tokenResponse && tokenResponse.access_token;
      let media = [];
      if (accessToken) {
        media = await instagram.getAllInstagramMedia(accessToken);
      }
      return media;
    },
  },
};
