import { formatToRgb } from '@/backend/service/formatters/rgb'

describe('formatToRgb', () => {
  it('should return the correct format', () => {
    const colorObj = { r: 50, g: 60, b: 70 }
    expect(formatToRgb(colorObj)).toEqual('rgb(50, 60, 70)')
  })
})
