function start(quiz) {
  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', () => {
    let answer = process.stdin.read()

    if (answer !== null) {
      answer = answer.trim()

      if (answer === 'salida') {
        clearScreen()
        process.exit()
      }

      quiz.checkAnswer(answer)
      quiz.askQuestion()
    }
  })

  clearScreen()
  quiz.askQuestion()
}

function clearScreen() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

module.exports = {
  start
}
