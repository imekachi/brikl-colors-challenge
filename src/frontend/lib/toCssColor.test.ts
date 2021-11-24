import { toCssColor } from '@/frontend/lib/toCssColor'
import { FormattedColor } from '@/service/color/formatter'
import HexFormatter from '@/service/color/formatters/hex'
import RgbFormatter from '@/service/color/formatters/rgb'

describe('toCssColor', () => {
  const mockColor: FormattedColor = {
    format: 'HEX',
    value: '#323c46',
  }
  const mockColorData = HexFormatter.toColorData(mockColor.value)
  const expectedRgb = RgbFormatter.format(mockColorData)

  it('should return the correct css color', () => {
    expect(toCssColor(mockColor)).toBe(expectedRgb)
  })
})
