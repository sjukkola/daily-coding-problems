'use strict'
const assert = require('assert');

/*
Given a string, generate all possible subsequences of the string.

For example, given the string xyz, return an array or set with the following strings:

  x
  y
  z
  xy
  xz
  yz
  xyz

Note that zx is not a valid subsequence since it is not in the order of the given string.

*/

function subsequences(string) {
  if (string == '')
    return ['']

  let result = [];
  let rest = subsequences(string.substring(1))
  result.push(...rest)

  for (let subseq of rest) {
    result.push(string[0] + subseq)
  }

  return result;
}

console.log(subsequences('xyz'))
