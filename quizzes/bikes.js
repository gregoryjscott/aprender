const define = require('../define')

const bikes = [
  { spanish: 'el marco', english: 'frame' },
  { spanish: 'la cadena', english: 'chain' },
  { spanish: 'el candado', english: 'padlock' },
  { spanish: 'el casco', english: 'helmet' },
  { spanish: 'el caño', english: 'stem' },
  { spanish: 'las cintas', english: 'grips' },
  { spanish: 'la coraza', english: 'tire' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
  { spanish: '', english: '' },
]
const definitions = define(bikes)

module.exports = {
  name: 'Bikes',
  words: bikes,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
