export function orZero<T extends number | undefined>(maybeValue: T) {
  return maybeValue ?? 0;
}
