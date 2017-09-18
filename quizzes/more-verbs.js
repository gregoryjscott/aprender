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
  { spanish: 'comer', english: 'to eat' },
  { spanish: 'ayudar', english: 'to help' },
  { spanish: 'agarrar', english: 'to grab' },
  { spanish: 'deber', english: 'to owe' },
  { spanish: 'llevar', english: 'to take' }, // to airport
  { spanish: 'dejar', english: 'to leave' }, // behind
  { spanish: 'ganar', english: 'to earn' }, // or win game
  { spanish: 'gritar', english: 'to yell' },
  { spanish: 'luchar', english: 'to fight' },
  { spanish: 'creer', english: 'to believe' }
]

const definitions = define(verbs)

module.exports = {
  name: 'More Verbs',
  words: verbs,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
