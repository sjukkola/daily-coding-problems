import { describe, expect, it } from 'vitest'
import { stringify } from '../378_json_encoding'

describe('stringify', () => {
  it('should stringify simple array', () => {
    const input = [null, 123, 'string', ['a', 'b'], { c: 'd', d: 1 }]
    expect(stringify(input)).toBe(JSON.stringify(input))
  })

  it('should stringify nested objects and arrays', () => {
    const input = [
      null,
      123,
      ['string', null, 123],
      {
        a: [
          'string',
          {
            b: 1,
            c: 'string',
            f: {
              d: [null],
              b: true,
              s: {
                s: 'stringifies',
              },
            },
          },
        ],
      },
    ]
    expect(stringify(input)).toBe(JSON.stringify(input))
  })

  it('should handle null', () => {
    expect(stringify(null)).toBe('null')
  })

  it('should handle numbers', () => {
    expect(stringify(123)).toBe('123')
    expect(stringify(0)).toBe('0')
    expect(stringify(-456)).toBe('-456')
  })

  it('should handle booleans', () => {
    expect(stringify(true)).toBe('true')
    expect(stringify(false)).toBe('false')
  })

  it('should handle strings', () => {
    expect(stringify('hello')).toBe('"hello"')
    expect(stringify('')).toBe('""')
  })

  it('should handle empty array', () => {
    expect(stringify([])).toBe('[]')
  })

  it('should handle empty object', () => {
    expect(stringify({})).toBe('{}')
  })

  it('should handle array of primitives', () => {
    expect(stringify([1, 2, 3])).toBe('[1,2,3]')
  })

  it('should handle simple object', () => {
    expect(stringify({ a: 1, b: 2 })).toBe('{"a":1,"b":2}')
  })

  it('should handle nested arrays', () => {
    expect(
      stringify([
        [1, 2],
        [3, 4],
      ]),
    ).toBe('[[1,2],[3,4]]')
  })

  it('should handle object with array values', () => {
    const input = { nums: [1, 2, 3], strs: ['a', 'b'] }
    expect(stringify(input)).toBe(JSON.stringify(input))
  })
})
