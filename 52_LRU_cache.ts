/*
 * Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:
 *
 * set(key, value): sets key to value.
 * If there are already n items in the cache and we are adding a new item,
 * then it should also remove the least recently used item.
 *
 * get(key): gets the value at key. If no such key exists, return null.
 * Each operation should run in O(1) time.
 */

interface LRUNode<K, V> {
  key: K
  value: V
  prev: LRUNode<K, V> | null
  next: LRUNode<K, V> | null
}

export const createLRUCache = <K, V>(limit: number) => {
  const cache = new Map<K, LRUNode<K, V>>()
  let head: LRUNode<K, V> | null = null
  let tail: LRUNode<K, V> | null = null

  const createNode = (key: K, value: V): LRUNode<K, V> => ({
    key,
    value,
    prev: null,
    next: null,
  })

  const removeNode = (node: LRUNode<K, V>): void => {
    if (node.prev) {
      node.prev.next = node.next
    } else {
      head = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    } else {
      tail = node.prev
    }
  }

  const addToHead = (node: LRUNode<K, V>): void => {
    node.next = head
    node.prev = null

    if (head) {
      head.prev = node
    }

    head = node

    if (!tail) {
      tail = node
    }
  }

  const set = (key: K, value: V): void => {
    if (cache.has(key)) {
      const node = cache.get(key)!
      removeNode(node)
      cache.delete(key)
    } else if (cache.size >= limit && tail) {
      cache.delete(tail.key)
      removeNode(tail)
    }

    const newNode = createNode(key, value)
    addToHead(newNode)
    cache.set(key, newNode)
  }

  const get = (key: K): V | null => {
    const node = cache.get(key)
    if (!node) return null

    removeNode(node)
    addToHead(node)
    return node.value
  }

  return { set, get }
}
