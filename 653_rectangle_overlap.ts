/*
 * You are given given a list of rectangles represented by min and max x- and y-coordinates. Compute whether or not a pair of rectangles overlap each other.
 * If one rectangle completely covers another, it is considered overlapping.
 *
 * For example, given the following rectangles:
 *
 * {
 *     "top_left": (1, 4),
 *     "dimensions": (3, 3) # width, height
 * },
 * {
 *     "top_left": (-1, 3),
 *     "dimensions": (2, 1)
 * },
 * {
 *     "top_left": (0, 5),
 *     "dimensions": (4, 3)
 * }
 * return true as the first and third rectangle overlap each other.
 */

import { fill, uniq } from './util/collection-utils'

type Rectangle = {
  readonly topLeft: readonly [number, number]
  readonly dimensions: readonly [number, number]
}

export function hasOverlap(rectangles: readonly Rectangle[]): boolean {
  const populated: {
    x: number[]
    y: number[]
  } = {
    x: [],
    y: [],
  }

  for (const rectangle of rectangles) {
    const x = fill(rectangle.topLeft[0], rectangle.topLeft[0] + rectangle.dimensions[0] - 1)
    const y = fill(rectangle.topLeft[1], rectangle.topLeft[1] + rectangle.dimensions[1] - 1)
    populated.x = [...populated.x, ...x]
    populated.y = [...populated.y, ...y]
  }

  if (populated.x.length !== uniq(populated.x).length || populated.y.length !== uniq(populated.y).length) {
    return true
  }

  return false
}
