import { ColorData } from '@/service/color/types'

export interface ColorFormatter {
  format: (color: ColorData) => string
  toColorData: (formattedColor: string) => ColorData
}
