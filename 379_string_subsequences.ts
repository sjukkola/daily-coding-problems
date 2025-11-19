/*
 * Given a string, generate all possible subsequences of the string.
 *
 * For example, given the string xyz, return an array or set with the following strings:
 *
 *   x
 *   y
 *   z
 *   xy
 *   xz
 *   yz
 *   xyz
 *
 * Note that zx is not a valid subsequence since it is not in the order of the given string.
 */

export const subsequences = (str: string): string[] => {
  if (str === '') {
    return ['']
  }

  const rest = subsequences(str.substring(1))
  const result = [...rest]

  for (const subseq of rest) {
    result.push(str[0] + subseq)
  }

  return result
}
