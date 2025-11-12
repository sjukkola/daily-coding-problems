/*
 * Given an unordered list of flights taken by someone, each represented as
 * (origin, destination) pairs, and a starting airport, compute the person's itinerary.
 * If no such itinerary exists, return null. If there are multiple possible itineraries,
 * return the lexicographically smallest one.
 *
 * All flights must be used in the itinerary.
 *
 * For example, given the list of flights
 * [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]
 * and starting airport 'YUL',
 * you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
 *
 * Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')]
 * and starting airport 'COM', you should return null.
 *
 * Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')]
 * and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C']
 * even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary.
 * However, the first one is lexicographically smaller.
 */

import { toMap } from './util/collection-utils'

type Flight = [string, string]

export function getItinerary(flights: Flight[], start: string): string[] | null {
  if (flights.length < 1) return null

  const flightMap = toMap(
    flights,
    (flight) => flight[0],
    (flight) => flight[1],
  )
  const itinerary: string[] = [start]
  for (let i = 0; i < flights.length; i++) {
    const currentAirport = itinerary[i]
    const flightTo = flightMap.get(currentAirport)
    if (!flightTo) return null
    itinerary.push(flightTo)
  }

  return itinerary
}
