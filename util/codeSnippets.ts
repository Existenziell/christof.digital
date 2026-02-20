export const timeToTypeSnippet = `const timeToType = (digits, num) => {
  let time = 0
  for (let i = 0; i < num.length; i++) {
    const currentIndex = digits.indexOf(num[i])
    let lastIndex = digits.indexOf(num[i - 1])
    if (lastIndex < 0) lastIndex = time

    time += Math.abs(currentIndex - lastIndex)
  }
  return time
}`

export const downloadTimeSnippet = `const downloadTime = (filesize, trend, observations) => {
  const getSum = (array) => (array.reduce((partialSum, array) => 
    partialSum + parseInt(array), 0)
  )

  const downloaded = getSum(trend)
  const remaining = filesize - downloaded
  const observedElements = trend.splice(trend.length - observations)
  const lastAverage = getSum(observedElements) / observations

  if (lastAverage === 0) return -1
  const result = Math.ceil(remaining / lastAverage)
  if (isNaN(result) || result <= 0) return -1
  return result
}`

export const fibonacciSnippet = `const fibonacci = (depth) => {
  let a = 1, b = 0, temp
  let sequence = [b]

  while (depth > 0) {
    temp = a
    a = a + b
    b = temp
    sequence.push(b)
    depth--
  }

  return sequence.join(', ')
}`

export const invertStringSpecialSnippet = `const invertStringSpecial = (string) => {
  const chars = string.split('')
  const lettersArray = []

  for (let i = 0; i < chars.length; i++) {
    const isLetter = /^[a-zA-Z]+$/.test(chars[i])
    if (isLetter) {
      lettersArray.push(chars[i])
      chars[i] = null
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === null) {
      chars[i] = lettersArray.pop()
    }
  }

  const result = chars.join('')
  return result
}`

export const rotateArraySnippet = `const rotateArray = (input, steps) => {
  if (steps === 0) return input
  if (steps > input.length) {
    if (steps % input.length === 0) {
      steps = input.length
    } else {
      steps = Math.floor(steps % input.length)
    }
  }

  let changed = []
  const unchanged = input.splice(0, input.length - steps)

  while (steps) {
    const lastElement = input.pop()
    changed.unshift(lastElement)
    steps--
  }

  const result = changed.concat(unchanged)
  return result
}`

export const fizzBuzzSnippet = `const fizzBuzz = (input) => {
  let output = []
  for (let i = 1; i <= input; i++) {
    if (i % 6 === 0) output.push("Fizz Buzz")
    else if (i % 2 === 0) output.push("Fizz")
    else if (i % 3 === 0) output.push("Buzz")
    else output.push(i)
  }
  return output
}`

export const caesarCipherSnippet = `const caesarCipher = (phrase, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const input = phrase.toLowerCase()
  let output = ""

  for (let i = 0; i < input.length; i++) {
    const letter = input[i]

    if (alphabet.indexOf(letter) === -1) {
      output += letter
      continue
    }

    let index = alphabet.indexOf(letter) + number % 26
    if (index > 25) index -= 26
    if (index < 0) index += 26

    output +=
      phrase[i] === phrase[i].toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index]
  }

  return output
}`

export const ransomNoteSnippet = `const ransomNote = (note, magazine) => {
  const magazineWords = magazine.split(" ")
  const magazineHash = {}

  magazineWords.forEach(word => {
    if (!magazineHash[word]) magazineHash[word] = 0
    magazineHash[word]++
  })

  const noteWords = note.split(" ")
  let possible = true

  noteWords.forEach(word => {
    if (magazineHash[word]) {
      magazineHash[word]--
      if (magazineHash[word] < 0) possible = false
    } else possible = false
  })

  return possible
}`

export const primeNumbersSnippet = `const primeNumbers = number => {
  let numbers = new Array(number + 1)
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
}`

export const factorialSnippet = `const factorial = (n) => {
  if (n < 0) return 'Not allowed'
  if (n <= 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}`

export const isPrimeSnippet = `const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= boundary; i++) {
    if (num % i === 0) return false
  }
  return num >= 2
}`

export const primeFactorsSnippet = `const primeFactors = n => {
  let a = [], f = 2
  while (n > 1) {
    if (n % f === 0) {
      a.push(f)
      n /= f
    } else {
      f++
    }
  }
  return a
}`

export const euclideanDistanceSnippet = `const euclideanDistance = (a, b) =>
  Math.hypot(...Object.keys(a).map(k => b[k] - a[k]))`

export const bananaSnippet = `const getBanana = () => {
  const banana = "b" + "a" + +"a" + "a"
  return banana // prints baNaNa
}`
