import { describe, expect, it } from 'vitest'
import { createLRUCache } from '../52_LRU_cache'

describe('createLRUCache', () => {
  it('should set and get values', () => {
    const cache = createLRUCache<string, number>(3)
    cache.set('a', 1)
    cache.set('b', 2)
    expect(cache.get('a')).toBe(1)
    expect(cache.get('b')).toBe(2)
  })

  it('should return null for non-existent key', () => {
    const cache = createLRUCache<string, number>(3)
    expect(cache.get('missing')).toBeNull()
  })

  it('should evict least recently used item when limit exceeded', () => {
    const cache = createLRUCache<string, number>(2)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    expect(cache.get('a')).toBeNull()
    expect(cache.get('b')).toBe(2)
    expect(cache.get('c')).toBe(3)
  })

  it('should update existing key without eviction', () => {
    const cache = createLRUCache<string, number>(2)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('a', 10)
    expect(cache.get('a')).toBe(10)
    expect(cache.get('b')).toBe(2)
  })

  it('should move accessed item to most recently used', () => {
    const cache = createLRUCache<string, number>(2)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.get('a')
    cache.set('c', 3)
    expect(cache.get('a')).toBe(1)
    expect(cache.get('b')).toBeNull()
    expect(cache.get('c')).toBe(3)
  })

  it('should handle single item cache', () => {
    const cache = createLRUCache<string, number>(1)
    cache.set('a', 1)
    expect(cache.get('a')).toBe(1)
    cache.set('b', 2)
    expect(cache.get('a')).toBeNull()
    expect(cache.get('b')).toBe(2)
  })

  it('should handle multiple evictions', () => {
    const cache = createLRUCache<string, number>(2)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    cache.set('d', 4)
    expect(cache.get('a')).toBeNull()
    expect(cache.get('b')).toBeNull()
    expect(cache.get('c')).toBe(3)
    expect(cache.get('d')).toBe(4)
  })

  it('should work with different key types', () => {
    const cache = createLRUCache<number, string>(2)
    cache.set(1, 'one')
    cache.set(2, 'two')
    expect(cache.get(1)).toBe('one')
    expect(cache.get(2)).toBe('two')
  })

  it('should maintain order after multiple gets', () => {
    const cache = createLRUCache<string, number>(3)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    cache.get('a')
    cache.get('b')
    cache.set('d', 4)
    expect(cache.get('c')).toBeNull()
    expect(cache.get('a')).toBe(1)
    expect(cache.get('b')).toBe(2)
    expect(cache.get('d')).toBe(4)
  })
})
