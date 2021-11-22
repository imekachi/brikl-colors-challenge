import { ColorObj } from '@/backend/service/colorGenerator'

/**
 * Formats color object as Hex string.
 */
export function formatToHex({ r, g, b }: ColorObj): string {
  return `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`
}

/**
 * Formats number to Hex string
 */
export function numberToHex(num: number): string {
  return num.toString(16)
}
