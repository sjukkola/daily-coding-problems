/*
Given an unordered list of flights taken by someone, each represented as
(origin, destination) pairs, and a starting airport, compute the person's itinerary.
If no such itinerary exists, return null. If there are multiple possible itineraries,
return the lexicographically smallest one.

All flights must be used in the itinerary.

For example, given the list of flights
[('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]
and starting airport 'YUL',
you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')]
and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')]
and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C']
even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary.
However, the first one is lexicographically smaller.
*/

"use strict";

const mapToKeyValuePairs = (flights) => flights.reduce((map, f) => {
  map[f[0]] = f[1];
  return map;
},
  {}
);

function getItinerary(flights, start) {

  if (!flights || !start) {
    console.error('Give a list of flights and a starting airport');
    return;
  }

  let map = mapToKeyValuePairs(flights);
  let itinerary = [start];
  let to = start;

  for (let i = 0; i < flights.length; i++) {
    to = map[to];
    if (!to) return null;
    itinerary.push(to);
  }

  return itinerary;
}

const flights1 = [
  ["SFO", "HKO"],
  ["YYZ", "SFO"],
  ["YUL", "YYZ"],
  ["HKO", "ORD"],
];

const flights2 = [
  ["SFO", "COM"],
  ["COM", "YYZ"]
]

console.log(getItinerary(flights1, "YUL"));
console.log(getItinerary(flights2, "COM"));
