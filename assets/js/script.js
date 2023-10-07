const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
const startGameBtn = document.getElementById("start-game-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const resultsHeader = document.getElementById("results");
const backToGameBtn = document.getElementById("back-to-game-btn");
const playerChoiceContainer = document.getElementById('player-choice');
const computerChoiceContainer = document.getElementById('computer-choice');
const options = document.getElementsByClassName('choices');
let choices = {0: 'rock', 1: 'paper', 2: 'scissors', 3: 'lizard', 4: 'spock'}
let result = "";
let announcement = "";

backToGameBtn.addEventListener("click", showGame);
startGameBtn.addEventListener("click", showGame);

/**
 * displays game section
 * hides welcome and results section
 */
const showGame = function () {
  console.log("button start was clicked");
  welcomeContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  resultsContainer.classList.add("hide");
  result = "";
};


/**
 *
 */
function gameFunction(playerMove) {
  let ranNum = Math.random() * 5;
  let compMove = Math.floor (ranNum);
  let compChoice = choices[compMove];
  let playerChoice = choices[playerMove];
  result, announcement = compareChoices(playerChoice, compChoice);
  console.log(announcement);
  console.log(compChoice);
  console.log(result);
  resultsHeader.innerText = result;
  gameContainer.classList.add("hide");
  resultsContainer.classList.remove("hide");
  playerChoiceContainer.innerText = playerChoice;
  computerChoiceContainer.innerText = compChoice;
}

function compareChoices(op1, op2) {
  let announce = "";
  if (op1 == op2) {
    announce = "It's a Draw!";
    return "draw", announce;
  } else if ((op1 == "rock")) {
    if ((op2 == "paper")) {
      announce = "Paper wraps rock!";
      announce = "Paper wraps rock!";
      return "loss", announce;
    } else if ((op2 == "scissors")) {
      announce = "Rock crushes scissors!";
      return "win", announce;
    } else if ((op2 == "lizard")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else {
      announce = "Spock vaporises rock!";
      announce = "Paper wraps rock!";
      return "loss", announce;
    }
  } else if ((op1 = "paper")) {
    if ((op2 = "rock")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else if ((op2 = "scissors")) {
      announce = "Paper wraps rock!";
      announce = "Paper wraps rock!";
      return "loss", announce;
    } else if ((op2 = "lizard")) {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    } else {
      announce = "Rock crushes lizard!";
      return "win", announce;
    }
  } else if ((op1 = "scissors")) {
    // analyse choices if scissors
    if ((op2 = "rock")) {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    } else if ((op2 = "paper")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else if ((op2 = "lizard")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    }
  } else if ((op1 = "lizard")) {
    if ((op2 = "rock")) {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    } else if ((op2 = "paper")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else if ((op2 = "scissors")) {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    } else {
      announce = "Rock crushes lizard!";
      return "win", announce;
    }
  } else if (op1 = 'spock') {
    if ((op2 = "rock")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else if ((op2 = "paper")) {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    } else if ((op2 = "scissors")) {
      announce = "Rock crushes lizard!";
      return "win", announce;
    } else {
      announce = "Paper wraps rock!";
      return "loss", announce;;
    }
  }
}

  for (let i = 0; i < options.length; i++) {
    function eachOption() {
      gameFunction(i)
    }
      options[i].addEventListener('click', eachOption)
      let playerMove = options[i]
  }

