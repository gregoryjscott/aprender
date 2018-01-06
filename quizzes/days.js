const define = require('../define')

const days = [
  { spanish: 'domingo', english: 'Sunday' },
  { spanish: 'lunes', english: 'Monday' },
  { spanish: 'martes', english: 'Tuesday' },
  { spanish: 'miercoles', english: 'Wednesday' },
  { spanish: 'jueves', english: 'Thursday' },
  { spanish: 'viernes', english: 'Friday' },
  { spanish: 'sabado', english: 'Saturday' }
]
const definitions = define(days)

module.exports = {
  name: 'Days', // Los Dias del la Semana
  words: days,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
