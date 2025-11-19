import { describe, expect, it } from 'vitest'
import { maxProfit } from '../47_stock_prices'

describe('maxProfit', () => {
  it('should return 5 for example case', () => {
    expect(maxProfit([9, 11, 8, 5, 7, 10])).toBe(5)
  })

  it('should handle ascending prices', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  })

  it('should return 0 for descending prices', () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0)
  })

  it('should handle single element', () => {
    expect(maxProfit([5])).toBe(0)
  })

  it('should handle two elements with profit', () => {
    expect(maxProfit([3, 7])).toBe(4)
  })

  it('should handle two elements with no profit', () => {
    expect(maxProfit([7, 3])).toBe(0)
  })

  it('should find maximum profit with multiple peaks', () => {
    expect(maxProfit([7, 6, 11, 8, 5, 7, 10])).toBe(5)
  })

  it('should handle flat prices', () => {
    expect(maxProfit([5, 5, 5, 5])).toBe(0)
  })

  it('should handle profit at end', () => {
    expect(maxProfit([10, 8, 5, 2, 15])).toBe(13)
  })

  it('should handle profit at beginning', () => {
    expect(maxProfit([1, 10, 5, 3, 2])).toBe(9)
  })
})
