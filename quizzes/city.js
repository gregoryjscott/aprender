const define = require('../define')

const city = [
  { spanish: 'el autobus', english: 'bus' },
  { spanish: 'el automovil (carro)', english: 'car' },
  { spanish: 'el avion', english: 'airplane' },
  { spanish: 'el banco', english: 'bank' },
  { spanish: 'la biblioteca', english: 'library' },
  { spanish: 'la calle', english: 'street' },
  { spanish: 'la casa', english: 'house' },
  { spanish: 'el cine', english: 'movie theater' },
  { spanish: 'la oficina del correo', english: 'post office' },
  { spanish: 'el cruce', english: 'crossing' },
  { spanish: 'la cuadra', english: 'block' },
  { spanish: 'el edificio', english: 'building' },
  { spanish: 'la escuela', english: 'school' },
  { spanish: 'la esquina', english: 'corner' },
  { spanish: 'la estacion de policia', english: 'police station' },
  { spanish: 'la gasolinera', english: 'gas station' },
  { spanish: 'el hombre', english: 'man' },
  { spanish: 'la mujer', english: 'woman' },
  { spanish: 'el mercado', english: 'market' },
  { spanish: 'la milla', english: 'mile' },
  { spanish: 'la muchacha', english: 'girl' },
  { spanish: 'el muchacho', english: 'boy' },
  { spanish: 'la iglesia', english: 'church' },
  { spanish: 'el museo', english: 'museum' },
  { spanish: 'la oficina', english: 'office' },
  { spanish: 'el parque', english: 'park' },
  { spanish: 'el periodico', english: 'newspaper' },
  { spanish: 'el perro', english: 'dog' },
  { spanish: 'el policia', english: 'policeman' },
  { spanish: 'la policia', english: 'policewoman' },
  { spanish: 'el restaurante', english: 'restaurant' },
  { spanish: 'la revista', english: 'magazine' },
  { spanish: 'el supermercado', english: 'supermarket' },
  { spanish: 'la tienda', english: 'store' },
  { spanish: 'el teatro', english: 'theatre' }
]
const definitions = define(city)

module.exports = {
  name: 'City', // La Ciudad
  words: city,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
