const define = require('../define')

const greetings = [
  { spanish: 'Hola', english: 'Hi' },
  { spanish: 'Adios', english: 'Bye' },
  { spanish: 'Buenas dias', english: 'Good day' },
  { spanish: 'Buenas noches', english: 'Good night' },
  { spanish: 'Buenas tardes', english: 'Good afternoon' }
]

const definitions = define(greetings)

module.exports = {
  name: 'Greetings',
  words: greetings,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
