console.log('hello');
const welcomeContainer = document.getElementById('welcome-container');
const gameContainer = document.getElementById('game-container');
const resultsContainer = document.getElementById('results-container');
const startGameBtn = document.getElementById('start-game-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');

const showGame = function () {
    console.log('button start was clicked');
    welcomeContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
};

startGameBtn.addEventListener("click", showGame);
