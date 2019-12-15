"use strict"
const assert = require('assert');

/*
Given a string, sort it in decreasing order based on the frequency of characters.
If there are multiple possible solutions, return any of them.

For example, given the string tweet, return tteew. eettw would also be acceptable.

*/

function sortByFrequency (string) {
  return Object.entries(Array.from(string).reduce((map, letter) => {
    if (!map[letter])
      map[letter] = 1;
    else
      map[letter]++;
    return map;
  }, {}))
  .sort((a, b) => b[1] - a[1])
  .reduce((string, n) => string + n[0].repeat(n[1]), '');
}

describe('Test', () => {
  it('Orders by frequency', function () {
    assert.notEqual(['tteew', 'eettw'].indexOf(sortByFrequency('tweet')), -1);
    assert.notEqual(['oomacbk'].indexOf(sortByFrequency('macbook')), -1);
  });
});

