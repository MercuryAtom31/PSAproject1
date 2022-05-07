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
let el1 = document.getElementById("firstAddress");
el1.addEventListener("mouseover", function () {
  display("firstAddressID");
});
el1.addEventListener("mouseout", function () {
  hide("firstAddressID");
});

let el2 = document.getElementById("secondAddress");
el2.addEventListener("mouseover", function () {
  display("secondAddressID");
});
el2.addEventListener("mouseout", function () {
  hide("secondAddressID");
});

let el3 = document.getElementById("thirdAddress");
el3.addEventListener("mouseover", function () {
  display("thirdAddressID");
});
el3.addEventListener("mouseout", function () {
  hide("thirdAddressID");
});

/**
 * Changing text color.
 */

const div = document.getElementById("changecolor");

div.style.color = "red";

/**
 * Video script.
 */

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
