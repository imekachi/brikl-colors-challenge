import { formatToHex, numberToHex } from '@/backend/service/formatters/hex'

describe('formatToHex', () => {
  it('should return the correct format', () => {
    const colorObj = { r: 50, g: 60, b: 70 }
    expect(formatToHex(colorObj)).toEqual('#323c46')
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
