const define = require('../define')

const greetings = [
  { spanish: 'Hola', english: 'Hi' },
  { spanish: '¿Cómo está?', english: 'How are you?' },
  { spanish: 'Muy bien', english: 'Very well' },
  { spanish: 'Bien', english: 'Fine' },
  { spanish: 'Así-así', english: 'So so' },
  { spanish: 'Más o menos', english: 'More or less' },
  { spanish: 'Mal', english: 'Bad' },
  { spanish: 'Muy mal', english: 'Very bad' },
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
