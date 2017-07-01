function clearScreen() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function start(askQuestion, checkAnswer) {
  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', () => {
    let answer = process.stdin.read()

    if (answer !== null) {
      answer = answer.trim()

      if (answer === 'salida') {
        clearScreen()
        process.exit()
      }

      checkAnswer(answer)
      askQuestion()
    }
  })

  clearScreen()
  askQuestion()
}

module.exports = {
  start
}
