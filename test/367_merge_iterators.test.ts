import { describe, expect, it } from 'vitest'
import { mergeIterators } from '../367_merge_iterators'

describe('mergeIterators', () => {
  it('should merge two sorted arrays', () => {
    const result = [...mergeIterators([5, 10, 15], [3, 8, 9])]
    expect(result).toEqual([3, 5, 8, 9, 10, 15])
  })

  it('should handle empty first iterator', () => {
    const result = [...mergeIterators([], [1, 2, 3])]
    expect(result).toEqual([1, 2, 3])
  })

  it('should handle empty second iterator', () => {
    const result = [...mergeIterators([1, 2, 3], [])]
    expect(result).toEqual([1, 2, 3])
  })

  it('should handle both empty iterators', () => {
    const result = [...mergeIterators([], [])]
    expect(result).toEqual([])
  })

  it('should handle non-overlapping ranges', () => {
    const result = [...mergeIterators([1, 2, 3], [4, 5, 6])]
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should handle duplicate values', () => {
    const result = [...mergeIterators([1, 3, 5], [1, 3, 5])]
    expect(result).toEqual([1, 1, 3, 3, 5, 5])
  })

  it('should handle single element iterators', () => {
    const result = [...mergeIterators([5], [3])]
    expect(result).toEqual([3, 5])
  })

  it('should work with custom compare function', () => {
    const result = [...mergeIterators([15, 10, 5], [9, 8, 3], (a, b) => b - a)]
    expect(result).toEqual([15, 10, 9, 8, 5, 3])
  })

  it('should merge strings alphabetically', () => {
    const result = [...mergeIterators(['apple', 'cherry'], ['banana', 'date'])]
    expect(result).toEqual(['apple', 'banana', 'cherry', 'date'])
  })

  it('should handle unequal length iterators', () => {
    const result = [...mergeIterators([1, 5, 9, 13], [2, 4])]
    expect(result).toEqual([1, 2, 4, 5, 9, 13])
  })
})
