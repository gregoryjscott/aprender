const define = require('./define')

const food = [
  { spanish: 'cafe', english: 'coffee' },
  { spanish: 'mantequilla', english: 'butter' },
  { spanish: 'pan', english: 'bread' },
  { spanish: 'huevos', english: 'eggs' },
  { spanish: 'dulces', english: 'candy' },
  { spanish: 'frutas', english: 'fruits' },
  { spanish: 'manzanas', english: 'apples' },
  { spanish: 'naranjas', english: 'oranges' },
  { spanish: 'jugo de naranja', english: 'orange juice' },
  { spanish: 'queso', english: 'cheese' },
  { spanish: 'leche', english: 'milk' },
  { spanish: 'helado de chocolate', english: 'chocolate ice cream' },
  { spanish: 'helado de vanilla', english: 'vanilla ice cream' },
  { spanish: 'pollo', english: 'chicken' },
  { spanish: 'carne', english: 'meat' },
  { spanish: 'pescada', english: 'fish' },
  { spanish: 'verduras', english: 'vegetables' },
  { spanish: 'sopa', english: 'soup' },
  { spanish: 'ensalada', english: 'salad' },
  { spanish: 'arroz', english: 'rice' },
  { spanish: 'postre', english: 'dessert' }
]

const definitions = define(food)

module.exports = {
  name: 'Food',
  words: food,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
