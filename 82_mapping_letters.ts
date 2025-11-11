/*
 * Given a mapping of digits to letters (as in a phone number),
 * and a digit string, return all possible letters the number could represent.
 *
 * For example if {"2": ["a", "b", "c"], 3: ["d", "e", "f"], …}
 * then "23" should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

type Mapping = Record<string, string[]>

export function getPermutations(input: string, mapping: Mapping): string[] {
  if (input.length === 1) return mapping[input[0]]!

  const result: string[] = []

  for (const char of mapping[input[0]]) {
    for (const perm of getPermutations(input.slice(1), mapping)) {
      result.push(char + perm)
    }
  }
  return result
}
