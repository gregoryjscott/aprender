const define = require('../define')

const seasons = [
  { spanish: 'la primavera', english: 'spring' },
  { spanish: 'el verano', english: 'summer' },
  { spanish: 'el otoño', english: 'autumn' },
  { spanish: 'el invierno', english: 'winter' }
]

const definitions = define(seasons)

module.exports = {
  name: 'Seasons',
  words: seasons,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
