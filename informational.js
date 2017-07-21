const colors = require('colors/safe')
const define = require('./define')
const random = require('./random')

const informational = [
  {
    spanish: 'Como se llama?',
    english: 'What is your name?',
    checkAnswer: answer => answerStartsWith(answer, 'Yo me llamo')
  },
  {
    spanish: 'Como esta?',
    english: 'How are you?',
    checkAnswer: answer => {
      const correctAnswers = ['bien', 'mal']
      if (correctAnswers.includes(answer.toLowerCase())) {
        console.log(colors.green(`Si, si, si! "${answer}" is correct!\n`))
        return true
      } else {
        console.log(colors.red(`No. The answer should be one of the following: ${correctAnswers.join(', ')}.\n`))
        return false
      }
    }
  },
  {
    spanish: 'Donde vive?',
    english: 'Where do you live?',
    checkAnswer: answer => answerStartsWith(answer, 'Yo vivo en')
  },
  {
    spanish: 'De donde es?',
    english: 'Where are you from?',
    checkAnswer: answer => answerStartsWith(answer, 'Yo soy de')
  },
  {
    spanish: 'Cual es su numero de telefono?',
    english: 'What is your telephone number?',
    checkAnswer: answer => answerStartsWith(answer, 'Mi numero es')
  },
  {
    spanish: 'Cual es su direcion?',
    english: 'What is your address?',
    checkAnswer: answer => answerStartsWith(answer, 'Me direccion es')
  }
]

function answerStartsWith(answer, beginning) {
  if (answer.toLowerCase().startsWith(beginning.toLowerCase())) {
    console.log(colors.green(`Si, si, si! "${answer}" is correct!\n`))
    return true
  } else {
    console.log(colors.red(`No. The answer should start with "${beginning}".\n`))
    return false
  }
}

const quizzes = [ 'definitions', 'answerQuestionsInSpanish']
const definitions = define(informational)
let currentQuiz, questionToAnswer

module.exports = {
  name: 'Informational',
  askQuestion: () => {
    currentQuiz = random(quizzes)

    if (currentQuiz === 'definitions') {
      definitions.askQuestion()
    } else {
      questionToAnswer = random(informational)
      console.log(`Answer this question in Spanish: "${questionToAnswer.spanish}".`)
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
