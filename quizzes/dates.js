const colors = require('colors/safe')
const days = require('./days')
const define = require('../define')
const forgive = require('../forgive')
const months = require('./months')
const random = require('../random')

const dates = [
  {
    spanish: '¿Cuál es la fecha de hoy?',
    english: "What is today's date?",
    checkAnswer: answer => {
      const correctAnswer = `Hoy es ${today()}`
      if (forgive(answer) === forgive(correctAnswer)) {
          console.log(colors.green(`Sí, sí, sí! "${correctAnswer}" is correct!\n`))
          return true
      } else {
        console.log(colors.red(`No. The answer is: ${correctAnswer}.\n`))
        return false
      }
    }
  },
  {
    spanish: '¿Cuál es la fecha de mañana??',
    english: "What is tomorrow's date?",
    checkAnswer: answer => {
      const correctAnswer = `Mañana es ${tomorrow()}`
      if (forgive(answer) === forgive(correctAnswer)) {
          console.log(colors.green(`Sí, sí, sí! "${correctAnswer}" is correct!\n`))
          return true
      } else {
        console.log(colors.red(`No. The answer is: ${correctAnswer}.\n`))
        return false
      }
    }
  },
  {
    spanish: '¿Cuál es la fecha de ayer?',
    english: "What is yesterday's date?",
    checkAnswer: answer => {
      const correctAnswer = `Ayer fue ${yesterday()}`
      if (forgive(answer) === forgive(correctAnswer)) {
          console.log(colors.green(`Sí, sí, sí! "${correctAnswer}" is correct!\n`))
          return true
      } else {
        console.log(colors.red(`No. The answer is: ${correctAnswer}.\n`))
        return false
      }
    }
  },
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
const definitions = define(dates)
let currentQuiz, questionToAnswer

module.exports = {
  name: 'Dates',
  words: dates,
  askQuestion: () => {
    currentQuiz = random(quizzes)

    if (currentQuiz === 'definitions') {
      definitions.askQuestion()
    } else {
      questionToAnswer = random(dates)
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

function yesterday() {
  let date = new Date();
  date.setDate(date.getDate() - 1)
  return spanishDate(date)
}

function today() {
  const date = new Date()
  return spanishDate(date)
}

function tomorrow() {
  let date = new Date();
  date.setDate(date.getDate() + 1)
  return spanishDate(date)
}

function spanishDate(date) {
  const dayOfWeek = days.words[date.getDay()].spanish
  const dayOfMonth = date.getDate()
  const month = months.words[date.getMonth()].spanish
  const year = date.getFullYear()
  return `${dayOfWeek}, ${dayOfMonth} de ${month} del ${year}`
}
