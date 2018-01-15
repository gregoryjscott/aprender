const define = require('../define')

const meals = [
  { spanish: 'desayuno', english: 'breakfast' },
  { spanish: 'almuerzo', english: 'lunch' },
  { spanish: 'cena', english: 'dinner' } // or supper
]
const definitions = define(meals)

module.exports = {
  name: 'Meals',
  words: meals,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
