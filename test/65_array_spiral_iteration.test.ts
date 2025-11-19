import { describe, expect, it } from 'vitest'
import { spiralOrder } from '../65_array_spiral_iteration'

describe('spiralOrder', () => {
  it('should return spiral order for example matrix', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12])
  })

  it('should handle 1x1 matrix', () => {
    expect(spiralOrder([[5]])).toEqual([5])
  })

  it('should handle single row', () => {
    expect(spiralOrder([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4])
  })

  it('should handle single column', () => {
    expect(spiralOrder([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4])
  })

  it('should handle 2x2 matrix', () => {
    expect(
      spiralOrder([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 2, 4, 3])
  })

  it('should handle 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
  })

  it('should handle empty matrix', () => {
    expect(spiralOrder([])).toEqual([])
  })

  it('should handle matrix with empty rows', () => {
    expect(spiralOrder([[]])).toEqual([])
  })

  it('should handle rectangular matrix (more columns)', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 7, 6, 5])
  })

  it('should handle rectangular matrix (more rows)', () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 4, 6, 8, 7, 5, 3])
  })
})
