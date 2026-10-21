

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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const HUMAN_WIN = 0;
    const COMPUTER_WIN = 1;
    const TIE = 2;

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === computerChoice) return TIE;
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") return COMPUTER_WIN;
                else return HUMAN_WIN;
            case "paper":
                if (computerChoice === "rock") return HUMAN_WIN;
                else return COMPUTER_WIN;
            case "scissors":
                if (computerChoice === "rock") return COMPUTER_WIN;
                else return HUMAN_WIN;
        }
    }
    
    for (let i = 0; i<5; i++ ) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("Computer picks "+ computerChoice);
        let winner = playRound(humanChoice, computerChoice);

        if (winner == TIE) { 
            console.log("Tie!");
            continue;
        }
        if (winner == COMPUTER_WIN) {
            console.log("You lose, "+computerChoice +" beats "+humanChoice+"!");
            computerScore++;
        }
        else {
            console.log("You win, "+humanChoice +" beats "+computerChoice+"!");
            humanScore++; 
        }
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    }
    else console.log("Tie!");
}

playGame();

