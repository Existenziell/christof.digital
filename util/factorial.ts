export function factorial(n: number): number | string {
  if (n < 0) return 'Not allowed'
  if (n <= 1) return 1
  return n * (factorial(n - 1) as number)
}
