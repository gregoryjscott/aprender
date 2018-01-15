const define = require('../define')

const alphabet = [
  { spanish: 'ah', english: 'A' },
  { spanish: 'be', english: 'B' },
  { spanish: 'ce', english: 'C' },
  { spanish: 'che', english: 'CH' },
  { spanish: 'de', english: 'D' },
  { spanish: 'eh', english: 'E' },
  { spanish: 'efe', english: 'F' },
  { spanish: 'ge', english: 'G' },
  { spanish: 'hache', english: 'H' },
  { spanish: 'ee', english: 'I' },
  { spanish: 'jota', english: 'J' },
  { spanish: 'ka', english: 'K' },
  { spanish: 'ele', english: 'L' },
  { spanish: 'eh-yea', english: 'LL' },
  { spanish: 'eme', english: 'M' },
  { spanish: 'ene', english: 'N' },
  { spanish: 'en-yea', english: 'Ñ' },
  { spanish: 'oh', english: 'O' },
  { spanish: 'pe', english: 'P' },
  { spanish: 'coo', english: 'Q' },
  { spanish: 'ere', english: 'R' },
  { spanish: 'erre', english: 'RR' },
  { spanish: 'ese', english: 'S' },
  { spanish: 'te', english: 'T' },
  { spanish: 'oo', english: 'U' },
  { spanish: 'be', english: 'V' },
  { spanish: 'doble ve', english: 'W' }, // doble oo
  { spanish: 'equis', english: 'X' },
  { spanish: 'ee-griega', english: 'Y' },
  { spanish: 'zeta', english: 'Z' }
]
const definitions = define(alphabet)

module.exports = {
  name: 'Alphabet',
  words: alphabet,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
