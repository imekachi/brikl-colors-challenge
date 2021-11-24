import { gql, useQuery } from '@apollo/client'
import { FormattedColor } from '@/service/color/formatter'

const QUERY_GENERATE_SWATCH = gql`
  query GenerateSwatch {
    generateSwatch {
      format
      value
    }
  }
`

export type QueryGenerateSwatch = {
  generateSwatch: FormattedColor[]
}

export default function useQueryGenerateSwatch() {
  return useQuery<QueryGenerateSwatch>(QUERY_GENERATE_SWATCH)
}
