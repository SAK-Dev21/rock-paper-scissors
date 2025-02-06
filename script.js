// NOTE: I have used console.log() alongside return statements for testing.

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            console.log('rock');
            return 'rock';
        case 2:
            console.log('paper');
            return 'paper';
        case 3:
            console.log('scissors');
            return 'scissors';
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const outcome = humanChoice + computerChoice;

    switch (outcome) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('Tie.');
            return 'Tie.';                             
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
            computerScore += 1;
            return `Computer wins! ${computerChoice} beats ${humanChoice}!`;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore += 1;
            return `You win! ${humanChoice} beats ${computerChoice}!`;
        
        default:
            console.log('Invalid game state.');
            return 'Invalid game state.';
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);