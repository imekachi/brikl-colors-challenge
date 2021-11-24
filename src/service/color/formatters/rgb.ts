import { rgbStringToObject } from 'colors-convert'
import { ColorFormatter } from '@/service/color/formatter.types'

const RgbFormatter: ColorFormatter = {
  format: ({ r, g, b }) => `rgb(${r}, ${g}, ${b})`,
  toColorData: rgbStringToObject,
}

export default RgbFormatter
