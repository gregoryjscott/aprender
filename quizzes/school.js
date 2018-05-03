const define = require('../define')

const school = [
  { spanish: 'el libro', english: 'book' },
  { spanish: 'el lápiz', english: 'pencil' },
  { spanish: 'la pluma', english: 'pen' },
  { spanish: 'el papel', english: 'paper' },
  { spanish: 'la mesa', english: 'table' },
  { spanish: 'la tijera', english: 'scissors' },
  { spanish: 'el marcador', english: 'marker' },
  { spanish: 'la mochila', english: 'backpack' },
  { spanish: 'la pizarra', english: 'blackboard' },
  { spanish: 'el cuaderno', english: 'notebook' },
  { spanish: 'el borrador', english: 'eraser' }
]
const definitions = define(school)

module.exports = {
  name: 'School',
  words: school,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
