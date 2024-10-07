const WINNING_SCORE = 5;
const CHOICES = ["rock", "paper", "scissor"];

let playerScore = 0;
let computerScore = 0;

const roundResultElement = document.querySelector('.round-result');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const gameResultElement = document.querySelector('.game-result');

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
};

function determineRoundOutcome(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) return 'player';
    return 'computer';
};

function updateScores(winner) {
    if (winner === 'player') playerScore++;
    if (winner === 'computer') computerScore++;
};

function updateUI(winner, playerChoice, computerChoice) {
    if (winner === 'tie') {
        roundResultElement.textContent = "It's a tie!";
    } else if (winner === 'player') {
        roundResultElement.textContent = `You Win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        roundResultElement.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
};


function handelEndGame() {
    if (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
        gameResultElement.textContent = playerScore > computerScore ? 'You Win! Congratulations.' : 'You Lose! Try Again.';
        disableButton();
    }
};

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineRoundOutcome(playerChoice, computerChoice);

    updateScores(winner);
    updateUI(winner, playerChoice, computerChoice);
    handelEndGame();
};

function setupEventListeners() {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.dataset.choice;
            playRound(playerChoice);
        });
    });
};

function disableButton() {
    const buttons = document.querySelectorAll('.choice-btn');

    buttons.forEach(button => {
        button.disabled = true;
    });
};

setupEventListeners();  