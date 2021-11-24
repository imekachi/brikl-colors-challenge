import { ColorFormatter } from '@/service/color/formatter.types'
import { ColorData } from '@/service/color/types'

/**
 * Converts color data in r g b object to an integer
 */
export function colorToInt({ r, g, b }: ColorData): number {
  // If we think of hex color 01 00 00, the first value of red is 65536 in decimal.
  // If we converts it to binary, it is 10000000000000000 in binary. 1 and 16 of zeros.
  // So we need to shift it to the left 16 bits to get its actual value in integer.
  //
  // This is the same as green which 0100 in hex is 100000000 in binary. 1 and 8 of zeros.
  // So we need to shift it to the left 8 bits.
  //
  // As of the blue color, we can add it to the total value directly.
  return (r << 16) + (g << 8) + b
}

const maxRgbInt = colorToInt({ r: 255, g: 255, b: 255 })
const maxBrgb = 10000
const brgbToRbgIntRatio = maxRgbInt / maxBrgb

const BrgbFormatter: ColorFormatter = {
  format: (color) => {
    // convert to integer
    const intInRgb = colorToInt(color)
    // map int in rgb space to int in brgb
    const brgb = Math.round(intInRgb / brgbToRbgIntRatio)
    // convert to string
    return brgb.toString()
  },
  toColorData: (formatted) => {
    const intInBrgb = parseInt(formatted, 10)

    if (Number.isNaN(intInBrgb) || intInBrgb < 0 || intInBrgb > maxBrgb) {
      throw new Error('Invalid BRGB string')
    }

    // map int in brgb space to int in rgb space
    const intInRgb = intInBrgb * brgbToRbgIntRatio

    // shift bit back to the right 16 position
    // and use bitwise and to eliminate the rest that exceed 8 bits (255 = 11111111)
    const r = (intInRgb >> 16) & 255
    // shift bit back to the right 8 position
    // and use bitwise and to eliminate the rest that exceed 8 bits
    // therefore only selecting the second 8 bits from the right
    const g = (intInRgb >> 8) & 255
    // use bitwise to select the first 8 bits
    const b = intInRgb & 255

    return { r, g, b }
  },
}

export default BrgbFormatter
