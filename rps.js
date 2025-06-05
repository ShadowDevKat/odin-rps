function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(choices.length)];
}

let humanScore = 0;
let computerScore = 0;
let currRound = 0;
const maxRounds = 5;

function init() {
    humanScore = 0;
    computerScore = 0;
    currRound = 0;
    humanScoreElem.textContent = `Human Score: ${humanScore}`;
    computerScoreElem.textContent = `Computer Score: ${computerScore}`;
    roundTrackerElem.textContent = `Current Round: ${currRound}`;
    updateResult('');
}

function updateScore(winner) {
    if (winner === 0) {
        humanScore++;
        humanScoreElem.textContent = `Human Score: ${humanScore}`;
    }
    else if (winner === 1) {
        computerScore++
        computerScoreElem.textContent = `Computer Score: ${computerScore}`;
    }
    else {
        return;
    }
}
function declareResult() {
    if (humanScore === computerScore) {
        updateResult(`It's a Tie!! You both scored ${humanScore} points`);
    }
    else if (humanScore > computerScore) {
        updateResult(`You Won!! You scored ${humanScore} points`);
    }
    else {
        updateResult(`You Lost!! Computer scored ${computerScore} points`);
    }
}
function playRound(humanChoice, computerChoice) {
    const tie = -1;
    const humanWin = 0;
    const compWin = 1;

    if (currRound < maxRounds) {
        currRound++;
        roundTrackerElem.textContent = `Current Round: ${currRound}`;
    }
    else {
        return;
    }

    if (humanChoice === computerChoice) {
        updateResult(`Tie!! You both chose ${humanChoice}`);
        updateScore(tie);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        updateResult("You Win! rock beats scissors");
        updateScore(humanWin);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        updateResult("You Win! paper beats rock");
        updateScore(humanWin);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        updateResult("You Win! scissors beats paper");
        updateScore(humanWin);
    }
    else {
        updateResult(`You Lose! ${computerChoice} beats ${humanChoice}`);
        updateScore(compWin);
    }

    if(currRound === maxRounds) {
        declareResult();
    }
}

// playGame();

const resultElem = document.querySelector(".test-text");
const humanScoreElem = document.querySelector("#human-score");
const computerScoreElem = document.querySelector("#computer-score");
const roundTrackerElem = document.querySelector("#round-container");

init();

function updateResult(str) {
    resultElem.textContent = str;
}

let playerOptions = document.querySelector(".player-options");

playerOptions.addEventListener('click', (e) => {
    let target = e.target;

    switch (target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            // updateResult(`${target.id} was pressed`);
            playRound(target.id, getComputerChoice());
            break;
        default:
            break;
    };
});