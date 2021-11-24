import HslFormatter from './hsl'

describe('HslFormatter', () => {
  const mockColor = {
    data: { r: 51, g: 61, b: 71 },
    formatted: 'hsl(210, 16%, 24%)',
  }

  it('should return the correct format', () => {
    expect(HslFormatter.format(mockColor.data)).toEqual(mockColor.formatted)
  })

  it('should return the correct data when converting back to color data', () => {
    expect(HslFormatter.toColorData(mockColor.formatted)).toEqual(
      mockColor.data
    )
  })

  it('should throw an error when converting an invalid formatted color', () => {
    expect(() => HslFormatter.toColorData('123')).toThrow()
  })
})
