const getRandomInt = (a, b) => {
  const min = Math.ceil(a)
  const max = Math.floor(b)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const checkStrLength = (str, maxLen) => str.length <= maxLen

export { getRandomInt, checkStrLength }
