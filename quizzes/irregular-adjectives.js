const define = require('../define')

const adjectives = [
  { spanish: 'abierto', english: 'opened' },
  { spanish: 'bendito', english: 'blessed' },
  { spanish: 'cubierto', english: 'covered' },
  { spanish: 'dicho', english: 'mentioned' }, // said
  { spanish: 'descubierto', english: 'discovered' },
  { spanish: 'despierto', english: 'awake' },
  { spanish: 'devuelto', english: 'returned' },
  { spanish: 'escrito', english: 'written' },
  { spanish: 'frito', english: 'fried' },
  { spanish: 'hecho', english: 'done' },
  { spanish: 'maldito', english: 'cursed' },
  { spanish: 'muerto', english: 'dead' },
  { spanish: 'puesto', english: 'put' }, // placed, laid, put on (clothes)
  { spanish: 'roto', english: 'broken' },
  { spanish: 'satisfecho', english: 'satisfied' },
  { spanish: 'suelto', english: 'released' },
  { spanish: 'visto', english: 'seen' }, // clear, obvious
]

const definitions = define(adjectives)

module.exports = {
  name: 'Irregular Adjectives',
  words: adjectives,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
