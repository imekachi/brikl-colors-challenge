import { SWATCH_SIZE } from '@/backend/config/swatch'
import { FormattedColor, randomFormatColor } from '@/service/color/formatter'
import { generateRandomSwatch } from '@/service/color/generator'

export const resolvers = {
  Query: {
    generateSwatch: (): FormattedColor[] => {
      const swatch = generateRandomSwatch(SWATCH_SIZE)
      return swatch.map(randomFormatColor)
    },
  },
}
