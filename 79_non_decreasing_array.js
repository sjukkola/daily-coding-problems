/*
Given an array of integers, write a function to determine whether the array could become
non-decreasing by modifying at most 1 element.

For example, given the array [10, 5, 7], you should return true,
since we can modify the 10 into a 1 to make the array non-decreasing.

Given the array [10, 5, 1], you should return false,
since we can't modify any one element to get a non-decreasing array.
*/
"use strict"
const assert = require('assert');
const path = require('path');

const notFirstOrLast = (i, arr) => i > 0 && i + 2 < arr.length;

function check(arr) {
  let timesModified = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      if (timesModified === 1) return false;

      if (
        notFirstOrLast(i, arr) &&
        arr[i + 1] < arr[i - 1] &&
        arr[i] > arr[i + 2]
      ) return false;

      timesModified++
    }
  }
  return true;
}

if (!global.describe) {
  console.log('Please run with Mocha test-runner:');
  console.log('\x1b[33m%s\x1b[0m', `  - mocha ${path.basename(__filename)}`);
  process.exit(1);
}

describe('Test', () => {
  it('is decreasing array', function () {
    assert.equal(check([10, 5, 7]), true);
    assert.equal(check([1, 1, 1, 2, 3, 2]), true);
    assert.equal(check([1, 2, 1, 2, 2, 2, 3]), true);
  });

  it('is non-decreasing array', function () {
    assert.equal(check([10, 5, 1]), false);
    assert.equal(check([1, 2, 1, 2, 2, 1, 2]), false);
    assert.equal(check([1, 1, 1, 2, 3, 2, 2, 3, 2]), false);
    assert.equal(check([2, 1, 1, 2, 2, 2, 3, 2]), false);
  });
});
