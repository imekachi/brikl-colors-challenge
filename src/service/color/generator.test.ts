import { generateRandomSwatch } from '@/service/color/generator'

describe('generateRandomSwatch', () => {
  it('should return an array with the length of the correct size', () => {
    const size = 5
    expect(generateRandomSwatch(size).length).toBe(size)
  })
})
