import BrgbFormatter, { colorToInt } from './brgb'

describe('BrgbFormatter', () => {
  const mockColor = {
    data: { r: 50, g: 58, b: 41 },
    formatted: '1962',
  }

  it('should return the correct format', () => {
    expect(BrgbFormatter.format(mockColor.data)).toEqual(mockColor.formatted)
  })

  it('should return the correct data when converting back to color data', () => {
    expect(BrgbFormatter.toColorData(mockColor.formatted)).toEqual(
      mockColor.data
    )
  })

  it('should throw an error when converting an invalid formatted color', () => {
    expect(() => BrgbFormatter.toColorData('10001')).toThrow()
    expect(() => BrgbFormatter.toColorData('#100011')).toThrow()
  })
})

describe('colorToInt', () => {
  it('should return the correct number', () => {
    expect(colorToInt({ r: 0, g: 0, b: 0 })).toEqual(0)
    expect(colorToInt({ r: 0, g: 0, b: 255 })).toEqual(255)
    expect(colorToInt({ r: 0, g: 255, b: 0 })).toEqual(65280)
    expect(colorToInt({ r: 255, g: 255, b: 255 })).toEqual(16777215)
  })
})
