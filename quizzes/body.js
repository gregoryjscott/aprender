const define = require('../define')

const body = [
  { spanish: 'la boca', english: 'mouth' },
  { spanish: 'el brazo', english: 'arm' },
  { spanish: 'la cabeza', english: 'head' },
  { spanish: 'la cara', english: 'face' },
  { spanish: 'el cuerpo', english: 'body' },
  { spanish: 'el dedo', english: 'finger' },
  { spanish: 'el diente', english: 'tooth' }, // la muela
  { spanish: 'el estómago', english: 'stomach' },
  { spanish: 'los labios', english: 'lips' },
  { spanish: 'la lengua', english: 'tongue' },
  { spanish: 'la mano', english: 'hand' },
  { spanish: 'la nariz', english: 'nose' },
  { spanish: 'el ojo', english: 'eye' },
  { spanish: 'la oreja', english: 'outer ear' },
  { spanish: 'el oído', english: 'inner ear' },
  { spanish: 'el pelo', english: 'hair' },
  { spanish: 'el pie', english: 'foot' },
  { spanish: 'la pierna', english: 'leg' }
]
const definitions = define(body)

module.exports = {
  name: 'Body',
  words: body,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
