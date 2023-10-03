console.log("whats going on here then");
const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
const startGameBtn = document.getElementById("start-game-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");

const showGame = function () {
  console.log("button start was clicked");
  welcomeContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
};

startGameBtn.addEventListener("click", showGame);

function compareChoices(op1, op2) {
  if (op1 === op2) {
    result = "draw";
  } else if ((op1 = "rock")) {
    if ((op2 = "paper")) {
      playerTwo++;
    } else if ((op2 = "scissors")) {
      playerOne++;
    } else if ((op2 = "lizard")) {
      playerOne++;
    } else {
      playerTwo++;
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
  } else {
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
