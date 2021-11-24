/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
export function getRandomInt(min: number, max: number): number {
  const intMin = Math.ceil(min)
  const intMax = Math.floor(max)
  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin
}

/**
 * Returns a random item in an array
 */
export function randomPick<T>(arr: T[]): T {
  return arr[getRandomInt(0, arr.length - 1)]
}
