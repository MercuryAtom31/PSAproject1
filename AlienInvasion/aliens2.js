/**
 * Form script.
 */
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

/**
 * Text appear and disappear script.
 */

 function display(idName) {
  let team = document.getElementById(idName);
  team.style.display = "block";
}

function hide(idName) {
  let team = document.getElementById(idName);
  team.style.display = "none";
}

//Adding the event listeners of each function.
let el1 = document.getElementById("padres");
el1.addEventListener("mouseover", function () {
  display("padresID");
});
el1.addEventListener("mouseout", function () {
  hide("padresID");
});

let el2 = document.getElementById("yankees");
el2.addEventListener("mouseover", function () {
  display("yankeesID");
});
el2.addEventListener("mouseout", function () {
  hide("yankeesID");
});

let el3 = document.getElementById("redsox");
el3.addEventListener("mouseover", function () {
  display("redsoxID");
});
el3.addEventListener("mouseout", function () {
  hide("redsoxID");
});