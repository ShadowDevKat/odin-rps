function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(choices.length)];
}

function getHumanChoice() {
    //Not doing input validation as it's not a requirement for now
    let humanChoice = prompt("Choose rock, paper or scissors");
    return humanChoice.toLowerCase();
}

function playGame(rounds = 5){

    function playRound(humanChoice, computerChoice) {
        //Return values
        // -1 = tie
        // 0 = human win
        // 1 = computer win
        if(humanChoice === computerChoice) {
            alert(`Tie!! You both chose ${humanChoice}`);
            return -1;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors") {
            alert("You Win! rock beats scissors");
            return 0;
        }
        else if(humanChoice === "paper" && computerChoice === "rock") {
            alert("You Win! paper beats rock");
            return 0;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper") {
            alert("You Win! scissors beats paper");
            return 0;
        }
        else {
            alert(`You Lose! ${computerChoice} beats ${humanChoice}`);
            return 1;
        }
    }

    function updateScore(winner) {
        if(winner === 0){
            humanScore++;
        }
        else if(winner === 1){
            computerScore++
        }
        else {
            return;
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let winner = playRound(humanSelection,computerSelection);

        updateScore(winner);
    }

    if(humanScore === computerScore) {
        alert(`It's a Tie!! You both scored ${humanScore} points`);
    }
    else if(humanScore > computerScore) {
        alert(`You Won!! You scored ${humanScore} points`);
    }
    else {
        alert(`You Lost!! Computer scored ${computerScore} points`);
    }
}

playGame();