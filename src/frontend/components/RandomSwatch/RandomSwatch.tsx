import { ApolloError } from '@apollo/client'
import MessageBox from '@/frontend/components/MessageBox'
import SwatchGrid, {
  SwatchGridPlaceHolder,
} from '@/frontend/components/SwatchGrid'
import { GenerateSwatch } from '@/frontend/types/graphql/GenerateSwatch'

export type RandomSwatchProps = {
  isLoading: boolean
  error?: ApolloError
  data?: GenerateSwatch
}

const RandomSwatch = ({
  isLoading,
  error,
  data,
}: RandomSwatchProps): JSX.Element => {
  if (isLoading) return <SwatchGridPlaceHolder />

  if (error) {
    return (
      <MessageBox severity="error" className="text-center">
        Error: <span>{error.message}</span>
      </MessageBox>
    )
  }

  if (!data) {
    return (
      <MessageBox severity="info" className="text-center">
        No data
      </MessageBox>
    )
  }

  return <SwatchGrid swatch={data.generateSwatch} />
}

export default RandomSwatch
