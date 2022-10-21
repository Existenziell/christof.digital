export const caesarCipher = (phrase, number) => {
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
}
