import { describe, expect, it } from 'vitest'
import { getHIndex } from '../375_h_index'

describe('getHIndex', () => {
  it('should return correct h-index for example case', () => {
    expect(getHIndex([4, 0, 0, 2, 3])).toBe(2)
  })

  it('should handle all high citations', () => {
    expect(getHIndex([5, 5, 5, 5, 5])).toBe(5)
  })

  it('should handle all zero citations', () => {
    expect(getHIndex([0, 0, 0, 0])).toBe(0)
  })

  it('should handle single paper', () => {
    expect(getHIndex([100])).toBe(1)
    expect(getHIndex([0])).toBe(0)
  })

  it('should handle ascending citations', () => {
    expect(getHIndex([1, 2, 3, 4, 5])).toBe(3)
  })

  it('should handle descending citations', () => {
    expect(getHIndex([5, 4, 3, 2, 1])).toBe(3)
  })

  it('should handle empty array', () => {
    expect(getHIndex([])).toBe(0)
  })

  it('should handle large citations', () => {
    expect(getHIndex([100, 200, 300])).toBe(3)
  })

  it('should return maximum h-index', () => {
    expect(getHIndex([10, 8, 5, 4, 3])).toBe(4)
  })

  it('should handle mixed citations', () => {
    expect(getHIndex([3, 0, 6, 1, 5])).toBe(3)
  })
})
