// console.log("Hello!");

const choices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

function getHumanChoice() {
    //Not doing input validation as it's not a requirement for now
    let humanChoice = prompt("Choose rock, paper or scissors");
    return humanChoice.toLowerCase();
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        alert(`Tie!! You both chose ${humanChoice}`);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        alert("You Win! rock beats scissors");
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        alert("You Win! paper beats rock");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        alert("You Win! scissors beats paper");
    }
    else {
        alert(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);