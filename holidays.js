const define = require('./define')

const holidays = [
  { spanish: 'El dia de Independencia de America', english: '4th of July' },
  { spanish: 'El dia de San Valentin', english: `Valentine's Day` },
  { spanish: 'Navida', english: 'Christmas' },
  { spanish: 'El ano neuvo', english: 'New Years Day' },
  { spanish: 'El dia de San Patricio', english: `St. Patrick's Day` },
  { spanish: 'El dia de madres', english: `Mother's Day` },
  { spanish: 'El dia de padres', english: `Father's Day` },
  { spanish: 'El dia de accion de gracias', english: 'Thanksgiving Day' }
]

const definitions = define(holidays)

module.exports = {
  name: 'Holidays',
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
