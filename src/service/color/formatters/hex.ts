import { ColorFormatter } from '@/service/color/formatter.types'

const HexFormatter: ColorFormatter = {
  format: ({ r, g, b }) =>
    `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`,
  toColorData: (formatted) => {
    // remove the leading # and group the remaining values
    const hexStrArr = formatted.slice(1).match(/[\da-fA-F]{2}/g)

    if (!hexStrArr || hexStrArr.length < 3) {
      throw new Error('Invalid hex string')
    }

    const [r, g, b] = hexStrArr.map((hexStr) => parseInt(hexStr, 16))
    return { r, g, b }
  },
}

export default HexFormatter

/**
 * Formats number to Hex string
 */
export function numberToHex(num: number): string {
  return num.toString(16)
}
