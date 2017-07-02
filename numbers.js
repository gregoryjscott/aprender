const { numbers } = require('./words')
const define = require('./define')

const definitions = define(numbers)

module.exports = {
  name: 'Numbers',
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
