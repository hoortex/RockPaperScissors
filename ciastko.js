
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
            alert(`You wrote it wrong!`);
        }
}

//Task 3

let humanScore = 0;
let computerScore = 0;
