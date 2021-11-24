/**
 * fill the value to match the desire length and return as a string
 */
export function strPad(
  value: number | string,
  length: number,
  pad: string
): string {
  const parsedValue = typeof value === 'number' ? value.toString() : value
  if (parsedValue.length >= length) return parsedValue
  return `${pad.repeat(length - parsedValue.length)}${value}`
}
