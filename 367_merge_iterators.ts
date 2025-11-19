/*
 * This problem was asked by Two Sigma.
 *
 * Given two sorted iterators, merge it into one iterator.
 *
 * For example, given these two iterators:
 *
 * foo = iter([5, 10, 15])
 * bar = iter([3, 8, 9])
 * You should be able to do:
 *
 * for num in merge_iterators(foo, bar):
 *     print(num)
 *
 * # 3
 * # 5
 * # 8
 * # 9
 * # 10
 * # 15
 */

export function* mergeIterators<T>(
  iter1: Iterable<T>,
  iter2: Iterable<T>,
  compare: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): Generator<T> {
  const it1 = iter1[Symbol.iterator]()
  const it2 = iter2[Symbol.iterator]()

  let result1 = it1.next()
  let result2 = it2.next()

  while (!result1.done || !result2.done) {
    if (result1.done) {
      yield result2.value
      result2 = it2.next()
    } else if (result2.done) {
      yield result1.value
      result1 = it1.next()
    } else if (compare(result1.value, result2.value) <= 0) {
      yield result1.value
      result1 = it1.next()
    } else {
      yield result2.value
      result2 = it2.next()
    }
  }
}
