import { ColorObj } from '@/backend/service/colorGenerator'
import { formatToHex } from '@/backend/service/formatters/hex'
import { formatToRgb } from '@/backend/service/formatters/rgb'
import { randomPick } from '@/backend/utils/random'

// Register formatters
export const colorFormatters = {
  RGB: formatToRgb,
  HEX: formatToHex,
} as const

export type ColorFormatters = typeof colorFormatters
export type ColorFormats = keyof ColorFormatters
export type ColorFormatter = (color: ColorObj) => string

export const colorFormatterEntries = Object.entries(colorFormatters) as [
  ColorFormats,
  ColorFormatter
][]

export type FormattedColor = {
  format: ColorFormats
  value: string
}

// TODO: add unit tests
export function randomFormatColor(color: ColorObj): FormattedColor {
  const [format, formatter] = randomPick(colorFormatterEntries)
  return { format, value: formatter(color) }
}
