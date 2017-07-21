const define = require('./define')

const months = [
  { spanish: 'enero', english: 'January' },
  { spanish: 'febrero', english: 'February' },
  { spanish: 'marzo', english: 'March' },
  { spanish: 'abril', english: 'April' },
  { spanish: 'mayo', english: 'May' },
  { spanish: 'junio', english: 'June' },
  { spanish: 'julio', english: 'July' },
  { spanish: 'agosto', english: 'August' },
  { spanish: 'septiembre', english: 'September' },
  { spanish: 'octubre', english: 'October' },
  { spanish: 'noviembre', english: 'November' },
  { spanish: 'diciembre', english: 'December' }
]

const definitions = define(months)

module.exports = {
  name: 'Months', // Meses del Ano
  words: months,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
