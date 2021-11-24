import { ColorData } from '@/service/color/types'
import { getRandomInt } from '@/utils/random'

/**
 * Generates a random color as an object.
 */
export function generateRandomColor(): ColorData {
  return {
    r: getRandomInt(0, 255),
    g: getRandomInt(0, 255),
    b: getRandomInt(0, 255),
  }
}

/**
 * Generates a swatch with random colors.
 */
export function generateRandomSwatch(size: number): ColorData[] {
  return Array(size)
    .fill(0)
    .map(() => generateRandomColor())
}
