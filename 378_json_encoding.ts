/*
 * Write a function that takes in a number, string, list, or dictionary and returns its JSON encoding.
 * It should also handle nulls.
 *
 * For example, given the following input:
 *
 * [None, 123, ["a", "b"], {"c":"d"}]
 * You should return the following, as a string:
 *
 * '[null, 123, ["a", "b"], {"c": "d"}]'
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

export const stringify = (input: JSONValue): string => {
  if (input === null || input === undefined) {
    return 'null'
  }

  if (typeof input === 'number' || typeof input === 'boolean') {
    return String(input)
  }

  if (typeof input === 'string') {
    return `"${input}"`
  }

  if (Array.isArray(input)) {
    return `[${input.map((value) => stringify(value)).join(',')}]`
  }

  if (typeof input === 'object') {
    return `{${Object.keys(input)
      .map((key) => `"${key}":${stringify(input[key])}`)
      .join(',')}}`
  }

  return 'null'
}
