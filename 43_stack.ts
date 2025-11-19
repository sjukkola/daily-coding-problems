/*
 * Implement a stack that has the following methods:
 *
 * - push(val), which pushes an element onto the stack
 * - pop(), which pops off and returns the topmost element of the stack.
 * If there are no elements in the stack, then it should throw an error or return null.
 * - max(), which returns the maximum value in the stack currently.
 * If there are no elements in the stack, then it should throw an error or return null.
 */

export const createStack = () => {
  const stack: number[] = []
  const maxValues: number[] = []

  const push = (value: number): void => {
    stack.push(value)
    const currentMax = maxValues.length > 0 ? maxValues[maxValues.length - 1] : value
    maxValues.push(Math.max(value, currentMax))
  }

  const pop = (): number | null => {
    if (stack.length < 1) return null
    maxValues.pop()
    return stack.pop() ?? null
  }

  const max = (): number | null => {
    if (maxValues.length < 1) return null
    return maxValues[maxValues.length - 1]
  }

  return { push, pop, max }
}
