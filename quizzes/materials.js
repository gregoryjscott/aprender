const define = require('../define')

const materials = [
  { spanish: 'el algodón', english: 'cotton' },
  { spanish: 'el hierro', english: 'iron' },
  { spanish: 'la lana', english: 'wool' },
  { spanish: 'la madera', english: 'wood' },
  { spanish: 'el nilón', english: 'nylon' },
  { spanish: 'la seda', english: 'silk' }
]
const definitions = define(materials)

module.exports = {
  name: 'Materials',
  words: materials,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
