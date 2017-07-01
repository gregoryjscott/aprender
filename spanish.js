const pronouns = [
  'Yo',
  'Tu',
  'El',
  'Ella',
  'Usted',
  'Nosotros',
  'Nosotras',
  'Ellos',
  'Ellas',
  'Ustedes'
]

const verbs = [
  'abrir'
]

let pronoun, verb, answer

function pick(max) {
  return Math.floor(Math.random() * max)
}

function askQuestion() {
  pronoun = pronouns[pick(pronouns.length - 1)]
  verb = verbs[0]

  console.log(`Conjugate the verb "${verb}" for the pronoun "${pronoun}".`)
}

function checkAnswer(answer) {
  let correctAnswer = determineCorrectAnswer(verb)

  if (answer === correctAnswer) {
    console.log(`Si, Si, Si! "${pronoun} ${answer}" is correct!\n`)
  } else {
    console.log(`No. It's ${pronoun} "${correctAnswer}".\n`)
  }
}

function determineCorrectAnswer() {
  let start, middle

  start = verb.substr(0, verb.length - 2)

  if (verb.endsWith('ar')) {
    middle = 'a'
  } else if (verb.endsWith('er')) {
    middle = 'e'
  } else if (verb.endsWith('ir')) {
    middle = pronoun.startsWith('Nosotr') ? 'i' : 'e'
  } else {
    bomb()
  }

  switch (pronoun) {
    case 'Yo':
      return `${start}o`
    case 'Tu':
      return `${start}${middle}s`
    case 'El':
    case 'Ella':
    case 'Usted':
      return `${start}${middle}`
    case 'Nosotros':
    case 'Nosotras':
      return `${start}${middle}mos`
    case 'Ellos':
    case 'Ellas':
    case 'Ustedes':
      return `${start}${middle}n`
    default:
      bomb()
  }
}

function bomb() {
  throw new Error(`This must be Spanish I haven't learned about yet. Sorry.`)
}

process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  const answer = process.stdin.read()
  if (answer !== null) {
    checkAnswer(answer.trim())
    askQuestion()
  }
})

askQuestion()
