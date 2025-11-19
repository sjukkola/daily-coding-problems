/*
 * This problem was asked by Amazon.
 *
 * Write a function that takes a natural number as input and returns the number of digits the input has.
 *
 * Constraint: don't use any loops.
 */

export const getDigitCount = (num: number): number | null => {
  if (!Number.isInteger(num)) {
    return null
  }

  return num.toString().length
}
