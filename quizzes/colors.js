const define = require('../define')

const colors = [
  { spanish: 'azul', english: 'blue' },
  { spanish: 'blanco', english: 'white' },
  { spanish: 'rojo', english: 'red' },
  { spanish: 'voilete', english: 'violet' },
  { spanish: 'morado', english: 'purple' },
  { spanish: 'amarillo', english: 'yellow' },
  { spanish: 'anaranjado', english: 'orange' },
  { spanish: 'verde', english: 'green' },
  { spanish: 'rosa', english: 'pink' }
]
const definitions = define(colors)

module.exports = {
  name: 'Colors',
  words: colors,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
