module.exports = function(things) {
  return things[Math.round(Math.random() * (things.length - 1))]
}
