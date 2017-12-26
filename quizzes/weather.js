const define = require('../define')

const weather = [
  { spanish: 'Hace sol.', english: "It's sunny." },
  { spanish: 'Hace viento.', english: "It's windy." },
  { spanish: 'Hace calor.', english: "It's hot." },
  { spanish: 'Hace frio.', english: "It's cold." },
  { spanish: 'Hace buen tiempo.', english: "It's nice out." },
  { spanish: 'Hace mal tiempo.', english: "It's bad out." },
  { spanish: 'Esta lloviendo.', english: "It's raining." }, // or Llueve.
  { spanish: 'Esta nevando.', english: "It's snowing." }, // or Nieva.
  { spanish: 'Esta humido.', english: "It's humid." },
  { spanish: 'Esta nublado.', english: "It's cloudy." },
  { spanish: 'Hay una tormenta.', english: 'There is a storm.' },
  { spanish: 'Hay heilo.', english: 'There is ice.' },
  { spanish: 'Hay neblina.', english: 'There is fog.' },
  { spanish: 'Hay un tornado.', english: 'There is a tornado.' },
  { spanish: 'Hay un hurracan.', english: 'There is a hurricane.' },
  { spanish: 'Hay un terremoto.', english: 'There is an earthquake.' },
  { spanish: 'Hay inundaciones.', english: 'There are floods.' },
  { spanish: 'Hay un tsunami.', english: 'There is a tsunami.' },
  { spanish: 'Hay un fuego.', english: 'There is a fire.' } // incendio
]

const definitions = define(weather)

module.exports = {
  name: 'Weather',
  words: weather,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
