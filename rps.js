//Get references to all sections
const startSection = document.querySelector('.start-section');
const playSection = document.querySelector('.play-section');
const endSection = document.querySelector('.end-section');

function toggleDisplay(element, canDisplay) {
    if (canDisplay) {
        element.classList.remove('is-not-displayed');
        element.classList.add('is-displayed');
    }
    else {
        element.classList.remove('is-displayed');
        element.classList.add('is-not-displayed');
    }
}

function showElement(element) {
    element.classList.remove('is-not-visible');
    element.classList.add('is-visible');
}
function hideElement(element) {
    element.classList.remove('is-visible');
    element.classList.add('is-not-visible');
}

//Get Reference to body
const mainBody = document.querySelector('body');

//Hook events to all buttons
mainBody.addEventListener('click', (e) => {
    let target = e.target;
    switch (target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            playRound(target.id, getComputerChoice());
            break;
        case 'start-btn':
        case 'reset-btn':
            startGame();
            break;
        default:
            break;
    }
});

function startGame() {
    toggleDisplay(endSection, false);
    toggleDisplay(startSection, false);
    toggleDisplay(playSection, true);
    init();
}

//Get References to all game stat elements
const roundTrackerTxt = document.querySelector("#round-tracker");
const humanScoreTxt = document.querySelector("#player-score");
const computerScoreTxt = document.querySelector("#computer-score");
const playerChoiceImg = document.querySelector('#player-choice');
const computerChoiceImg = document.querySelector('#computer-choice');
const roundResultTxt = document.querySelector("#round-result");
const finalResultTxt = document.querySelector("#final-result");

//Game Logic
let isGameReady = false;
let humanScore = 0;
let computerScore = 0;
let currRound = 0;
const maxRounds = 5;

function init() {
    isGameReady = false;
    humanScore = 0;
    computerScore = 0;
    currRound = 0;
    hideElement(playerChoiceImg);
    hideElement(computerChoiceImg);
    updateTextDisplay(roundTrackerTxt, `Current Round: ${currRound}`);
    updateTextDisplay(humanScoreTxt, `Human Score: ${humanScore}`);
    updateTextDisplay(computerScoreTxt, `Computer Score: ${computerScore}`);
    hideElement(roundResultTxt);
    isGameReady = true;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(choices.length)];
}

function updateScore(winner) {
    if (winner === 0) {
        humanScore++;
        updateTextDisplay(humanScoreTxt, `Human Score: ${humanScore}`);
        showElement(roundResultTxt);
        updateTextDisplay(roundResultTxt, 'You Won the Round');
    }
    else if (winner === 1) {
        computerScore++
        updateTextDisplay(computerScoreTxt, `Computer Score: ${computerScore}`);
        showElement(roundResultTxt);
        updateTextDisplay(roundResultTxt, 'You Lost the Round');
    }
    else {
        showElement(roundResultTxt);
        updateTextDisplay(roundResultTxt, "It's a Tie!!!");
        return;
    }
}

function declareResult() {
    toggleDisplay(playSection, false);
    toggleDisplay(endSection, true);
    if (humanScore === computerScore) {
        updateTextDisplay(finalResultTxt, `It's a Tie!! You both scored ${humanScore} points`);
    }
    else if (humanScore > computerScore) {
        updateTextDisplay(finalResultTxt, `You Won!! You scored ${humanScore} points`);
    }
    else {
        updateTextDisplay(finalResultTxt, `You Lost!! Computer scored ${computerScore} points`)
    }
    console.log(`human score: ${humanScore}, comp score: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    if (!isGameReady) {
        return;
    }
    console.log(`Play Current Round Called: ${humanChoice}, ${computerChoice}`);

    const tie = -1;
    const humanWin = 0;
    const compWin = 1;

    if (currRound < maxRounds) {
        showChoice(playerChoiceImg, humanChoice);
        showChoice(computerChoiceImg, computerChoice);

        if (humanChoice === computerChoice) {
            updateScore(tie);
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            updateScore(humanWin);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            updateScore(humanWin);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            updateScore(humanWin);
        }
        else {
            updateScore(compWin);
        }

        currRound++;
        updateTextDisplay(roundTrackerTxt, `Current Round: ${currRound}`);
    }
    else {
        declareResult();
        return;
    }


}
function updateTextDisplay(element, str) {
    element.textContent = str;
}

const rockImg = "./img/rock.png";
const paperImg = "./img/paper.png";
const scissorsImg = "./img/scissors.png";

function showChoice(element, choice) {
    showElement(element);

    switch (choice) {
        case 'rock':
            updateChoiceImg(element, rockImg);
            break;
        case 'paper':
            updateChoiceImg(element, paperImg);
            break;
        case 'scissors':
            updateChoiceImg(element, scissorsImg);
            break;
    }
}

function updateChoiceImg(element, str) {
    element.src = str;
}