export function primeNumbers(number: number): string {
  const numbers: boolean[] = new Array(number + 1)
  numbers.fill(true)
  numbers[0] = numbers[1] = false
  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) numbers[i * j] = false
  }
  const primes = numbers.reduce(
    (primes: number[], isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    []
  )
  return primes.join(', ')
}
