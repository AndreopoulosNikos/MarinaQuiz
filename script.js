"use strict";
// Map for questions
const questions = new Map();

const audio = new Audio();
// questions
questions.set("question1", {
  q: "How many hours a day does Marina work per average?",
  a1: "8 Hours",
  a2: "4 Hours",
  a3: "6 Hours",
  a4: "Lol! What is work?",
  correct: "4 Hours",
});

questions.set("question2", {
  q: "Who sleeps the earliest?",
  a1: "Marina",
  a2: "A one month old infant",
  a3: "My grandma",
  a4: "A baby duck",
  correct: "Marina",
});

questions.set("question3", {
  q: "Which best describes  Marina's house in Trikala?",
  a1: "Clean",
  a2: "Cute",
  a3: "Girly",
  a4: "Dirty as fuck...",
  correct: "Dirty as fuck...",
});

questions.set("question4", {
  q: "Who is Marina 's true love",
  a1: "Iakovos",
  a2: "A hippopotamus",
  a3: "Elisavet",
  a4: "Our Lord and Savior Jesus",
  correct: "Elisavet",
});
//question counter
let questionNumber = 0;

const answerButtons = document.querySelectorAll(".answer_button");

//adding event listener
for (const button of answerButtons) {
  button.addEventListener("click", checkAnswer);
}

answerButtons.forEach((button) => {
  button.addEventListener("touchend", function () {
    button.style.backgroundColor = "#f87ec5";
    button.querySelector("p").style.color = "white";
  });
});

answerButtons.forEach((button) => {
  button.addEventListener("touchstart", function () {
    button.style.backgroundColor = "#d7fad4";
    button.querySelector("p").style.color = "#785f6d";
  });
});

function checkAnswer(clickedButton) {
  const selectedAnswer =
    clickedButton.currentTarget.querySelector("p").textContent;
  if (selectedAnswer === questions.get("question" + questionNumber).correct) {
    clickedButton.currentTarget.style.backgroundColor = "#d7fad4";
    clickedButton.currentTarget.querySelector("p").style.color = "#785f6d";
    questions.get("question" + questionNumber).correct = "Checked";
    document.querySelector("#pic h2").style.display = "none";
    document.querySelector("#pic p").style.display = "none";
    document.querySelector("#pic img").style.display = "block";
    if (questionNumber == questions.size) {
      winGame();
    } else {
      document.querySelector("#answers h2").textContent = "Correct Answer!!!";
      audio.play();
      setTimeout(setQuestion, 7000);
    }
  } else if (
    document.querySelector("#answers h2").textContent === "Choose an answer!!!"
  ) {
    document.querySelector("#answers h2").textContent = "Wrong Answer...";
  } else if (
    document.querySelector("#answers h2").textContent == "Correct Answer!!!"
  ) {
    document.querySelector("#answers h2").textContent =
      "Stop Clicking Asshole!";
  }
}

//function to set questions and reset
function setQuestion() {
  questionNumber++;
  answerButtons.forEach((button) => {
    button.style.backgroundColor = "#f87ec5";
    button.querySelector("p").style.color = "white";
  });
  audio.src = "Sounds/Audio" + questionNumber + ".mp3";
  document.querySelector("#pic img").src =
    "Images/Image" + questionNumber + ".jpg";
  document.querySelector("#pic h2").style.display = "block";
  document.querySelector("#pic p").style.display = "block";
  document.querySelector("#pic img").style.display = "none";
  document.querySelector("#qNumber").textContent = questionNumber;
  document.querySelector("#pic p").textContent = questions.get(
    "question" + questionNumber
  ).q;
  document.querySelector("#b1 p").textContent = questions.get(
    "question" + questionNumber
  ).a1;
  document.querySelector("#b2 p").textContent = questions.get(
    "question" + questionNumber
  ).a2;
  document.querySelector("#b3 p").textContent = questions.get(
    "question" + questionNumber
  ).a3;
  document.querySelector("#b4 p").textContent = questions.get(
    "question" + questionNumber
  ).a4;
  document.querySelector("#answers h2").textContent = "Choose an answer!!!";
}

function winGame() {
  answerButtons.forEach((button) => {
    button.style.backgroundColor = "#f87ec5";
    button.querySelector("p").style.color = "white";
  });
  document.querySelector("#b1 p").textContent = "I";
  document.querySelector("#b2 p").textContent = "Love";
  document.querySelector("#b3 p").textContent = "You";
  document.querySelector("#b4 p").textContent = "Baby!";
  document.querySelector("#answers h2").textContent = "🎊You won🎊";
  document.querySelector("#pic img").src = "Images/Image4.jpg";

  audio.src = "Sounds/Audio4.mp3";
  audio.play();

  setTimeout(() => {
    document.querySelector("#pic img").src = "Images/Image5.jpg";
  }, 4000);
}

setQuestion();
