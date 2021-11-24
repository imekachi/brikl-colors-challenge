import HexFormatter, { numberToHex } from './hex'

describe('HexFormatter', () => {
  const mockColor = {
    data: { r: 50, g: 60, b: 70 },
    formatted: '#323c46',
  }

  it('should return the correct format', () => {
    expect(HexFormatter.format(mockColor.data)).toEqual(mockColor.formatted)
  })

  it('should return the correct data when converting back to color data', () => {
    expect(HexFormatter.toColorData(mockColor.formatted)).toEqual(
      mockColor.data
    )
  })

  it('should throw an error when converting an invalid formatted color', () => {
    expect(() => HexFormatter.toColorData('123')).toThrow()
  })
})

describe('numberToHex', () => {
  const specs: {
    input: Parameters<typeof numberToHex>[0]
    expected: ReturnType<typeof numberToHex>
  }[] = [
    {
      input: 0,
      expected: '0',
    },
    {
      input: 9,
      expected: '9',
    },
    {
      input: 10,
      expected: 'a',
    },
    {
      input: 255,
      expected: 'ff',
    },
  ]

  specs.forEach(({ input, expected }) => {
    it(`should return ${expected} when passing ${input}`, () => {
      expect(numberToHex(input)).toEqual(expected)
    })
  })
})
