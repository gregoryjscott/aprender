const define = require('../define')

const weather = [
  { spanish: 'Hace sol.', english: "It's sunny." },
  { spanish: 'Hace calor.', english: "It's hot." },
  { spanish: 'Hace frio.', english: "It's cold." },
  { spanish: 'Hace viento.', english: "It's windy." },
  { spanish: 'Esta lloviendo.', english: "It's raining." },
  { spanish: 'Esta nevando.', english: "It's snowing." },
  { spanish: 'Esta humido.', english: "It's humid." },
  { spanish: 'Esta nublado.', english: "It's cloudy." }
]

const definitions = define(weather)

module.exports = {
  name: 'Weather',
  words: weather,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
