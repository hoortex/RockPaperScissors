
//Task 1

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return `rock`;
    } else if (choice == 2) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

//Task 2

function getHumanChoice() {
    let choice = prompt(`Make a choice between "Rock", "Paper", "Scissors".`).toLowerCase();
        if (choice == `scissors` || choice == `rock` || choice == `paper`) {
            return choice;
        } else {
            return(`You wrote it wrong!`);
        }
}

//Task 3

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice;
let computerChoice = getComputerChoice;

//Task 4

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `tie`;
    }
    switch(humanChoice){
        case 'rock':
            if (computerChoice === 'scissors') {
                return 'You win! Rock beats Scissors.';
            } else {
                return 'You lose! Paper beats Rock.';
            }
        case 'paper':
            if (computerChoice === 'rock') {
                return 'You win! Paper beats Rock.';
            } else {
                return 'You lose! Scissors beats Paper.';
            }
        case 'scissors':
            if (computerChoice === 'paper') {
                return 'You win! Scissors beats Paper.';
            } else {
                return 'You lose! Rock beats Scissors.';
            }
        default:
            return 'Invalid choice!';
    }
}