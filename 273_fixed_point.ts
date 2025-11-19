/*
 * This problem was asked by Apple.
 * A fixed point in an array is an element whose value is equal to its index.
 * Given a sorted array of distinct elements, return a fixed point, if one exists.
 * Otherwise, return null.
 * For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return null.
 */

export const findFixedPoint = (array: readonly number[]): number | null => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return i
    }
  }
  return null
}
