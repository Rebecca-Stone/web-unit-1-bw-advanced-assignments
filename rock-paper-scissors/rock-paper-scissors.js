// you need to create selectors to update the scores and the moves being displayed
const scoreKeepUser = document.querySelector(".scoreKeepUser");
const scoreKeepComp = document.querySelector(".scoreKeepComp");
const userChoice = document.querySelector("#left");
const computerChoice = document.querySelector("#right");
// you also need a selector for your move selection buttons
const rockUser = document.querySelector("#rock");
const paperUser = document.querySelector("#paper");
const scissorsUser = document.querySelector("#scissors");
const user = "";

// you need to update the display area to show your move for each turn

rockUser.addEventListener("click", function () {
  userChoice.className = "fas fa-hand-rock";
  user = "rock";
});

paperUser.addEventListener("click", function () {
  userChoice.className = "fas fa-hand-paper";
  user = "paper";
});

scissorsUser.addEventListener("click", function () {
  userChoice.className = "fas fa-hand-scissors";
  user = "scissors";
});
// you need a random selection function for your computer to pick a move each turn
let computer = Math.random();

if (computer <= 0.34) {
  computerChoice.className = "fas fa-hand-rock";
  computer = "rock";
} else if (computer <= 0.67) {
  computerChoice.className = "fas fa-hand-paper";
  computer = "paper";
} else if (computer > 0.67) {
  computerChoice.className = "fas fa-hand-scissors";
  computer = "scissors";
}
// you need a function for win/loss/tie scenarios

// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case

function game(user, computer) {
  if (user === computer) {
    return `it's a tie`;
  } else if (user === "rock" && computer === "scissors") {
    return `you win!`;
  } else if (user === "paper" && computer === "rock") {
    return `you win!`;
  } else if (user === "scissors" && computer === "paper") {
    return `you win!`;
  } else {
    return `you lose!`;
  }
}
