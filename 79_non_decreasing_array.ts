/*
 * Given an array of integers, write a function to determine whether the array could become
 * non-decreasing by modifying at most 1 element.
 *
 * For example, given the array [10, 5, 7], you should return true,
 * since we can modify the 10 into a 1 to make the array non-decreasing.
 *
 * Given the array [10, 5, 1], you should return false,
 * since we can't modify any one element to get a non-decreasing array.
 */

export function check(arr: number[]): boolean {
  let timesModified = 0

  for (let i = 0; i < arr.length; i++) {
    // current element is greater than next one
    if (arr[i] > arr[i + 1]) {
      if (timesModified === 1) return false // already modified once

      if (i == 0 || arr[i - 1] <= arr[i + 1]) {
        arr[i] = arr[i + 1]
      } else {
        arr[i + 1] = arr[i]
      }

      timesModified++
    }
  }
  return true
}
