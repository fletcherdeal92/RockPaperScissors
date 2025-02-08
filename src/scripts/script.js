//Rock, Paper, Scissors

let humanScore = 0;
let computerScore = 0;
let round = 0;


// Determine the computers choice
const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;
        
        case 2:
            return 'scissors';
            break;

        default:
            return `something weird happened and the computer got ${computerChoice}`;
            break;
    }
}

// get the choice of the player
const getHumanChoice = () => {
    let playerInput = prompt("What's your move? Rock, Paper, or Scissors?")
    if (playerInput.toLowerCase() === 'rock' || playerInput.toLowerCase() === 'paper' || playerInput.toLowerCase() === 'scissors') {
        return playerInput.toLowerCase()
    } else {
        return `You input "${playerInput}," which is invalid. Please use Rock, Paper, or Scissors.`
    }
}

// Play a round of RPS
function playRound(humanChoice, computerChoice) {

    let message = `You picked ${humanChoice}, and the computer picked ${computerChoice}.`;
    round ++;

    if (humanChoice === computerChoice) {
         message = `You both picked ${humanChoice}, this game is tied. No points`;
    } 

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        message += ' The Computer wins this round.';
        computerScore ++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        message += ' Congratulations, you win this round';
        humanScore ++;
    }
    
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        message += ' The Computer wins this round.';
        computerScore ++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        message += ' Congratulations, you win this round';
        humanScore ++;
    }
    
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        message += ' The Computer wins this round.';
        computerScore ++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        message += ' Congratulations, you win this round';
        humanScore ++;
    }
    console.log(`Round: ${round}`);
    console.log(`Computer: ${computerScore}.    Player: ${humanScore}.`);
    console.log(message);
    return message;
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)


