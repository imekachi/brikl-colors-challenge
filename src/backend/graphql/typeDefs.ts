import { gql } from 'apollo-server-micro'
import { colorFormatterMap } from '@/service/color/formatter'

const colorTypeEnumValues = Object.keys(colorFormatterMap).join('\n')

export const typeDefs = gql`
  enum ColorTypes {
    ${colorTypeEnumValues}
  }

  type Color {
    format: ColorTypes!
    value: String!
  }

  type Query {
    generateSwatch: [Color!]!
  }
`
