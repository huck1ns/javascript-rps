const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.addEventListener("click", () => playRound("rock"));
rockBtn.textContent = "Rock"
paperBtn.addEventListener("click", () => playRound("paper"));
paperBtn.textContent = "Paper"
scissorsBtn.addEventListener("click", () => playRound("scissors"));
scissorsBtn.textContent = "Scissors"

const buttons = document.querySelector(".buttons");

buttons.append(rockBtn);
buttons.append(paperBtn);
buttons.append(scissorsBtn);

const computerChoiceText = document.createElement("p");
buttons.append(computerChoiceText);


const results = document.querySelector(".results");
const playerScoreText = document.createElement("p");
const computerScoreText = document.createElement("p");

let playerScore = 0;
let computerScore = 0;
playerScoreText.textContent = ("Your Score: " + playerScore);
computerScoreText.textContent = ("Computer Score: " + computerScore);
results.append(playerScoreText);
results.append(computerScoreText);


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

function updateResults() {
    playerScoreText.textContent = ("Your Score: " + playerScore);
    computerScoreText.textContent = ("Computer Score: " + computerScore);
}

function playRound(humanChoice) {
    if (playerScore >= 5 || computerScore >= 5) return;
    const computerChoice = getComputerChoice()
    computerChoiceText.textContent = "Computer chose " + computerChoice;
    if (humanChoice === computerChoice) return;
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore++;
                break;
            }
            else {
                playerScore++;
                break;
            }
        case "paper":
            if (computerChoice === "rock") {
                playerScore++;
                break;
            }
            else {
                computerScore++;
                break;
            }
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                break;
            }
            else {
                playerScore++;
                break;
            }
    }
    updateResults();
    checkForWinner();
    return;
}
    
function checkForWinner() {
    if (computerScore == 5) {
        const computerWin = document.createElement("p");
        computerWin.textContent = "Computer wins!";
        results.append(computerWin);
    }
    else if (playerScore == 5) {
        const playerWin = document.createElement("p");
        playerWin.textContent = "You win!";
        results.append(playerWin);
    }
    
}
