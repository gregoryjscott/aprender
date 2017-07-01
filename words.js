const pronouns = [
  { spanish: 'Yo', english: 'I' },
  { spanish: 'Tu', english: 'You (informal)' },
  { spanish: 'El', english: 'He' },
  { spanish: 'Ella', english: 'She' },
  { spanish: 'Usted', english: 'You (formal)' },
  { spanish: 'Nosotros', english: 'We (male)' },
  { spanish: 'Nosotras', english: 'We (female)' },
  { spanish: 'Ellos', english: 'They (male)' },
  { spanish: 'Ellas', english: 'They (female)' },
  { spanish: 'Ustedes', english: "Y'all" }
]

const verbs = [
  { spanish: 'repitir', english: 'to repeat' },
  { spanish: 'eschuchar', english: 'to listen' },
  { spanish: 'mirar', english: 'to watch' },
  { spanish: 'abrir', english: 'to open' },
  { spanish: 'cantar', english: 'to sing' },
  { spanish: 'estudiar', english: 'to study' },
  { spanish: 'preparar', english: 'to prepare' },
  { spanish: 'escribir', english: 'to write' },
  { spanish: 'entrar', english: 'to enter' },
  { spanish: 'hablar', english: 'to speak' },
  { spanish: 'vender', english: 'to sell' },
  { spanish: 'necesitar', english: 'to need' },
  { spanish: 'tomar', english: 'to take' },
  { spanish: 'practicar', english: 'to practice' },
  { spanish: 'bailar', english: 'to dance' },
  { spanish: 'viajar', english: 'to travel' },
  { spanish: 'comprar', english: 'to buy' },
  { spanish: 'comprender', english: 'to understand' },
  { spanish: 'llamar', english: 'to called' },
  { spanish: 'vivir', english: 'to live' },
  { spanish: 'trabajar', english: 'to work' },
  { spanish: 'bajar', english: 'to lower' },
  { spanish: 'tocar', english: 'to touch' },
  { spanish: 'pasar', english: 'to pass' },
  { spanish: 'leer', english: 'to read' },
  { spanish: 'correr', english: 'to run' },
  { spanish: 'indicar', english: 'to indicate' },
  { spanish: 'visitar', english: 'to visit' },
  { spanish: 'caminar', english: 'to walk' },
  { spanish: 'amar', english: 'to love' }
]

const numbers = [
  { spanish: 'cero', english: '0' },
  { spanish: 'uno', english: '1' },
  { spanish: 'dos', english: '2' },
  { spanish: 'tres', english: '3' },
  { spanish: 'cuatro', english: '4' },
  { spanish: 'cinco', english: '5' },
  { spanish: 'seis', english: '6' },
  { spanish: 'siete', english: '7' },
  { spanish: 'ocho', english: '8' },
  { spanish: 'nueve', english: '9' },
  { spanish: 'diez', english: '10' },
  { spanish: 'once', english: '11' },
  { spanish: 'doce', english: '12' },
  { spanish: 'trece', english: '13' },
  { spanish: 'catorce', english: '14' },
  { spanish: 'quince', english: '15' },
  { spanish: 'dieciseis', english: '16' },
  { spanish: 'diecisiete', english: '17' },
  { spanish: 'dieciocho', english: '18' },
  { spanish: 'diecinueve', english: '19' }
]

const oneThroughNine = numbers.slice(1, 10)

numbers.push({ spanish: 'veinte', english: '20' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `vienti${x.spanish}`, english: `2${x.english}` })
)

numbers.push({ spanish: 'treinta', english: '30' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `treinta y ${x.spanish}`, english: `3${x.english}` })
)

module.exports = {
  pronouns,
  verbs,
  numbers
}
