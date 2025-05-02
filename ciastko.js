let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    return "scissors";
}

function displayResults(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Results: ${message}`;
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
}

function checkWinner() {
    if (humanScore >= 5) {
        displayResults(`You win the game!`);
        gameOver = true;
    } else if (computerScore >= 5) {
        displayResults(`Computer wins the game!`);
        gameOver = true;
    }
}

function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    let message = `You chose ${humanChoice}, computer chose ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        message += `It's a tie!`;
        displayResults(message);
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (computerChoice === winConditions[humanChoice]) {
        humanScore++;
        message += `You win this round!`;
    } else {
        computerScore++;
        message += `You lose this round.`;
    }

    displayResults(message);
    updateScore();
    checkWinner();
}

window.onload = function () {
    document.getElementById("rock").addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
    });

    document.getElementById("paper").addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
    });

    document.getElementById("scissors").addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
    });
};