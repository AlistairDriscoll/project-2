console.log("car bonnet");
const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
const startGameBtn = document.getElementById("start-game-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");

let playerOne = 0
let playerTwo = 0

const showGame = function () {
  console.log("button start was clicked");
  welcomeContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
};

startGameBtn.addEventListener("click", showGame);

//function to see which player wins

let choices = {0: 'rock', 1: 'paper', 2: 'scissors', 3: 'lizard', 4: 'spock'}

function gameFunction(playerMove) {
  let ranNum = Math.random() * 5;
  let compMove = Math.floor (ranNum);
  console.log(choices[playerMove])
  let compChoice = choices[compMove];
  let playerChoice = choices[playerMove];
  console.log(compChoice);
  let result = compareChoices(playerChoice, compChoice);
  console.log(result)
}

function compareChoices(op1, op2) {
  console.log(op1, op2)
  if (op1 == op2) {
    return "draw";
  } else if ((op1 == "rock")) {
    if ((op2 == "paper")) {
      return "loss"
    } else if ((op2 == "scissors")) {
      return "win";
    } else if ((op2 == "lizard")) {
      return "win";
    } else {
      return "loss";
    }
  } else if ((op1 = "paper")) {
    if ((op2 = "rock")) {
      playerOne++;
    } else if ((op2 = "scissors")) {
      playerTwo++;
    } else if ((op2 = "lizard")) {
      playerTwo++;
    } else {
      playerOne++;
    }
  } else if ((op1 = "scissors")) {
    if ((op2 = "rock")) {
      playerTwo++;
    } else if ((op2 = "paper")) {
      playerOne++;
    } else if ((op2 = "lizard")) {
      playerOne++;
    } else {
      playerTwo++;
    }
  } else if ((op1 = "lizard")) {
    if ((op2 = "rock")) {
      playerTwo++;
    } else if ((op2 = "paper")) {
      playerOne++;
    } else if ((op2 = "scissors")) {
      playerTwo++;
    } else {
      playerOne++;
    }
  } else if (op1 = 'spock') {
    if ((op2 = "rock")) {
      playerOne++;
    } else if ((op2 = "paper")) {
      playerTwo++;
    } else if ((op2 = "scissors")) {
      playerOne++;
    } else {
      playerTwo++;
    }
  }
}


  let options = document.getElementsByClassName('choices');
  for (let i = 0; i < options.length; i++) {
    function eachOption() {
      gameFunction(i)
    }
      options[i].addEventListener('click', eachOption)
      let playerMove = options[i]
      
      
  }


let scores = document.getElementById('scores-h');
scores.innerHTML = `
    <p>
        Player One ${playerOne} : ${playerTwo} Player Two
    </p>
`
let op1 = getOption1();
