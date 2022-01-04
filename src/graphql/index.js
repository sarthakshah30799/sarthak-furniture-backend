import { gql } from "apollo-server-express";
import { getAllChairs } from "../chairs/getAllChairs";

export const typeDefs = gql`
  type Chair {
    # type: String
    name: String
    # image: ImageType
  }
  # input ChairInput {
  #   type: String
  #   name: String
  #   image: ImageType
  # }
  type Query {
    chairs: [Chair]
  }
  # type Mutation {
  #   createChair(input: ChairInput): Chair
  # }
`;

export const resolvers = {
  Query: {
    async chairs() {
      console.log("get all chairs");
      const data = getAllChairs();
      console.log("get all chairs", data);
      return ["chairs", "chairs", "chairs"];
    },
  },
  // Mutation: {
  //   async createChair() {},
  // },
};
