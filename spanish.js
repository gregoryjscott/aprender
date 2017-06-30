const pronouns = [
  'Yo'
]

const verbs = [
  'abrir'
]

let pronoun, verb, answer

function askQuestion() {
  pronoun = pronouns[0]
  verb = verbs[0]

  console.log(`Conjugate the verb "${verb}" for the pronoun "${pronoun}".`)
}

function checkAnswer(answer) {
  let correctAnswer = 'abro'

  if (answer === correctAnswer) {
    console.log(`"${pronoun} ${answer}" is correct!\n`)
  } else {
    console.log(`"${answer}" is wrong. The correct conjugation is "${pronoun} ${correctAnswer}".\n`)
  }
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
