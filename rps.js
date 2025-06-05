//Get references to all sections
const startSection = document.querySelector('.start-section');
const playSection = document.querySelector('.play-section');
const endSection = document.querySelector('.end-section');

function toggleDisplay(element) {
    const originalDisplay = element.dataset.display || 'block';

    if (element.style.display === 'none') {
        element.style.display = originalDisplay;
    } else {
        element.dataset.display = element.style.display || getComputedStyle(element).display;
        element.style.display = 'none';
    }
}

toggleDisplay(playSection);
toggleDisplay(endSection);

//Get Reference to body
const mainBody = document.querySelector('body');

//Hook events to all buttons
mainBody.addEventListener('click', (e) => {
    let target = e.target;
    switch (target.id) {
        case 'start-btn':
            startGame();
            break;
        case 'rock':
        case 'paper':
        case 'scissors':
            playRound(target.id, getComputerChoice());
            break;
        case 'reset-btn':
            toggleDisplay(endSection);
            toggleDisplay(playSection);
            init();
            break;
        default:
            break;
    }
});

function startGame() {
    toggleDisplay(startSection);
    toggleDisplay(playSection);
    init();
}
function showElement(element) {
    element.style.visibility = 'visible';
}
function hideElement(element) {
    element.style.visibility = 'hidden';
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
    toggleDisplay(playSection);
    toggleDisplay(endSection);
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

function showChoice(element, choice, result) {
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