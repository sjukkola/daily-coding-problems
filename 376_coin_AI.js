'use strict'
const assert = require('assert');
/*
Given the position of all the coins and your current position, find the closest coin to you in terms of
Manhattan distance. That is, you can move around up, down, left, and right, but not diagonally.
If there are multiple possible closest coins, return any of them.

For example, given the following map, where you are x, coins are o, and empty spaces are . (top left is 0, 0):

---------------------
| . | . | x | . | o |
---------------------
| o | . | . | . | . |
---------------------
| o | . | . | . | o |
---------------------
| . | . | o | . | . |
---------------------
return (0, 4), since that coin is closest. This map would be represented in our question as:

Our position: (0, 2)
Coins: [(0, 4), (1, 0), (2, 0), (3, 2)]
*/

function getManhattanDistance(position, coin) {
  return Math.abs(position[0] - coin[0]) + Math.abs(position[1] - coin[1]);
}


function closest(position, coins) {
  if (!coins || coins.length < 1)
    return null;

  let map = new Map();
  for (let coin of coins) {
    map.set(getManhattanDistance(position, coin), coin);
  }
  return [...map.entries()].sort()[0][1];
}


describe('Test', () => {
  it('founds closest coin', function () {
    assert.deepEqual(closest([0,2], [[0, 4],  [1, 0], [2, 0], [3, 2]]), [0,4]);
  });
  it('returns null if no coins given', function () {
    assert.deepEqual(closest([0,2], []), null);
    assert.deepEqual(closest([0,2]), null);

  });
});
