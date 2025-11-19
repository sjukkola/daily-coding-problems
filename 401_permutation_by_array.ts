/*
 * A permutation can be specified by an array P,
 * where P[i] represents the location of the element at i in the permutation.
 * For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.
 *
 * Given an array and a permutation, apply the permutation to the array.
 * For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0],
 * return ["c", "b", "a"].
 */

export const applyPermutation = <T>(array: readonly T[], permutation: readonly number[]): T[] => {
  return permutation.map((index) => array[index])
}
