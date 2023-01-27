module.exports = function check(str, bracketsConfig) {
  const stack = []
  const openingBrackets = bracketsConfig.map(arr => arr[0])
  const closingBrackets = bracketsConfig.map(arr => arr[1])

  for (let char of str) {
    if (closingBrackets.includes(char) && char === stack[stack.length - 1]) {
      stack.pop()
      continue
    }

    if (openingBrackets.includes(char)) {
      stack.push(char)
      continue
    }

    const [opening] = bracketsConfig.find(config => char === config[1])
    
    if (stack.pop() !== opening) {
      return false
    }
  }

  return stack.length === 0
}
