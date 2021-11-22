import { getRandomInt, randomPick } from '@/backend/utils/random'

describe('getRandomInt', () => {
  // TODO: use jest.spy to test edge cases
  it('should not return the number more than or less than the specified value', () => {
    expect(getRandomInt(1, 1)).toBe(1)
    expect(getRandomInt(1, 2)).toBeLessThanOrEqual(2)
    expect(getRandomInt(1, 2)).toBeGreaterThanOrEqual(1)
  })
  it('should always return an integer', () => {
    // because what's the closest integer that is more than 1.1? 2
    expect(getRandomInt(1.1, 1.6)).toBe(2)
    expect(getRandomInt(1.2, 2)).toBe(2)
  })
})

describe('randomPick', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const expectedIndex = 3
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(expectedIndex * 0.1)
  })

  // TODO: use jest.spy to test edge cases
  it('should return some data in an array', () => {
    expect(randomPick(arr1)).toBe(arr1[expectedIndex])
    expect(randomPick(arr2)).toBe(arr2[expectedIndex])
  })
})
