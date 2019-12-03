/*
This problem was asked by Two Sigma.

Given two sorted iterators, merge it into one iterator.

For example, given these two iterators:

foo = iter([5, 10, 15])
bar = iter([3, 8, 9])
You should be able to do:

for num in merge_iterators(foo, bar):
    print(num)

# 3
# 5
# 8
# 9
# 10
# 15
*/

let foo = [5, 10, 15];
let bar = [3, 8, 9];

class MergeIterator {
  constructor(arr1, arr2) {
    this.arr1 = arr1;
    this.arr2 = arr2;
    this.index1 = 0;
    this.index2 = 0;
  }

  next() {
    if (this.index1 + this.index2 === this.arr1.length + this.arr2.length) {
      return { done: true };
    }

    let value = {
      value: this.arr1[this.index1] >= this.arr2[this.index2] ? this.arr2[this.index2] : this.arr1[this.index1],
      done: false,
    };

    this.arr1[this.index1] >= this.arr2[this.index2] ? this.index2++: this.index1++;

    return value;

  }
}

let mergedIterators = [];
mergedIterators[Symbol.iterator] = function () {
  return new MergeIterator(foo, bar);
}

for (let num of mergedIterators)
  console.log(num)

/*
 TODO:
 1) Implement as generator function
 2) Truely merge iterators
*/

