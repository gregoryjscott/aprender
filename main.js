const colors = require('colors/safe')
const everything = require('./everything')

let quizzes = [
  require('./greetings'),
  require('./informational'),
  require('./verbs'),
  require('./pronouns'),
  require('./conjugations'),
  require('./numbers'),
  require('./holidays'),
  require('./colors'),
  require('./days'),
  require('./months'),
  require('./foods'),
  require('./directions'),
  require('./city')
]
quizzes.push(everything(quizzes))

let pickedQuiz
let correctCount = 0
let totalCount = 0

function start() {
  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', readAnswer)

  clearScreen()
  console.log('Hola!')
  for (var i = 0; i < quizzes.length; i++) {
    const number = i + 1
    const name = quizzes[i].name
    console.log(`  ${colors.grey(`Type ${number} to learn ${name}.`)}`)
  }
  explainExit()
  console.log()
}

function readAnswer() {
  let answer = process.stdin.read()

  if (answer !== null) {
    answer = answer.trim()

    if (answer === 'salida') stop()

    if (!pickedQuiz) {
      pickedQuiz = determineQuiz(answer)

      console.log(colors.green(`\nLet's learn ${pickedQuiz.name}!\n`))

      pickedQuiz.askQuestion()
      explainExit()
    } else {
      const correct = pickedQuiz.checkAnswer(answer)

      if (correct) correctCount++
      totalCount++

      pickedQuiz.askQuestion()
      explainExit()
    }
  }
}

function determineQuiz(answer) {
  const number = parseInt(answer)
  if (isNaN(number)) stop()

  const quiz = quizzes[number - 1]
  if (!quiz) stop()

  return quiz
}

function clearScreen() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function explainExit() {
  console.log(colors.grey(`  (Type "salida" to exit.)`))
}

function stop() {
  clearScreen()

  const percentage = Math.round(correctCount/totalCount * 100, 2)
  console.log()
  console.log(`Your score is ${correctCount} / ${totalCount} = ${percentage}%.`)
  console.log()
  process.exit()
}

start()
