"use strict"

const matrix =
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];

const N = matrix[0].length;
const M = matrix.length;
let remaining = N * M;

const DIRECTION = {
  RIGHT: 0,
  LEFT: 1,
  DOWN: 2,
  UP: 3,
};

let current_direction = DIRECTION.RIGHT;
let current_position = {
  x: 0,
  y: 0,
};


const nextPosition = () => {
  switch (current_direction) {
    case DIRECTION.RIGHT:
      return {
        y: current_position.y,
        x: current_position.x + 1
      };
    case DIRECTION.LEFT:
      return {
        y: current_position.y,
        x: current_position.x - 1
      }
    case DIRECTION.UP:
      return {
        y: current_position.y - 1,
        x: current_position.x
      }
    case DIRECTION.DOWN:
      return {
        y: current_position.y + 1,
        x: current_position.x
      }
  }
}

const changeDirection = () => {
  switch (current_direction) {
    case DIRECTION.RIGHT:
      current_direction = DIRECTION.DOWN
      break;
    case DIRECTION.LEFT:
      current_direction = DIRECTION.UP
      break;
    case DIRECTION.UP:
      current_direction = DIRECTION.RIGHT
      break;
    case DIRECTION.DOWN:
      current_direction = DIRECTION.LEFT
      break;
  }
}

/*
* Check if position is
* - out of bounds
* - already declared to undefined
*/
const shouldChangeDirection = (position) => {
  const { x, y } = position;

  let out_of_bounds_x = x >= N;
  let out_of_bounds_y = y >= M;

  if (!out_of_bounds_x && !out_of_bounds_y && matrix[y][x])
    return false

  return true;
}

while (remaining > 0) {
  const { x, y } = current_position;
  console.log(matrix[y][x]);
  matrix[y][x] = undefined;
  remaining--

  let next_position = nextPosition();
  if (shouldChangeDirection(next_position)) {
    changeDirection();
    current_position = nextPosition();
  } else {
    current_position = next_position;
  }

}

