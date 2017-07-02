const { verbs } = require('./words')
const define = require('./define')

const definitions = define(verbs)

module.exports = {
  name: 'Verbs',
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
