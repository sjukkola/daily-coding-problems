import { describe, expect, it } from 'vitest'
import { findClosestCoin } from '../376_coin_AI'

describe('findClosestCoin', () => {
  it('should find closest coin in example case', () => {
    const result = findClosestCoin(
      [0, 2],
      [
        [0, 4],
        [1, 0],
        [2, 0],
        [3, 2],
      ],
    )
    expect(result).toEqual([0, 4])
  })

  it('should return null for empty coins array', () => {
    expect(findClosestCoin([0, 2], [])).toBeNull()
  })

  it('should handle single coin', () => {
    expect(findClosestCoin([0, 0], [[5, 5]])).toEqual([5, 5])
  })

  it('should find coin at same position', () => {
    expect(
      findClosestCoin(
        [2, 3],
        [
          [2, 3],
          [5, 5],
        ],
      ),
    ).toEqual([2, 3])
  })

  it('should handle multiple equidistant coins', () => {
    const result = findClosestCoin(
      [2, 2],
      [
        [2, 0],
        [2, 4],
        [0, 2],
        [4, 2],
      ],
    )
    expect(result).toBeDefined()
    const distance = Math.abs(result![0] - 2) + Math.abs(result![1] - 2)
    expect(distance).toBe(2)
  })

  it('should use Manhattan distance correctly', () => {
    const result = findClosestCoin(
      [0, 0],
      [
        [3, 0],
        [0, 3],
        [2, 2],
      ],
    )
    expect([
      [3, 0],
      [0, 3],
    ]).toContainEqual(result)
  })

  it('should handle negative coordinates', () => {
    const result = findClosestCoin(
      [0, 0],
      [
        [-1, -1],
        [2, 2],
      ],
    )
    expect(result).toEqual([-1, -1])
  })

  it('should find closest among many coins', () => {
    const result = findClosestCoin(
      [5, 5],
      [
        [0, 0],
        [10, 10],
        [5, 6],
        [6, 5],
        [100, 100],
      ],
    )
    expect([
      [5, 6],
      [6, 5],
    ]).toContainEqual(result)
  })
})
