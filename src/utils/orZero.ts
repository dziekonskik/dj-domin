export function orZero(maybeValue: number | undefined) {
  const value = maybeValue ?? 0;
  if (isNaN(value)) return 0;
  return value;
}
