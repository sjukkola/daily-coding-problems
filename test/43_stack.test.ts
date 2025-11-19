import { describe, expect, it } from 'vitest'
import { createStack } from '../43_stack'

describe('createStack', () => {
  it('should push and track maximum value', () => {
    const stack = createStack()
    stack.push(1)
    stack.push(5)
    stack.push(3)
    expect(stack.max()).toBe(5)
  })

  it('should return null for max on empty stack', () => {
    const stack = createStack()
    expect(stack.max()).toBeNull()
  })

  it('should return null for pop on empty stack', () => {
    const stack = createStack()
    expect(stack.pop()).toBeNull()
  })

  it('should pop and return topmost element', () => {
    const stack = createStack()
    stack.push(1)
    stack.push(5)
    expect(stack.pop()).toBe(5)
    expect(stack.pop()).toBe(1)
  })

  it('should update max after popping', () => {
    const stack = createStack()
    stack.push(1)
    stack.push(5)
    stack.push(1)
    stack.push(27)
    stack.push(3)
    stack.push(23)
    stack.push(1)
    expect(stack.max()).toBe(27)
    stack.pop()
    stack.pop()
    stack.pop()
    expect(stack.max()).toBe(27)
    stack.pop()
    expect(stack.max()).toBe(5)
  })

  it('should handle single element', () => {
    const stack = createStack()
    stack.push(42)
    expect(stack.max()).toBe(42)
    expect(stack.pop()).toBe(42)
    expect(stack.max()).toBeNull()
  })

  it('should handle duplicate maximum values', () => {
    const stack = createStack()
    stack.push(5)
    stack.push(5)
    stack.push(3)
    expect(stack.max()).toBe(5)
    stack.pop()
    expect(stack.max()).toBe(5)
    stack.pop()
    expect(stack.max()).toBe(5)
  })

  it('should handle descending values', () => {
    const stack = createStack()
    stack.push(10)
    stack.push(8)
    stack.push(6)
    expect(stack.max()).toBe(10)
    stack.pop()
    expect(stack.max()).toBe(10)
  })

  it('should handle ascending values', () => {
    const stack = createStack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.max()).toBe(3)
    stack.pop()
    expect(stack.max()).toBe(2)
  })
})
