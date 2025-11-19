import { describe, expect, it } from 'vitest'
import { subsequences } from '../379_string_subsequences'

describe('subsequences', () => {
  it('should generate all subsequences for xyz', () => {
    const result = subsequences('xyz')
    expect(result).toContain('')
    expect(result).toContain('x')
    expect(result).toContain('y')
    expect(result).toContain('z')
    expect(result).toContain('xy')
    expect(result).toContain('xz')
    expect(result).toContain('yz')
    expect(result).toContain('xyz')
    expect(result.length).toBe(8)
  })

  it('should handle empty string', () => {
    expect(subsequences('')).toEqual([''])
  })

  it('should handle single character', () => {
    const result = subsequences('a')
    expect(result).toEqual(['', 'a'])
  })

  it('should handle two characters', () => {
    const result = subsequences('ab')
    expect(result).toContain('')
    expect(result).toContain('a')
    expect(result).toContain('b')
    expect(result).toContain('ab')
    expect(result.length).toBe(4)
  })

  it('should maintain order in subsequences', () => {
    const result = subsequences('abc')
    expect(result).toContain('ac')
    expect(result).toContain('bc')
    expect(result).not.toContain('ca')
    expect(result).not.toContain('ba')
  })

  it('should generate correct count of subsequences', () => {
    expect(subsequences('a').length).toBe(2)
    expect(subsequences('ab').length).toBe(4)
    expect(subsequences('abc').length).toBe(8)
    expect(subsequences('abcd').length).toBe(16)
  })
})
