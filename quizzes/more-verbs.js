const define = require('../define')

const verbs = [
  { spanish: 'llegar', english: 'to arrive' },
  { spanish: 'aprender', english: 'to learn' },
  { spanish: 'levantar', english: 'to lift' },
  { spanish: 'preguntar', english: 'to ask' },
  { spanish: 'contestar', english: 'to answer' },
  { spanish: 'buscar', english: 'to look' },
  { spanish: 'quedar', english: 'to stay' },
  { spanish: 'desear', english: 'to desire' },
  { spanish: 'regresar', english: 'to return' },
  { spanish: 'invitar', english: 'to invite' },
]

const definitions = define(verbs)

module.exports = {
  name: 'More Verbs',
  words: verbs,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
