import { describe, expect, it } from 'vitest'
import { sortByFrequency } from '../386_frequency_of_letters'

describe('sortByFrequency', () => {
  it('should sort tweet by frequency', () => {
    const result = sortByFrequency('tweet')
    expect(['tteew', 'eettw']).toContain(result)
  })

  it('should sort macbook by frequency', () => {
    const result = sortByFrequency('macbook')
    expect(['oomacbk', 'oombcak', 'oomabck']).toContain(result)
  })

  it('should handle single character', () => {
    expect(sortByFrequency('a')).toBe('a')
  })

  it('should handle all same characters', () => {
    expect(sortByFrequency('aaaa')).toBe('aaaa')
  })

  it('should handle all different characters', () => {
    const result = sortByFrequency('abcd')
    expect(result.length).toBe(4)
    expect(result).toContain('a')
    expect(result).toContain('b')
    expect(result).toContain('c')
    expect(result).toContain('d')
  })

  it('should handle empty string', () => {
    expect(sortByFrequency('')).toBe('')
  })

  it('should put most frequent characters first', () => {
    const result = sortByFrequency('aabbbcccc')
    expect(result.startsWith('cccc')).toBe(true)
  })

  it('should handle mixed case', () => {
    const result = sortByFrequency('AaBb')
    expect(result.length).toBe(4)
  })
})
