//Rock, Paper, Scissors
//🖐️✊✌️

let humanScore = 0;
let computerScore = 0;
let playerRounds = 5;
let round = 0;
let roundName = 'one';
let emoji = '';
let humanInput = '';
let computerInput = '';

let state = '';
let gameOver = false;

const rockrEmoji = '✊';
const paperEmoji = '🖐️';
const sciEmoji = '✌️';


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
    if (playerInput.toLowerCase() === 'rock' || 
    playerInput.toLowerCase() === 'paper' || 
    playerInput.toLowerCase() === 'scissors') {
        return playerInput.toLowerCase()
    } else {
        return `You input "${playerInput}," which is invalid. Please use Rock, Paper, or Scissors.`
    }
}

// Play a round of RPS
function playRound(humanChoice, computerChoice) {

    let message = `You picked ${humanChoice}, and the computer picked ${computerChoice}.`;
    round ++;

    humanInput = humanChoice;
    computerInput = computerChoice;

    if (humanChoice === computerChoice) {
         message = `You both picked ${humanChoice}, this game is tied. No points`;
         state = 'tie';
    } 

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        message += ' The Computer wins this round.';
        state = 'lose'
        computerScore ++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        message += ' Congratulations, you win this round';
        state = 'win';
        humanScore ++;
    }
    
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        message += ' The Computer wins this round.';
        state = 'lose';
        computerScore ++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        message += ' Congratulations, you win this round';
        state = 'win';
        humanScore ++;
    }
    
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        message += ' The Computer wins this round.';
        state = 'lose';
        computerScore ++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        message += ' Congratulations, you win this round';
        state = 'win';
        humanScore ++;
    }
    console.log(`Round: ${round}`);
    console.log(`Computer: ${computerScore}.    Player: ${humanScore}.`);
    console.log(message + ` state is ${state}`);
    return message;
    
}

// TranslateEmoji
function translateEmoji(i) {
    
    if (i === 'rock') {
        emoji = rockrEmoji;
    } else if (i === 'paper') {
        emoji = paperEmoji;
    } else if (i === 'scissors') {
        emoji = sciEmoji;
    } else if (i === '') {
        emoji = "?";
    } else {
        emoji = "🤷";
    }
    return emoji;
}

function translateNumber(x)  {
    switch (x) {
        case 0:
            roundName = "one";
            break;
        case 1:
            roundName = "two";
            break;
        case 2:
            roundName = "three";
            break;
        case 3:
            roundName = "four";
            break;
        case 4:
            roundName = "five";
            break;
        case 5:
            roundName = "six";
            break;
        default:
            roundName = "  ${x}  ";
            break;
    }
    return roundName;
}

 function winSatateEffects() {
    console.log(`state is ${state}`);
    let winner = 'winRound'
    let loser = 'loseRound'
    if (state === 'win') {
        document.querySelector('#roundWindow').classList.add(`${winner}`);
        document.querySelector('#roundWindow').classList.remove(`${loser}`);
        console.log(`state is ${state}`);
    } else if (state === 'lose') {
        document.querySelector('#roundWindow').classList.add(`${loser}`);
        document.querySelector('#roundWindow').classList.remove(`${winner}`);
        console.log(`state is ${state}`);
    } else {
        document.querySelector('#roundWindow').classList.remove(`${winner}`);
        document.querySelector('#roundWindow').classList.remove(`${loser}`);
        console.log(`state is ${state}`);
    }
}

function updateDOM() {
    const playerScore = document.querySelector('#playerScore');
    const pcScore = document.querySelector('#computerScore');
    const roundDOM = document.querySelector('#round');
    const humanEmojiDOM = document.querySelector('.playerChoice');
    const computerEmojiDOM = document.querySelector('.computerChoice');
    
    playerScore.textContent = `${humanScore}`;
    pcScore.textContent = `${computerScore}`
    roundDOM.textContent = `${translateNumber(round)}`;
    computerEmojiDOM.textContent = `${translateEmoji(computerInput)}`;
    humanEmojiDOM.textContent = `${translateEmoji(humanInput)}`;
}

/* 

function checkGameState() {
    if gameOver {

    }
} 
    
*/

function playGame(e) {
    console.log(e.id);
    if (round >= playerRounds - 1) {
        console.log(`Game Over! Final Score: Computer: ${computerScore}. Player: ${humanScore}.`);
    } else {
        const humanSelection = e.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkGameState();
        updateDOM();
        winSatateEffects();
        console.log(`${computerScore}`)
    }

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerRounds = 5;
    round = 0;
    roundName = 'one';
    emoji = '';
    humanInput = '';
    computerInput = '';
    state = '';
    gameOver = false;
    updateDOM();
    winSatateEffects();
}

updateDOM();