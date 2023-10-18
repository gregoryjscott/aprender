const define = require('../define')

const bikes = [
  { spanish: 'el marco', english: 'frame' },
  { spanish: 'la cadena', english: 'chain' },
  { spanish: 'el candado', english: 'padlock' },
  { spanish: 'el casco', english: 'helmet' },
  { spanish: 'el caño', english: 'stem' },
  { spanish: 'las cintas', english: 'grips' },
  { spanish: 'la coraza', english: 'tire' },
  { spanish: 'el freno', english: 'brake' },
  { spanish: 'las luces', english: 'lights' },
  { spanish: 'el manubrio', english: 'handlebars' },
  { spanish: 'la manzana', english: 'hub' },
  { spanish: 'el neumático', english: 'tube' },
  { spanish: 'el pedal', english: 'pedal' },
  { spanish: 'el piñón', english: 'gear' },
  { spanish: 'el poste', english: 'seatpost' },
  { spanish: 'la coronilla', english: 'gear ring' },
  { spanish: 'el rin', english: 'rim' },
  { spanish: 'el sillín', english: 'saddle' },
  { spanish: 'el tenedor', english: 'fork' }
]
const definitions = define(bikes)

module.exports = {
  name: 'Bikes',
  words: bikes,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
