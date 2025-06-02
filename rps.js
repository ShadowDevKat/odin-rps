// console.log("Hello!");

let rock = "rock";
let paper = "paper";
let scissor = "scissor";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    let randomChoice = "";

    switch(randomNumber) {
        case 0:
            randomChoice = rock;
            break;
        case 1:
            randomChoice = paper;
            break;
        case 2:
            randomChoice = scissor;
            break;
        default:
            break;
    }

    return randomChoice;
}

function getHumanChoice() {
    //Not doing input validation as it's not a requirement for now
    let humanChoice = prompt("Choose rock, paper or scissor");
    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());