import { gql } from "apollo-server-express";
import getAllChairs from "../chairs/getAllChairs.js";
import db from "../db.js";

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
    async chairs(args, req) {
      console.log("get all chairs", req);

      // const data = new Promise((resolve, reject) => getAllChairs());
      // console.log("get all chairs", await data);
      // getAllChairs();
      return ["chairs", "chairs", "chairs"];
    },
  },
  // Mutation: {
  //   async createChair() {},
  // },
};
