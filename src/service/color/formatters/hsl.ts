import {
  colorToCssString,
  hslStringToObject,
  hslToRgb,
  rgbToHsl,
} from 'colors-convert'
import { ColorFormatter } from '@/service/color/formatter.types'

const HslFormatter: ColorFormatter = {
  format: (color) => {
    const hslData = rgbToHsl(color)
    return colorToCssString(hslData)
  },
  toColorData: (formatted) => {
    const hslData = hslStringToObject(formatted)
    return hslToRgb(hslData)
  },
}

export default HslFormatter
