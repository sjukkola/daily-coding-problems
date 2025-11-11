import { describe, expect, it } from 'vitest'
import { getPermutations } from '../82_mapping_letters'

describe('Mapping Letters', () => {
  it('one digit', () => {
    expect(
      getPermutations('2', {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
      }),
    ).toEqual(['a', 'b', 'c'])
  })

  it('two digits', () => {
    expect(
      getPermutations('23', {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
      }),
    ).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })

  it('three digits', () => {
    expect(
      getPermutations('234', {
        2: ['a', 'b'],
        3: ['d', 'e', 'f'],
        4: ['d', 'e'],
      }),
    ).toEqual(['add', 'ade', 'aed', 'aee', 'afd', 'afe', 'bdd', 'bde', 'bed', 'bee', 'bfd', 'bfe'])
  })
})
