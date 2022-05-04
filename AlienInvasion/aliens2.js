let userAnswers = new Array(5);

const correctAnswer = ["c", "b", "b", "b", "a"];

function recordAnswers(question, answers) {
  userAnswers[question - 1] = answers;
}

function score() {
  let correctCount = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (correctAnswer[i] == userAnswers[i]) {
      correctCount++;
    }
  }

  alert("Here is your survival rate: " + correctCount + " out of 100.");
}
