/*
Given a mapping of digits to letters (as in a phone number),
and a digit string, return all possible letters the number could represent.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …}
then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/
"use strict"

const assert = require('assert');

function getPermutations(d, mapping) {
  const digits = typeof d === 'number' ? d.toString().split('') : d;

  if (digits.length === 1)
    return mapping[digits[0]]

  let result = [];

  for (let char of mapping[digits[0]]) {
    for (let perm of getPermutations(digits.slice(1), mapping)) {
      result.push(char + perm);
    }
  }
  return result;
}

if (!global.describe) {
  const path = require('path');
  console.log('Please run with Mocha test-runner:');
  console.log('\x1b[33m%s\x1b[0m', `  - mocha ${path.basename(__filename)}`);
  process.exit(1);
}

describe('Test', () => {
  it('one digit', function () {
    assert.deepEqual(getPermutations(2, {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
    }), ["a", "b", "c"]);
  });
  it('two digits', function () {
    assert.deepEqual(getPermutations(23, {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
    }), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });
  it('three digits', function () {
  assert.deepEqual(getPermutations(234, {
      2: ["a", "b"],
      3: ["d", "e", "f"],
      4: ["d", "e"],
    }), ["add", "ade", "aed", "aee", "afd", "afe", "bdd", "bde", "bed", "bee", "bfd", "bfe"]);
  });
});
