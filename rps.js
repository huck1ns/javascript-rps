

function getComputerChoice() {
    let choice = (Math.floor(Math.random()*3));
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice == humanChoice) {

    }
}

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice());
console.log(getComputerChoice())