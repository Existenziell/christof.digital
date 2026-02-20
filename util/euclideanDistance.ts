export function euclideanDistance(a: Record<string, number>, b: Record<string, number>): number {
  return Math.hypot(...Object.keys(a).map((k) => b[k] - a[k]))
}
