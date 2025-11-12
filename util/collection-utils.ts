export const notEmpty = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined
}

export const difference = <T>(a: Iterable<T>, b: Iterable<T>): Array<T> => {
  const bSet = new Set(b)
  return Array.from(a).filter((x) => !bSet.has(x))
}

export const sumBy = <T>(
  iterable: Iterable<T>,
  valueExtractor: (item: T) => number = (item) => item as unknown as number,
): number => Array.from(iterable).reduce((total, current) => total + valueExtractor(current), 0)

export const toMap = <T, K, V = T>(
  iterable: Iterable<T>,
  keyExtractor: (item: T) => K,
  valueExtractor: (item: T) => V = (item) => item as unknown as V,
): Map<K, V> => {
  return new Map(Array.from(iterable).map((item) => [keyExtractor(item), valueExtractor(item)]))
}

export const groupBy = <T, K, V = T>(
  iterable: Iterable<T>,
  keyExtractor: (item: T) => K,
  valueExtractor: (item: T) => V = (item) => item as unknown as V,
): Map<K, V[]> => {
  return Array.from(iterable).reduce((grouped: Map<K, V[]>, item: T) => {
    const key = keyExtractor(item)
    if (!grouped.has(key)) {
      grouped.set(key, [])
    }
    ;(grouped.get(key) as V[]).push(valueExtractor(item))
    return grouped
  }, new Map<K, V[]>())
}
