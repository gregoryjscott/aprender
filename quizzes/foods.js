const define = require('../define')

const food = [
  { spanish: 'el cafe', english: 'coffee' },
  { spanish: 'la mantequilla', english: 'butter' },
  { spanish: 'el pan', english: 'bread' },
  { spanish: 'el huevo', english: 'egg' },
  { spanish: 'los dulces', english: 'candy' },
  { spanish: 'las frutas', english: 'fruits' },
  { spanish: 'la manzana', english: 'apple' },
  { spanish: 'la naranja', english: 'orange' },
  { spanish: 'el jugo de naranja', english: 'orange juice' },
  { spanish: 'el queso', english: 'cheese' },
  { spanish: 'la leche', english: 'milk' },
  { spanish: 'el helado de chocolate', english: 'chocolate ice cream' },
  { spanish: 'el helado de vanilla', english: 'vanilla ice cream' },
  { spanish: 'el pollo', english: 'chicken' },
  { spanish: 'la carne', english: 'meat' },
  { spanish: 'el pescada', english: 'fish' },
  { spanish: 'las verduras', english: 'vegetables' },
  { spanish: 'la sopa', english: 'soup' },
  { spanish: 'la ensalada', english: 'salad' },
  { spanish: 'el arroz', english: 'rice' },
  { spanish: 'el postre', english: 'dessert' }
]
const definitions = define(food)

module.exports = {
  name: 'Food',
  words: food,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
