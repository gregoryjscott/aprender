const define = require('../define')

const house = [
  { spanish: 'el ascensor', english: 'elevator' },
  { spanish: 'la casa particular', english: 'private house' },
  { spanish: 'la casa de pisos', english: 'apartment house' },
  { spanish: 'la cocina', english: 'kitchen' },
  { spanish: 'el comedor', english: 'dining room' },
  { spanish: 'el cuarto', english: 'room' },
  { spanish: 'el cuarto de baño', english: 'bathroom' },
  { spanish: 'el dormitorio', english: 'bedroom' },
  { spanish: 'la habitación', english: 'room' },
  { spanish: 'la llave', english: 'key' },
  { spanish: 'el patio', english: 'yard' },
  { spanish: 'el piso', english: 'floor' }, // apartment
  { spanish: 'la sala', english: 'living room' },
  { spanish: 'el sótano', english: 'cellar' },
  { spanish: 'el suelo', english: 'ground' },
  { spanish: 'el techo', english: 'roof' }, // ceiling
  { spanish: 'la alfombra', english: 'carpet' },
  { spanish: 'el armario', english: 'closet' },
  { spanish: 'la cama', english: 'bed' },
  { spanish: 'la cómoda', english: 'bureau' },
  { spanish: 'la cortina', english: 'curtain' }, // shade
  { spanish: 'el escritorio', english: 'desk' },
  { spanish: 'la lámpara', english: 'lamp' },
  { spanish: 'la mesa', english: 'table' },
  { spanish: 'los muebles', english: 'furniture' },
  { spanish: 'la silla', english: 'chair' },
  { spanish: 'el sillón', english: 'armchair' },
  { spanish: 'el sofá', english: 'sofa' },
  { spanish: 'el teléfono', english: 'telephone' }
]
const definitions = define(house)

module.exports = {
  name: 'House',
  words: house,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
