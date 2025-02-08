//Rock, Paper, Scissors

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

const getHumanChoice = () => {
    let playerInput = prompt("What's your move? Rock, Paper, or Scissors?")
    if (playerInput.toLowerCase() === 'rock' || playerInput.toLowerCase() === 'paper' || playerInput.toLowerCase() === 'scissors') {
        return playerInput.toLowerCase()
    } else {
        return `You input "${playerInput}," which is invalid. Please use Rock, Paper, or Scissors.`
    }
}

console.log(getHumanChoice());

