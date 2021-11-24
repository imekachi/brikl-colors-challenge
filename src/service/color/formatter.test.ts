import {
  colorFormatterEntries,
  randomFormatColor,
} from '@/service/color/formatter'
import { ColorData } from '@/service/color/types'

describe('randomFormatColor', () => {
  it('should pick a formatter and return the correct formatted color data', () => {
    const mockColorData: ColorData = { r: 50, g: 60, b: 70 }
    const expectedIndex = 0
    jest.spyOn(global.Math, 'random').mockReturnValue(expectedIndex * 0.1)
    expect(randomFormatColor(mockColorData)).toEqual({
      format: colorFormatterEntries[expectedIndex][0],
      value: colorFormatterEntries[expectedIndex][1].format(mockColorData),
    })
  })
})
