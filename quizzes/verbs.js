const define = require('../define')

const verbs = [
  // First 30
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
  { spanish: 'amar', english: 'to love' },

  // Second 30
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
  { spanish: 'creer', english: 'to believe' },
  { spanish: 'cortar', english: 'to cut' },
  { spanish: 'recibir', english: 'to receive' },
  { spanish: 'usar', english: 'to use' },
  { spanish: 'beber', english: 'to drink' },
  { spanish: 'esperar', english: 'to wait' },
  { spanish: 'terminar', english: 'to end' },
  { spanish: 'cambiar', english: 'to change' },
  { spanish: 'decidir', english: 'to decide' },
  { spanish: 'olvidar', english: 'to forget' },
  { spanish: 'ensenar', english: 'to teacher' }
]

const definitions = define(verbs)

module.exports = {
  name: 'Verbs',
  words: verbs,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
