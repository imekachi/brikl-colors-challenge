import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  enum ColorTypes {
    RGB
    HEX
  }

  type Color {
    format: ColorTypes!
    color: String!
  }

  type Query {
    generateSwatch: [Color]!
  }
`
