import { describe, expect, it } from 'vitest'
import { getPermutations } from '../82_mapping_letters'

describe('getPermutations', () => {
  const mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['d', 'e'],
  }

  it('should handle single digit', () => {
    expect(getPermutations('2', mapping)).toEqual(['a', 'b', 'c'])
  })

  it('should handle two digits', () => {
    expect(getPermutations('23', mapping)).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })

  it('should handle three digits', () => {
    expect(getPermutations('234', mapping)).toEqual([
      'add',
      'ade',
      'aed',
      'aee',
      'afd',
      'afe',
      'bdd',
      'bde',
      'bed',
      'bee',
      'bfd',
      'bfe',
      'cdd',
      'cde',
      'ced',
      'cee',
      'cfd',
      'cfe',
    ])
  })
})
