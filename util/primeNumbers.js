export const primeNumbers = number => {
  let numbers = new Array(number + 1);
  numbers.fill(true)
  numbers[0] = numbers[1] = false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) numbers[i * j] = false
  }

  numbers = numbers.reduce(
    (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    []
  )
  return numbers.join(', ')
}
