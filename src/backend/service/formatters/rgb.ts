import { ColorObj } from '@/backend/service/colorGenerator'

/**
 * Formats color object as an rgb string.
 */
export function formatToRgb({ r, g, b }: ColorObj): string {
  return `rgb(${r}, ${g}, ${b})`
}
