import { randomPick } from '@/utils/random'
import { ColorFormatter } from './formatter.types'
import HexFormatter from './formatters/hex'
import RgbFormatter from './formatters/rgb'
import { ColorData } from './types'

// Register formatters
export const colorFormatterMap = {
  RGB: RgbFormatter,
  HEX: HexFormatter,
  // add new format here
} as const

export type ColorFormatterMap = typeof colorFormatterMap
export type ColorFormats = keyof ColorFormatterMap
export type ColorFormatEntries = [ColorFormats, ColorFormatter][]

export const colorFormatterEntries = Object.entries<ColorFormatter>(
  colorFormatterMap
) as ColorFormatEntries

export type FormattedColor = {
  format: ColorFormats
  value: string
}

/**
 * Randomly pick a color format and format the color
 */
export function randomFormatColor(color: ColorData): FormattedColor {
  const [format, Formatter] = randomPick(colorFormatterEntries)
  return { format, value: Formatter.format(color) }
}
