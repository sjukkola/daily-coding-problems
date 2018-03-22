/*
Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

set(key, value): sets key to value.
If there are already n items in the cache and we are adding a new item,
then it should also remove the least recently used item.

get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.

*/

class LRU {
  constructor(limit) {
    this.limit = limit;
    this.map = {};
    this.head = null;
    this.tail = null;
  }

  lruNode(key, value) {
    return {
      key,
      value,
      left: null,
      right: null,
    };
  }

  set(key, value) {
    const node = this.lruNode(key, value);

    if (this.map[key]) {
      this.remove(key);
    } else {
      this.checkCacheLimit();
    }

    this.setHead(node);
  }

  get(key) {
    if (this.map[key])
      return this.map[key]

    return null
  }

  checkCacheLimit() {
    if (Object.keys(this.map).length >= this.limit) {
      delete this.map[this.tail.key];
      this.tail = this.tail.left;
      this.tail.right = null;
    }
  }

  setHead(node) {
    if (this.head !== null) {
      node.right = this.head;
      this.head.left = node;
    }

    if (this.tail === null) {
      this.tail = node;
    }

    this.head = node;
    this.map[node.key] = node;
  }

  remove(key) {
    const node = this.map[key];

    if (node.right !== null) {
      node.left.right = node.right;
    } else {
      this.tail = node.left;
    }

    if (node.left !== null) {
      node.left.right = node.right;
    } else {
      this.head = node.right;
    }

    delete this.map[key];
  }
}
