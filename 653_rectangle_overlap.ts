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

type Rectangle = {
  readonly topLeft: readonly [number, number]
  readonly dimensions: readonly [number, number]
}

type Coordinates = [number, number, number, number]

const convertRectangleToCoordinates = (r: Rectangle): Coordinates => {
  const [x, y] = r.topLeft
  const [width, height] = r.dimensions
  return [x, y, x + width, y + height]
}

const doRectanglesOverlap = (r1: Coordinates, r2: Coordinates): boolean => {
  const [r1Left, r1Top, r1Right, r1Bottom] = r1
  const [r2Left, r2Top, r2Right, r2Bottom] = r2

  return !(r2Left >= r1Right || r2Right <= r1Left || r2Top >= r1Bottom || r2Bottom <= r1Top)
}

export const hasOverlap = (rectangles: readonly Rectangle[]): boolean => {
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (
        doRectanglesOverlap(convertRectangleToCoordinates(rectangles[i]), convertRectangleToCoordinates(rectangles[j]))
      ) {
        return true
      }
    }
  }
  return false
}
