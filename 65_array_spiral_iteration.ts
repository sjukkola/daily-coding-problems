/*
 * This problem was asked by Amazon.
 * Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
 * For example, given the following matrix:
 * [[1,  2,  3,  4,  5],
 *  [6,  7,  8,  9,  10],
 *  [11, 12, 13, 14, 15],
 *  [16, 17, 18, 19, 20]]
 *
 * You should return:
 * [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
 */

enum Direction {
  RIGHT,
  DOWN,
  LEFT,
  UP,
}

interface Position {
  readonly x: number
  readonly y: number
}

export const spiralOrder = (matrix: readonly (readonly number[])[]): number[] => {
  if (matrix.length === 0 || matrix[0].length === 0) return []

  const rows = matrix.length
  const cols = matrix[0].length
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
  const result: number[] = []

  let direction = Direction.RIGHT
  let pos: Position = { x: 0, y: 0 }

  const getNextPosition = (current: Position, dir: Direction): Position => {
    switch (dir) {
      case Direction.RIGHT:
        return { x: current.x + 1, y: current.y }
      case Direction.DOWN:
        return { x: current.x, y: current.y + 1 }
      case Direction.LEFT:
        return { x: current.x - 1, y: current.y }
      case Direction.UP:
        return { x: current.x, y: current.y - 1 }
    }
  }

  const nextDirection = (dir: Direction): Direction => {
    return (dir + 1) % 4
  }

  const isValid = (p: Position): boolean => {
    return p.y >= 0 && p.y < rows && p.x >= 0 && p.x < cols && !visited[p.y][p.x]
  }

  while (result.length < rows * cols) {
    result.push(matrix[pos.y][pos.x])
    visited[pos.y][pos.x] = true

    const nextPos = getNextPosition(pos, direction)
    if (isValid(nextPos)) {
      pos = nextPos
    } else {
      direction = nextDirection(direction)
      pos = getNextPosition(pos, direction)
    }
  }

  return result
}
