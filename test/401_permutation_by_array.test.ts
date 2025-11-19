import { describe, expect, it } from 'vitest'
import { applyPermutation } from '../401_permutation_by_array'

describe('applyPermutation', () => {
  it('should swap elements at index 0 and 2', () => {
    expect(applyPermutation(['a', 'b', 'c'], [2, 1, 0])).toEqual(['c', 'b', 'a'])
  })

  it('should handle identity permutation', () => {
    expect(applyPermutation(['a', 'b', 'c'], [0, 1, 2])).toEqual(['a', 'b', 'c'])
  })

  it('should handle complete reversal', () => {
    expect(applyPermutation([1, 2, 3, 4], [3, 2, 1, 0])).toEqual([4, 3, 2, 1])
  })

  it('should handle single element array', () => {
    expect(applyPermutation(['x'], [0])).toEqual(['x'])
  })

  it('should handle rotation', () => {
    expect(applyPermutation(['a', 'b', 'c', 'd'], [1, 2, 3, 0])).toEqual(['b', 'c', 'd', 'a'])
  })

  it('should handle complex permutation with numbers', () => {
    expect(applyPermutation([10, 20, 30, 40, 50], [4, 2, 0, 1, 3])).toEqual([50, 30, 10, 20, 40])
  })

  it('should handle empty array', () => {
    expect(applyPermutation([], [])).toEqual([])
  })

  it('should work with different types', () => {
    expect(applyPermutation([true, false, true], [2, 0, 1])).toEqual([true, true, false])
  })
})
