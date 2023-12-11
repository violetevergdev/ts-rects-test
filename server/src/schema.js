import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Получаем массив вещей"
    products: [Product!]!
  }

  type Product {
    id: ID!
    title: String!
    price: Float!
    description: String!
    category: String
    image: String!
    rating: Rating!
  }

  type Rating {
    rate: Float!
    count: Float
  }
`;
