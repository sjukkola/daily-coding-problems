import { describe, expect, it } from 'vitest'
import { check } from '../79_non_decreasing_array'

describe('Non-Decreasing Array', () => {
  it('can be modified to a non-decreasing array', () => {
    expect(check([10, 5, 7, 7, 8])).toBe(true)
    expect(check([1, 1, 1, 2, 3, 2, 2, 3])).toBe(true)
    expect(check([1, 2, 1, 2, 2, 2, 3, 5, 6, 7, 8])).toBe(true)
    expect(check([1, 1, 6, 2])).toBe(true)
    expect(check([1, 5, 10, 7])).toBe(true)
    expect(check([4, 2, 3])).toBe(true)
  })

  it('can not be modified a non-decreasing array', () => {
    expect(check([10, 5, 1])).toBe(false)
    expect(check([1, 2, 1, 2, 2, 1, 2])).toBe(false)
    expect(check([1, 1, 1, 2, 3, 2, 2, 3, 2])).toBe(false)
    expect(check([2, 1, 1, 2, 2, 2, 3, 2])).toBe(false)
    expect(check([1, 2, 3, 5, 1, 6, 1])).toBe(false)
    expect(check([1, 2, 5, 1])).toBe(false)
    expect(check([3, 4, 2, 3])).toBe(false)
  })

  it('handles edge cases', () => {
    expect(check([])).toBe(true)
    expect(check([1])).toBe(true)
    expect(check([1, 2])).toBe(true)
    expect(check([2, 1])).toBe(true)
  })

  it('handles already non-decreasing arrays', () => {
    expect(check([1, 2, 3, 4, 5, 6, 7, 8, 10])).toBe(true)
    expect(check([1, 1, 1, 1])).toBe(true)
  })
})
