/*
 * Given the position of all the coins and your current position, find the closest coin to you in terms of
 * Manhattan distance. That is, you can move around up, down, left, and right, but not diagonally.
 * If there are multiple possible closest coins, return any of them.
 *
 * For example, given the following map, where you are x, coins are o, and empty spaces are . (top left is 0, 0):
 *
 * ---------------------
 * | . | . | x | . | o |
 * ---------------------
 * | o | . | . | . | . |
 * ---------------------
 * | o | . | . | . | o |
 * ---------------------
 * | . | . | o | . | . |
 * ---------------------
 * return (0, 4), since that coin is closest. This map would be represented in our question as:
 *
 * Our position: (0, 2)
 * Coins: [(0, 4), (1, 0), (2, 0), (3, 2)]
 */

type Position = readonly [number, number]

const getManhattanDistance = (pos1: Position, pos2: Position): number => {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1])
}

export const findClosestCoin = (position: Position, coins: readonly Position[]): Position | null => {
  if (!coins || coins.length === 0) {
    return null
  }

  let minDistance = Infinity
  let closestCoin: Position | null = null

  for (const coin of coins) {
    const distance = getManhattanDistance(position, coin)
    if (distance < minDistance) {
      minDistance = distance
      closestCoin = coin
    }
  }

  return closestCoin
}
