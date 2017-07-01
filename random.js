module.exports = function (words) {
  return words[Math.round(Math.random() * (words.length - 1))]
}
