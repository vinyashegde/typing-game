// Variables
var wordBank = {
  easy: ["cat", "dog", "sun", "moon", "sky"],
  medium: ["javascript", "html", "css", "programming", "development"],
  hard: ["supercalifragilisticexpialidocious", "antidisestablishmentarianism", "floccinaucinihilipilification", "pneumonoultramicroscopicsilicovolcanoconiosis"]
}
let wordToType = document.getElementById("word-to-type");
let input = document.getElementById("typing-input");
let score = 0;
let time = 60; // set the starting time in seconds
let intervalId;
let currentWordIndex = Math.floor(Math.random() * wordBank.length);
let level = "easy";

// Get a random word from the word bank
function getRandomWord() {
  wordToType.innerHTML = wordBank[level][Math.floor(Math.random() * wordBank[level].length)];
}


// Check if the typed word is correct
function checkWord() {
  if (input.value !== "" && input.value.toLowerCase() === wordToType.innerHTML.toLowerCase())
  {
    // increase the score
    score++;
    // update the score display
    document.getElementById("score-display").innerHTML = "Score: " + score;
    // clear the input field
    input.value = "";
    // get a new random word
    getRandomWord();
  } else {
    // display an error message
    alert("Incorrect word! Try again.");
  }
}


// Start the timer
function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

// Update the timer
function updateTimer() {
  time--;
  document.getElementById("timer").innerHTML = time;
  if (time <= 0) {
    stopTimer();
    alert("Time's up! Your score is: " + score);
  }
}

// Stop the timer
function stopTimer() {
  clearInterval(intervalId);
}

// Start the game
document.getElementById("start-button").addEventListener("click", function() {
  getRandomWord();
  startTimer();

  // Show the submit button and input field
  document.getElementById("submit-button").style.display = "block";
  document.getElementById("typing-input").style.display = "block";
});

// Check the word when the submit button is clicked
document.getElementById("submit-button").addEventListener("click", function() {
  checkWord();
});

// Check the level when the level select is changed
document.getElementById("level-select").addEventListener("change", function() {
  level = this.value;
  getRandomWord();
});
