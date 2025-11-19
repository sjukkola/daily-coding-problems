import { describe, expect, it } from 'vitest'
import { findFixedPoint } from '../273_fixed_point'

describe('findFixedPoint', () => {
  it('should find fixed point when exists', () => {
    expect(findFixedPoint([-6, 0, 2, 40])).toBe(2)
    expect(findFixedPoint([0, 1, 2])).toBe(0)
  })

  it('should find fixed point in larger array', () => {
    expect(findFixedPoint([-10, -1, 0, 3, 10, 11, 30, 50, 100])).toBe(3)
  })

  it('should return null when no fixed point exists', () => {
    expect(findFixedPoint([1, 5, 7, 8])).toBeNull()
  })

  it('should handle single element that is fixed point', () => {
    expect(findFixedPoint([0])).toBe(0)
  })

  it('should handle single element that is not fixed point', () => {
    expect(findFixedPoint([5])).toBeNull()
  })

  it('should find fixed point at beginning', () => {
    expect(findFixedPoint([0, 2, 5, 8, 17])).toBe(0)
  })

  it('should find fixed point at end', () => {
    expect(findFixedPoint([-5, -3, 0, 1, 4])).toBe(4)
  })

  it('should handle empty array', () => {
    expect(findFixedPoint([])).toBeNull()
  })

  it('should handle all negative numbers', () => {
    expect(findFixedPoint([-5, -4, -3, -2, -1])).toBeNull()
  })

  it('should handle ascending array with no fixed point', () => {
    expect(findFixedPoint([10, 11, 12, 13, 14])).toBeNull()
  })

  it('should find fixed point in middle', () => {
    expect(findFixedPoint([-2, -1, 2, 4, 7])).toBe(2)
  })
})
