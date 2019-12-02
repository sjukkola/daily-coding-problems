'use strict'
const assert = require('assert');

/*
This problem was asked by Amazon.

Write a function that takes a natural number as input and returns the number of digits the input has.

Constraint: don't use any loops.
*/

function length(number) {
  if (!Number.isInteger(number)) {
    return null;
  }

  return number.toString().length;

}

describe('Test', () => {
  it('return correct length', function () {
    assert.equal(length(1), 1);
    assert.equal(length(0), 1);
    assert.equal(length(12), 2);
    assert.equal(length(123), 3);
  });
  it('return null if number is not a integer', function () {
    assert.equal(length(1.123), null);
    assert.equal(length('12'), null);
  });
});
