const random = require('./random')

let allQuizzes, currentQuiz

function askQuestion() {
  currentQuiz = random(allQuizzes)
  currentQuiz.askQuestion()
}

function checkAnswer(answer) {
  currentQuiz.checkAnswer(answer)
}

module.exports = function (quizzes) {
  allQuizzes = quizzes

  return {
    name: 'Everything',
    askQuestion,
    checkAnswer
  }
}
