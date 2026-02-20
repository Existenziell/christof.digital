export function primeFactors(n: number): number[] {
  const a: number[] = []
  let f = 2
  while (n > 1) {
    if (n % f === 0) {
      a.push(f)
      n /= f
    } else {
      f++
    }
  }
  return a
}
