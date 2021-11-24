import { colorFormatterMap, FormattedColor } from '@/service/color/formatter'
import RgbFormatter from '@/service/color/formatters/rgb'

/**
 * Converts formatted color to RGB CSS string to make sure it can be rendered with CSS
 */
export function toCssColor(formattedColor: FormattedColor): string {
  const Formatter = colorFormatterMap[formattedColor.format]
  const colorData = Formatter.toColorData(formattedColor.value)
  return RgbFormatter.format(colorData)
}
