const define = require('../define')

const directions = [
  { spanish: 'norte', english: 'north' },
  { spanish: 'este', english: 'east' },
  { spanish: 'sur', english: 'south' },
  { spanish: 'oeste', english: 'west' }
]
const definitions = define(directions)

module.exports = {
  name: 'Directions',
  words: directions,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
