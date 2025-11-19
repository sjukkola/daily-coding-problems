/*
 * Given a string, sort it in decreasing order based on the frequency of characters.
 * If there are multiple possible solutions, return any of them.
 *
 * For example, given the string tweet, return tteew. eettw would also be acceptable.
 */

export const sortByFrequency = (str: string): string => {
  const frequencyMap = Array.from(str).reduce<Record<string, number>>((map, letter) => {
    map[letter] = (map[letter] || 0) + 1
    return map
  }, {})

  return Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .reduce((result, [char, count]) => result + char.repeat(count), '')
}
