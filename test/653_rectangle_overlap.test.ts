import { describe, expect, it } from 'vitest'
import { hasOverlap } from '../653_rectangle_overlap'

describe('hasOverlap', () => {
  it('should return true for overlapping rectangles', () => {
    const rectangles = [
      { topLeft: [1, 4], dimensions: [3, 3] },
      { topLeft: [-1, 3], dimensions: [2, 1] },
      { topLeft: [0, 5], dimensions: [4, 3] },
    ] as const

    expect(hasOverlap(rectangles)).toBe(true)
  })

  it('should return false for non-overlapping rectangles', () => {
    const rectangles = [
      { topLeft: [0, 0], dimensions: [2, 2] },
      { topLeft: [3, 3], dimensions: [2, 2] },
    ] as const

    expect(hasOverlap(rectangles)).toBe(false)
  })

  it('should return true when one rectangle completely covers another', () => {
    const rectangles = [
      { topLeft: [0, 0], dimensions: [10, 10] },
      { topLeft: [2, 2], dimensions: [2, 2] },
    ] as const

    expect(hasOverlap(rectangles)).toBe(true)
  })

  it('should return false for single rectangle', () => {
    const rectangles = [{ topLeft: [0, 0], dimensions: [5, 5] }] as const

    expect(hasOverlap(rectangles)).toBe(false)
  })

  it('should return false for empty list', () => {
    expect(hasOverlap([])).toBe(false)
  })

  it('should return true for edge-touching rectangles with overlap', () => {
    const rectangles = [
      { topLeft: [0, 0], dimensions: [3, 3] },
      { topLeft: [2, 2], dimensions: [3, 3] },
    ] as const

    expect(hasOverlap(rectangles)).toBe(true)
  })
})
