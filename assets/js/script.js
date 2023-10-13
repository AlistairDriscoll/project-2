/* jshint esversion: 8 */

// all elements needed that will be used throughout the code
const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
const startGameBtn = document.getElementById("start-game-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const backToGameBtn = document.getElementById("back-to-game-btn");
const playerChoiceContainer = document.getElementById("player-choice");
const computerChoiceContainer = document.getElementById("computer-choice");
const announcementSpan = document.getElementById('announcement-span');
const resultsHeader = document.getElementById("results"); 
const options = document.getElementsByClassName("choices");
const footer = document.getElementById("footer");
let announce = "";
let announcement = "";
let result = "";
let choices = {0: 'Rock', 1: 'Paper', 2: 'Scissors', 3: 'Lizard', 4: 'Spock'};


//displays the game section while hiding the other two sections, sets result back to empty string
const showGame = function () {
  welcomeContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  resultsContainer.classList.add("hide");

  if (window.innerWidth <= 400){
    footer.classList.remove("position__absolute");
  } else {
    footer.classList.add("position__absolute");
  }
};
//displays home section and hides the other two sections
const showHome = function () {
  welcomeContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  resultsContainer.classList.add("hide");
  footer.classList.remove('position__absolute');
};

//event listeners to call the functions that show the different sections
backToGameBtn.addEventListener("click", showGame);
startGameBtn.addEventListener("click", showGame);
backToHomeBtn.addEventListener("click", showHome);

function resetGame() {
  result = "";
  announce = "";
  announcement = "";
}


//compares all possible combinations, announces outcome and result
function compareChoices(op1, op2) {
  
  // analyse if results are the same
  if (op1 == op2) {
    announce = "You both chose the same!";
    return ["Draw", announce];

    // analyse if player choice is rock
  } else if ((op1 == "Rock")) {
    if ((op2 == "Paper")) {
      announce = "Paper wraps Rock!";
      return ["Loss", announce];

    } else if ((op2 == "Scissors")) {
      announce = "Rock crushes Scissors!";
      return ["Win", announce];

    } else if ((op2 == "Lizard")) {
      announce = "Rock crushes Lizard!";
      return ["Win", announce];

    } else {
      announce = "Spock vaporises Rock!";
      return ["Loss", announce];
    }
    // analyse if player choice is paper
  } else if ((op1 == "Paper")) {

    if ((op2 == "Rock")) {
      announce = "Paper wraps Rock!";
      return ["Win", announce];

    } else if ((op2 == "Scissors")) {
      announce = "Scissors cut Paper!";
      return ["Loss", announce];

    } else if ((op2 == "Lizard")) {
      announce = "Lizard eats Paper!";
      return ["Loss", announce];

    } else if (op2 == "Spock") {
      announce = "Paper disproves Spock!";
      return ["Win", announce];
    }
    // analyse if player choice is scissors
  } else if ((op1 == "Scissors")) {

    if ((op2 == "Rock")) {
      announce = "Rock crushes Scissors!";
      return ["Loss", announce];

    } else if ((op2 == "Paper")) {
      announce = "Scissors cut Paper!";
      return ["Win", announce];

    } else if ((op2 == "Lizard")) {
      announce = "Scissors decapitate Lizard!";
      return ["Win", announce];

    } else if (op2 == "Spock") {
      announce = "Spock smashes Scissors!";
      return ["loss", announce];
    }
    // analyse if player choice is lizard
  } else if ((op1 == "Lizard")) {

    if ((op2 == "Rock")) {
      announce = "Rock crushes Lizard!";
      return ["Loss", announce];

    } else if ((op2 == "Paper")) {
      announce = "Lizard eats Paper!";
      return ["Win", announce];

    } else if ((op2 == "Scissors")) {
      announce = "Scissors decapitate Lizard!";
      return ["Loss", announce];

    } else if (op2 == "Spock") {
      announce = "Lizard poisons Spock!";
      return ["Win", announce];
    }
    // analyse if player choice is spock
  } else if (op1 == 'Spock') {

    if ((op2 == "Rock")) {
      announce = "Spock vaporises Rock!";
      return ["Win", announce];

    } else if ((op2 == "Paper")) {
      announce = "Paper disproves Spock!";
      return ["Loss", announce];

    } else if ((op2 == "Scissors")) {
      announce = "Spock smashes Scissors!";
      return ["Win", announce];

    } else if (op2 == "Lizard") {
      announce = "Lizard poisons Spock!";
      return ["Loss", announce];
    }
  }
}

/* gets computer to generate number between 0-4
  matches computer and players numbers with object to get the choices
  puts choices to comparison function and puts the results in the correct elements html*/
  function gameFunction(playerMove) {
  let ranNum = Math.random() * 5;
  let compMove = Math.floor (ranNum);
  let compChoice = choices[compMove];
  let playerChoice = choices[playerMove];
  [result, announcement] = compareChoices(playerChoice, compChoice);
  resultsHeader.innerText = result;
  playerChoiceContainer.innerText = playerChoice;
  computerChoiceContainer.innerText = compChoice;
  announcementSpan.innerText = announcement;
  
  gameContainer.classList.add("hide");
  resultsContainer.classList.remove("hide");
}

function eachOption(i) {
  resetGame();
  gameFunction(i);
}

  // puts event listeners on each option button and sends result to the game function
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', eachOption(i));
  }

