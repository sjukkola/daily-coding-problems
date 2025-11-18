import { describe, expect, it } from 'vitest'
import { check } from '../79_non_decreasing_array'

describe('check', () => {
  it('should return true when array can be modified to non-decreasing', () => {
    expect(check([10, 5, 7, 7, 8])).toBe(true)
    expect(check([1, 1, 1, 2, 3, 2, 2, 3])).toBe(true)
    expect(check([1, 2, 1, 2, 2, 2, 3, 5, 6, 7, 8])).toBe(true)
    expect(check([1, 1, 6, 2])).toBe(true)
    expect(check([1, 5, 10, 7])).toBe(true)
    expect(check([4, 2, 3])).toBe(true)
    expect(check([5, 7, 1, 8])).toBe(true)
    expect(check([1, 2, 5, 1])).toBe(true)
  })

  it('should return false when array cannot be modified to non-decreasing', () => {
    expect(check([10, 5, 1])).toBe(false)
    expect(check([1, 2, 1, 2, 2, 1, 2])).toBe(false)
    expect(check([1, 1, 1, 2, 3, 2, 2, 3, 2])).toBe(false)
    expect(check([2, 1, 1, 2, 2, 2, 3, 2])).toBe(false)
    expect(check([1, 2, 3, 5, 1, 6, 1])).toBe(false)
    expect(check([3, 4, 2, 3])).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(check([])).toBe(true)
    expect(check([1])).toBe(true)
    expect(check([1, 2])).toBe(true)
    expect(check([2, 1])).toBe(true)
  })

  it('should handle already non-decreasing arrays', () => {
    expect(check([1, 2, 3, 4, 5, 6, 7, 8, 10])).toBe(true)
    expect(check([1, 1, 1, 1])).toBe(true)
  })
})
