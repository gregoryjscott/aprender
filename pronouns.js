const { pronouns } = require('./words')
const define = require('./define')

const definitions = define(pronouns)

module.exports = {
  name: 'Pronouns',
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
