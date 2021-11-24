import { strPad } from './string'

describe('strPad', () => {
  const specs: {
    input: Parameters<typeof strPad>
    output: ReturnType<typeof strPad>
  }[] = [
    {
      input: [1, 2, '0'],
      output: '01',
    },
    {
      input: [1, 5, '0'],
      output: '00001',
    },
    {
      input: ['00', 4, 'x'],
      output: 'xx00',
    },
    {
      input: [143, 2, '0'],
      output: '143',
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return "${output}" when passing ${JSON.stringify(
      input
    )}`, () => {
      expect(strPad(...input)).toBe(output)
    })
  })
})
