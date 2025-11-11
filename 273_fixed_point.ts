/*
This problem was asked by Apple.
A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.
check these for better implementation
https://rosettacode.org/wiki/Binary_search#JavaScript
https://techfindings.one/archives/2964
*/
"use strict"
const assert = require('assert');

const fixedPointLinear = (array) => {
    for (i in arr_1) {
        if (i == array[i]) {
            return i;
        }
    }
    return -1;
}

const fixedPoint = (array, low = 0, high = array.length - 1) => {
    /* pffffff */
    const mid = Math.floor((low + high) / 2);

    if (high >= low) {
        if(mid == array[mid]) {
            return array[mid];
        }  else if (mid > array[mid]) {
            return fixedPoint(array, mid + 1, high)
        } else {
            return fixedPoint(array, low, mid -1);
        }
    }

    return -1;
}

if (!global.describe) {
  const path = require('path');
  console.log('Please run with Mocha test-runner:');
  console.log('\x1b[33m%s\x1b[0m', `  - mocha ${path.basename(__filename)}`);
  process.exit(1);
}

const arr_1 = [-6, 0, 2, 40];
const arr_2 = [1, 5, 7, 8];
const arr_3 = [-10, -1, 0, 3 , 10, 11, 30, 50, 100]

describe('Test', () => {
  it('Founds a fixed point', function () {
    assert.equal(fixedPoint(arr_1), 2);
    assert.equal(fixedPoint(arr_3), 3);
  });
  it('Does not found a fixed point', function () {
    assert.equal(fixedPoint(arr_2), -1);
  });
});
