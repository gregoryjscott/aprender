const colors = require('colors/safe')
const define = require('../define')
const random = require('../random')

const informational = [
  {
    spanish: '¿Cómo se llama?',
    english: 'What is your name?',
    checkAnswer: answer => answerStartsWith(answer, 'Yo me llamo')
  },
  {
    spanish: '¿Cómo está?',
    english: 'How are you?',
    checkAnswer: answer => {
      const correctAnswers = ['bien', 'mal']
      if (correctAnswers.includes(answer.toLowerCase())) {
        console.log(colors.green(`Sí, sí, sí! "${answer}" is correct!\n`))
        return true
      } else {
        const answersString = correctAnswers.join(', ')
        console.log(
          colors.red(
            `No. The answer should be one of the following: ${answersString}.\n`
          )
        )
        return false
      }
    }
  },
  {
    spanish: '¿Dónde vive?',
    english: 'Where do you live?',
    checkAnswer: answer => answerStartsWith(answer, 'Yo vivo en')
  },
  {
    spanish: '¿De dónde es?',
    english: 'Where are you from?',
    checkAnswer: answer => answerStartsWith(answer, 'Yo soy de')
  },
  {
    spanish: '¿Cuál es su número de teléfono?',
    english: 'What is your telephone number?',
    checkAnswer: answer => answerStartsWith(answer, 'Mi número es')
  },
  {
    spanish: '¿Cuál es su dirección?',
    english: 'What is your address?',
    checkAnswer: answer => answerStartsWith(answer, 'Mi dirección es')
  }
]

function answerStartsWith(answer, beginning) {
  if (answer.toLowerCase().startsWith(beginning.toLowerCase())) {
    console.log(colors.green(`Sí, sí, sí! "${answer}" is correct!\n`))
    return true
  } else {
    console.log(
      colors.red(`No. The answer should start with "${beginning}".\n`)
    )
    return false
  }
}
const quizzes = ['definitions', 'answerQuestionsInSpanish']
const definitions = define(informational)
let currentQuiz, questionToAnswer

module.exports = {
  name: 'Informational',
  words: informational,
  askQuestion: () => {
    currentQuiz = random(quizzes)

    if (currentQuiz === 'definitions') {
      definitions.askQuestion()
    } else {
      questionToAnswer = random(informational)
      console.log(
        `Answer this question in Spanish: "${questionToAnswer.spanish}".`
      )
    }
  },
  checkAnswer: answer => {
    if (currentQuiz === 'definitions') {
      return definitions.checkAnswer(answer)
    } else {
      return questionToAnswer.checkAnswer(answer)
    }
  }
}
