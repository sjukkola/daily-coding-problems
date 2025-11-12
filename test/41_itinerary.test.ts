import { describe, expect, it } from 'vitest'
import { getItinerary } from '../41_itinerary'

describe('getItinerary', () => {
  it('returns the correct itinerary for a valid flight path', () => {
    const flights: [string, string][] = [
      ['SFO', 'HKO'],
      ['YYZ', 'SFO'],
      ['YUL', 'YYZ'],
      ['HKO', 'ORD'],
    ]
    expect(getItinerary(flights, 'YUL')).toEqual(['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'])
  })

  it('returns null when starting airport has no outgoing flights', () => {
    const flights: [string, string][] = [
      ['SFO', 'COM'],
      ['COM', 'YYZ'],
    ]
    expect(getItinerary(flights, 'COM')).toBeNull()
  })

  // TODO: not implemented
  it.skip('returns the lexicographically smallest itinerary', () => {
    const flights: [string, string][] = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
      ['C', 'A'],
    ]
    expect(getItinerary(flights, 'A')).toEqual(['A', 'B', 'C', 'A', 'C'])
  })

  it('returns null for empty flights array', () => {
    expect(getItinerary([], 'JFK')).toBeNull()
  })

  it('returns null for empty start airport', () => {
    const flights: [string, string][] = [['A', 'B']]
    expect(getItinerary(flights, '')).toBeNull()
  })

  it('handles a single flight correctly', () => {
    const flights: [string, string][] = [['NYC', 'LAX']]
    expect(getItinerary(flights, 'NYC')).toEqual(['NYC', 'LAX'])
  })

  it('returns null when path breaks before all flights are used', () => {
    const flights: [string, string][] = [
      ['A', 'B'],
      ['B', 'C'],
      ['D', 'E'],
    ]
    expect(getItinerary(flights, 'A')).toBeNull()
  })
})
