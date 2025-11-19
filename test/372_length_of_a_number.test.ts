import { describe, expect, it } from 'vitest'
import { getDigitCount } from '../372_length_of_a_number'

describe('getDigitCount', () => {
  it('should return correct length for single digit', () => {
    expect(getDigitCount(1)).toBe(1)
    expect(getDigitCount(0)).toBe(1)
    expect(getDigitCount(9)).toBe(1)
  })

  it('should return correct length for multiple digits', () => {
    expect(getDigitCount(12)).toBe(2)
    expect(getDigitCount(123)).toBe(3)
    expect(getDigitCount(1234)).toBe(4)
  })

  it('should return null for non-integer numbers', () => {
    expect(getDigitCount(1.123)).toBeNull()
    expect(getDigitCount(3.14)).toBeNull()
  })

  it('should handle negative numbers', () => {
    expect(getDigitCount(-5)).toBe(2)
    expect(getDigitCount(-123)).toBe(4)
  })

  it('should handle large numbers', () => {
    expect(getDigitCount(1000000)).toBe(7)
    expect(getDigitCount(999999999)).toBe(9)
  })
})
