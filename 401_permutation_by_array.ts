/*
A permutation can be specified by an array P,
where P[i] represents the location of the element at i in the permutation.
For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array.
For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0],
return ["c", "b", "a"].
*/

"use strict"
const assert = require('assert');

function permutation(array, permutation) {
  return permutation.map(p => array[p]);
}

describe('Test', () => {
  it('Orders by frequency', function () {
    assert.deepEqual(permutation(["a", "b", "c"], [2, 1, 0]), ["c", "b", "a"]);
  });
});

