function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return `rock`;
    } else if (choice === 2) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

function getHumanChoice() {
    while (true) {
        const choice = prompt(`Make a choice between "Rock", "Paper", "Scissors".`);
        if (choice === null) {
            alert("Game canceled.");
            return null; // Allow exiting the game gracefully
        }
        const formattedChoice = choice.toLowerCase();
        if (formattedChoice === 'rock' || formattedChoice === 'paper' || formattedChoice === 'scissors') {
            return formattedChoice;
        } else {
            alert(`Invalid input! Please enter "Rock", "Paper", or "Scissors".`);
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return `tie`;
    }
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log(`You win! Rock beats Scissors.`);
                return 'win';
            } else {
                console.log(`You lose! Paper beats Rock.`);
                return 'lose';
            }
        case 'paper':
            if (computerChoice === 'rock') {
                console.log(`You win! Paper beats Rock.`);
                return 'win';
            } else {
                console.log(`You lose! Scissors beats Paper.`);
                return 'lose';
            }
        case 'scissors':
            if (computerChoice === 'paper') {
                console.log(`You win! Scissors beats Paper.`);
                return 'win';
            } else {
                console.log(`You lose! Rock beats Scissors.`);
                return 'lose';
            }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const humanChoice = getHumanChoice();
        if (humanChoice === null) return; // Exit if the user cancels the prompt
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === `win`) {
            humanScore++;
        } else if (result === `lose`) {
            computerScore++;
        }
        console.log(`Current Score: You - ${humanScore}, Computer - ${computerScore}`);
        console.log("---------------------------");
    }

    console.log("Game Over!");
    console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations, you are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer is the overall winner. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();
