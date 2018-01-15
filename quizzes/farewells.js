const define = require('../define')

const farewells = [
  { spanish: 'Adios', english: 'Bye' },
  { spanish: 'Hasta luego', english: 'See you later' },
  { spanish: 'Hasta pronto', english: 'See you soon' }
]
const definitions = define(farewells)

module.exports = {
  name: 'Farewells',
  words: farewells,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
