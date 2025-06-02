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

console.log(getComputerChoice());