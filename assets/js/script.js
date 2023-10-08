const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
const startGameBtn = document.getElementById("start-game-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const resultsHeader = document.getElementById("results");
const backToGameBtn = document.getElementById("back-to-game-btn");
const playerChoiceContainer = document.getElementById("player-choice");
const computerChoiceContainer = document.getElementById("computer-choice");
const options = document.getElementsByClassName("choices");
const footer = document.getElementById("footer");
let choices = {0: 'rock', 1: 'paper', 2: 'scissors', 3: 'lizard', 4: 'spock'}
let result = "";
let announcement = "";

/**
 * displays game section
 * hides welcome and results section
 * sets result back to empty string
 */
const showGame = function () {
  console.log("button start was clicked");
  welcomeContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  resultsContainer.classList.add("hide");
  footer.classList.add("position__absolute");
  result = "";
};

/**
 * displays welcome section
 * hides game and results section
 * sets result back to empty string
 */
const showHome = function () {
  welcomeContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  resultsContainer.classList.add("hide");
  footer.classList.remove('position__absolute');
}

/**
 * event listeners to show the different sections
 */
backToGameBtn.addEventListener("click", showGame);
startGameBtn.addEventListener("click", showGame);
backToHomeBtn.addEventListener("click", showHome);

/**
 *gets computer to generate number between 0-4
 *matches computer and players numbers with object to get the choices
 *puts choices to comparison function and puts the results in the correct elements html
 */
function gameFunction(playerMove) {
  let ranNum = Math.random() * 5;
  let compMove = Math.floor (ranNum);
  let compChoice = choices[compMove];
  let playerChoice = choices[playerMove];
  result, announcement = compareChoices(playerChoice, compChoice);
  console.log(announcement);
  console.log(result);
  resultsHeader.innerText = result;
  gameContainer.classList.add("hide");
  resultsContainer.classList.remove("hide");
  playerChoiceContainer.innerText = playerChoice;
  computerChoiceContainer.innerText = compChoice;

//compares all possible combinations, announces outcome and result
function compareChoices(op1, op2) {
  let announce = "";
  // analyse if results are the same
  if (op1 == op2) {
    announce = "It's a Draw!";
    return "draw", announce;
    // analyse if player choice is rock
  } else if ((op1 == "rock")) {
    if ((op2 == "paper")) {
      announce = "Paper wraps Rock!";
      return "loss", announce;
    } else if ((op2 == "scissors")) {
      announce = "Rock crushes Scissors!";
      return "win", announce;
    } else if ((op2 == "lizard")) {
      announce = "Rock crushes Lizard!";
      return "win", announce;
    } else {
      announce = "Spock vaporises Rock!";
      return "loss", announce;
    }
    // analyse if player choice is paper
  } else if ((op1 = "paper")) {
    if ((op2 = "rock")) {
      announce = "Paper wraps Rock!";
      return "win", announce;
    } else if ((op2 = "scissors")) {
      announce = "Scissors cut Paper!!";
      return "loss", announce;
    } else if ((op2 = "lizard")) {
      announce = "Lizard eats Paper!";
      return "loss", announce;
    } else {
      announce = "Paper disproves Spock!";
      return "win", announce;
    }
    // analyse if player choice is scissors
  } else if ((op1 = "scissors")) {
    if ((op2 = "rock")) {
      announce = "Rock crushes Scissors!";
      return "loss", announce;
    } else if ((op2 = "paper")) {
      announce = "Scissors cut Paper!";
      return "win", announce;
    } else if ((op2 = "lizard")) {
      announce = "Scissors decapitate Lizard!";
      return "win", announce;
    } else {
      announce = "Spock smashes Scissors!";
      return "loss", announce;;
    }
    // analyse if player choice is lizard
  } else if ((op1 = "lizard")) {
    if ((op2 = "rock")) {
      announce = "Rock crushes Lizard!";
      return "loss", announce;
    } else if ((op2 = "paper")) {
      announce = "Lizard eats Paper!";
      return "win", announce;
    } else if ((op2 = "scissors")) {
      announce = "Scissors decapitate Lizard";
      return "loss", announce;;
    } else {
      announce = "Lizard poisons Spock";
      return "win", announce;
    }
    // analyse if player choice is spock
  } else if (op1 = 'spock') {
    if ((op2 = "rock")) {
      announce = "Spock vaporises Rock!";
      return "win", announce;
    } else if ((op2 = "paper")) {
      announce = "Paper disproves Spock!";
      return "loss", announce;
    } else if ((op2 = "scissors")) {
      announce = "Spock smashes Scissors!";
      return "win", announce;
    } else {
      announce = "Lizard poisons Spock!";
      return "loss", announce;
    }
  }
}
  // puts event listeners on each option button and sends result to the game function
  for (let i = 0; i < options.length; i++) {
    function eachOption() {
      console.log("an option was clicked");
      gameFunction(i);
    }
      options[i].addEventListener('click', eachOption);
      let playerMove = options[i];
  }
}
