import { getRandomInt } from '@/backend/utils/random'

export type ColorObj = {
  r: number
  g: number
  b: number
}

/**
 * Generates a random color as an object.
 */
export function generateRandomColor(): ColorObj {
  return {
    r: getRandomInt(0, 255),
    g: getRandomInt(0, 255),
    b: getRandomInt(0, 255),
  }
}

/**
 * Generates a swatch with random colors.
 */
export function generateRandomSwatch(size: number): ColorObj[] {
  return Array(size)
    .fill(0)
    .map(() => generateRandomColor())
}
