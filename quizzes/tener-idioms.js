const define = require('../define')

const idioms = [
  { spanish: 'tener calor', english: 'to be hot' },
  { spanish: 'tener celos', english: 'to be jealous' },
  { spanish: 'tener cuidado', english: 'to be careful' },
  { spanish: 'tener dolor de cabeza', english: 'to have a headache' },
  { spanish: 'tener éxito', english: 'to be successful' },
  { spanish: 'tener frío', english: 'to be cold' },
  { spanish: 'tener ganas', english: 'to feel like' },
  { spanish: 'tener hambre', english: 'to be hungry' },
  { spanish: 'tener la culpa de', english: 'to be guilty of' },
  { spanish: 'tener meido de', english: 'to be scared of' },
  { spanish: 'tener prisa', english: 'to be in a hurry' },
  { spanish: 'tener razón', english: 'to be right' },
  { spanish: 'tener sed', english: 'to be thirsty' },
  { spanish: 'tener sueño', english: 'to be tired' },
  { spanish: 'tener suerte', english: 'to be lucky' },
  { spanish: 'tener vergüenza de', english: 'to be embarrassed of' },
]
const definitions = define(idioms)

module.exports = {
  name: 'Tener Idioms',
  words: idioms,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
