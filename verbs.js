const define = require('./define')

const verbs = [
  { spanish: 'repitir', english: 'to repeat' },
  { spanish: 'eschuchar', english: 'to listen' },
  { spanish: 'mirar', english: 'to watch' },
  { spanish: 'abrir', english: 'to open' },
  { spanish: 'cantar', english: 'to sing' },
  { spanish: 'estudiar', english: 'to study' },
  { spanish: 'preparar', english: 'to prepare' },
  { spanish: 'escribir', english: 'to write' },
  { spanish: 'entrar', english: 'to enter' },
  { spanish: 'hablar', english: 'to speak' },
  { spanish: 'vender', english: 'to sell' },
  { spanish: 'necesitar', english: 'to need' },
  { spanish: 'tomar', english: 'to take' },
  { spanish: 'practicar', english: 'to practice' },
  { spanish: 'bailar', english: 'to dance' },
  { spanish: 'viajar', english: 'to travel' },
  { spanish: 'comprar', english: 'to buy' },
  { spanish: 'comprender', english: 'to understand' },
  { spanish: 'llamar', english: 'to called' },
  { spanish: 'vivir', english: 'to live' },
  { spanish: 'trabajar', english: 'to work' },
  { spanish: 'bajar', english: 'to lower' },
  { spanish: 'tocar', english: 'to touch' },
  { spanish: 'pasar', english: 'to pass' },
  { spanish: 'leer', english: 'to read' },
  { spanish: 'correr', english: 'to run' },
  { spanish: 'indicar', english: 'to indicate' },
  { spanish: 'visitar', english: 'to visit' },
  { spanish: 'caminar', english: 'to walk' },
  { spanish: 'amar', english: 'to love' }
]

const definitions = define(verbs)

module.exports = {
  name: 'Verbs',
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
