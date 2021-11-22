import { SWATCH_SIZE } from '@/backend/config/swatch'
import {
  FormattedColor,
  randomFormatColor,
} from '@/backend/service/colorFormatter'
import { generateRandomSwatch } from '@/backend/service/colorGenerator'

export const resolvers = {
  Query: {
    generateSwatch: (): FormattedColor[] => {
      const swatch = generateRandomSwatch(SWATCH_SIZE)
      return swatch.map(randomFormatColor)
    },
  },
}
