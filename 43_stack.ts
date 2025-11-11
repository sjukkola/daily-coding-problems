/*
Implement a stack that has the following methods:

- push(val), which pushes an element onto the stack
- pop(), which pops off and returns the topmost element of the stack.
If there are no elements in the stack, then it should throw an error or return null.
- max(), which returns the maximum value in the stack currently.
If there are no elements in the stack, then it should throw an error or return null.
*/
"use strict";

class Stack {
  constructor() {
    this.stack = [];
    this.maxiumValue = [];
  }

  push(value) {
    this.stack.push(value);

    if (this.maxiumValue.length > 0) {
      this.maxiumValue.push(Math.max(value, this.maxiumValue[this.maxiumValue.length - 1]));
    } else {
      this.maxiumValue.push(value);
    }

  }

  pop() {
    if (this.stack.length < 1) return null;
    this.stack.pop();
    this.maxiumValue.pop();
  }

  max() {
    if (this.maxiumValue.length < 1) return null;
    return this.maxiumValue[this.maxiumValue.length - 1]
  }
}

const test = new Stack();
test.push(1);
test.push(5);
test.push(1);
test.push(27);
test.push(3);
test.push(23);
test.push(1);
test.pop();
console.log(test.max());
test.pop();
test.pop();
console.log(test.max());

