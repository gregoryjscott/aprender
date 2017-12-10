const shuffle = require('shuffle-array')

module.exports = function(things) {
  let notPicked = []

  return {
    next: () => {
      if (notPicked.length === 0) {
        notPicked = shuffle(things, {copy: true})
      }
      return notPicked.pop()
    }
  }
}
