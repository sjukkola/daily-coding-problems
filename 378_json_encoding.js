'use strict'
const assert = require('assert');

/*
Write a function that takes in a number, string, list, or dictionary and returns its JSON encoding.
It should also handle nulls.

For example, given the following input:

[None, 123, ["a", "b"], {"c":"d"}]
You should return the following, as a string:

'[null, 123, ["a", "b"], {"c": "d"}]'

*/

function stringify(input) {

  if (input == null || input == 'undefined')
    return 'null';

  if (typeof input == 'number' || typeof input == 'boolean')
    return input;

  if (typeof input == 'string')
    return `"${input}"`;

  if (Array.isArray(input))
    return `[${input.map((value) => stringify(value)).join(',')}]`

  if (typeof input == 'object')
    return `{${Object.keys(input).map((key) => `"${key}":${stringify(input[key])}`).join(',')}}`

}

/*
  TEST CASES
  1) Simple
  2) Complex array with nested objects
*/

let input = [null, 123, "string", ["a", "b"], {c:"d", d: 1}]
let input_nested = [
  null,
  123,
  ["string", null, 123],
  {
    a: ["string", {
      b: 1,
      c: "string",
      f: {
        d: [null],
        b: true,
        s: {
          s: 'stringifies'
        }
      }
    }]
  }
]

describe('Test', () => {
  it('Stringifies', function () {
    assert.equal(JSON.stringify(input), stringify(input));
    assert.equal(JSON.stringify(input_nested), stringify(input_nested));
  });
});

