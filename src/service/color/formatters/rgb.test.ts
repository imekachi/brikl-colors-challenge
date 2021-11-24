import RgbFormatter from './rgb'

describe('RgbFormatter', () => {
  const mockColor = {
    data: { r: 50, g: 60, b: 70 },
    formatted: 'rgb(50, 60, 70)',
  }

  it('should return the correct format', () => {
    expect(RgbFormatter.format(mockColor.data)).toEqual(mockColor.formatted)
  })

  it('should return the correct data when converting back to color data', () => {
    expect(RgbFormatter.toColorData(mockColor.formatted)).toEqual(
      mockColor.data
    )
  })

  it('should throw an error when converting an invalid formatted color', () => {
    expect(() => RgbFormatter.toColorData('123')).toThrow()
  })
})
