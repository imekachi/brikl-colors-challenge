import { gql, useQuery } from '@apollo/client'
import { GenerateSwatch } from '@/frontend/types/graphql/GenerateSwatch'

const QUERY_GENERATE_SWATCH = gql`
  query GenerateSwatch {
    generateSwatch {
      format
      value
    }
  }
`

export default function useQueryGenerateSwatch() {
  return useQuery<GenerateSwatch>(QUERY_GENERATE_SWATCH)
}
