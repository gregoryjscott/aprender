const define = require('../define')

const clothing = [
  { spanish: 'el abrigo', english: 'coat' },
  { spanish: 'la blusa', english: 'blouse' },
  { spanish: 'el bolsillo', english: 'pocket' },
  { spanish: 'los calcentines', english: 'socks' },
  { spanish: 'la camisa', english: 'shirt' },
  { spanish: 'la cartera', english: 'purse' }, // or wallet
  { spanish: 'la corbata', english: 'tie' },
  { spanish: 'la chaqueta', english: 'jacket' },
  { spanish: 'la falda', english: 'skirt' },
  { spanish: 'la gorra', english: 'cap' },
  { spanish: 'los guantes', english: 'gloves' },
  { spanish: 'las medias', english: 'stockings' },
  { spanish: 'los pantalones', english: 'trousers' },
  { spanish: 'el panuelo', english: 'handkerchief' },
  { spanish: 'la ropa', english: 'clothing' },
  { spanish: 'la ropa interior', english: 'underwear' },
  { spanish: 'el sombrero', english: 'hat' },
  { spanish: 'el traje', english: 'suit' },
  { spanish: 'el traje de bano', english: 'bathing suit' },
  { spanish: 'el vestido', english: 'dress' },
  { spanish: 'los zapatos', english: 'shoes' },
  { spanish: 'las gafas', english: 'glasses' },
  { spanish: 'las gafas del sol', english: 'sunglasses' },
  { spanish: 'el sueter', english: 'sweater' }
]

const definitions = define(clothing)

module.exports = {
  name: 'Clothing',
  words: clothing,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
