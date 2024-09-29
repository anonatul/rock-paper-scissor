let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    let validChoices = ["rock", "paper", "scissors"];

    while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie.");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You Lose! Paper beats rock.");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You Win! Rock beats scissors.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You Lose! Scissors beats paper.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You Win! Paper beats rock.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You Lose! Rock beats scissors.");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You Win! Scissors beats paper.");
    }
    
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playGame() {
    // Reset scores at the start of a new game
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Final result
    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game! Better luck next time.");
    } else {
        console.log("It's a tie game!");
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();



// let humanScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }

// function getHumanChoice() {
//     const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
//     const validChoices = ["rock", "paper", "scissors"];

//     while (!validChoices.includes(choice)) {
//         choice = prompt("Invalid Choice!! Please enter rock, paper, or scissors:").toLowerCase();
//     }

//     return choice;
// }

// function determineWinner(humanChoice, computerChoice) {
//     const choices = ["rock", "paper", "scissors"];
//     const humanIndex = choices.indexOf(humanChoice);
//     const computerIndex = choices.indexOf(computerChoice);

//     if (humanIndex === computerIndex) {
//         return "tie";
//     }

//     return (humanIndex + 1) % 3 === computerIndex ? "human" : "computer";
// }

// function playRound(humanChoice, computerChoice) {
//     const winner = determineWinner(humanChoice, computerChoice);
//     console.log(`You ${winner === "human" ? "Win!" : "Lose!"}`);
//     console.log(`${winner === "human" ? "Rock beats scissors." : winner === "tie" ? "It's a tie!" : "Paper beats rock."}`);
    
//     if (winner === "human") {
//         humanScore++;
//     } else if (winner !== "tie") {
//         computerScore++;
//     }
    
//     console.log(`Human Score: ${humanScore}`);
//     console.log(`Computer Score: ${computerScore}`);
// }

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     console.log("Game Over!");
//     console.log(`${humanScore > computerScore ? "You win!" : "You lose!"}`);
// }

// function resetGame() {
//     humanScore = 0;
//     computerScore = 0;
//     console.log("Game Reset! New game starting...");
// }

// // Main execution
// playGame();

// // Allow multiple games
// while (true) {
//     const choice = prompt("Do you want to play another round? (yes/no)");
//     if (choice.toLowerCase() === "no") break;
//     resetGame();
//     playGame();
// }
