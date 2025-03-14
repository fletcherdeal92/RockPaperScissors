//Rock, Paper, Scissors
//🖐️✊✌️

let humanScore = 0;
let computerScore = 0;
let playerRounds = 5;
let round = 1;
let roundName = 'one';
let emoji = '';
let humanInput = '';
let computerInput = '';

let state = '';
let finalRound = false;

const rockrEmoji = '✊';
const paperEmoji = '🖐️';
const sciEmoji = '✌️';

const rootElement = document.querySelector('#gameArea');
console.log(rootElement);
rootElement.style.height = `${window.innerHeight}px`;


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
   
   /* if (round >= playerRounds) {
        gameOver = true;
        console.log(`It's the end of round 5 set game over to true? ${gameOver}`);
    } */

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

        case 1:
            roundName = "one";
            break;
        case 2:
            roundName = "two";
            break;
        case 3:
            roundName = "three";
            break;
        case 4:
            roundName = "four";
            break;
        case 5:
            roundName = "five";
            break;
        case 6:
            roundName = "six";
            break;
        default:
            roundName = x;
            break;
    }
    return roundName;
}

 function winSatateEffects() {
    // console.log(`state is ${state}`);
    let winner = 'winRound'
    let loser = 'loseRound'
    if (state === 'win') {
        document.querySelector('#roundWindow').classList.add(`${winner}`);
        document.querySelector('#roundWindow').classList.remove(`${loser}`);
        // console.log(`state is ${state}`);
    } else if (state === 'lose') {
        document.querySelector('#roundWindow').classList.add(`${loser}`);
        document.querySelector('#roundWindow').classList.remove(`${winner}`);
        // console.log(`state is ${state}`);
    } else {
        document.querySelector('#roundWindow').classList.remove(`${winner}`);
        document.querySelector('#roundWindow').classList.remove(`${loser}`);
        // console.log(`state is ${state}`);
    }
}

function updateDOM() {
    let playerScore = document.querySelector('.playerScore');
    const pcScore = document.querySelector('.computerScore');
    const roundDOM = document.querySelector('#round');
    const humanEmojiDOM = document.querySelector('.playerChoice');
    const computerEmojiDOM = document.querySelector('.computerChoice');
    const endPlayerScore = document.querySelector('.endPlayerScore');
    const endPCScore = document.querySelector('.endCompScore');

    
    playerScore.textContent = `${humanScore}`;
    endPlayerScore.textContent = `${humanScore}`;
    pcScore.textContent = `${computerScore}`;
    endPCScore.textContent = `${computerScore}`;
    roundDOM.textContent = `${translateNumber(round)}`;
    console.log(`update dom - ${round}`);
    computerEmojiDOM.textContent = `${translateEmoji(computerInput)}`;
    humanEmojiDOM.textContent = `${translateEmoji(humanInput)}`;
}

function setGameOverState() {
    const gameOverScreen = document.querySelector('#gameOver');
    gameOverScreen.classList.add('endScreen');
}

function removeGameOverState() {
    const gameOverScreen = document.querySelector('#gameOver');
    gameOverScreen.classList.remove('endScreen');
}

function checkGameState() {
    gameOver ? console.log('Game Over!') : console.log('Game is still going');
    console.log(`Defaults match? 0, 0, 5, 1, one, '', '', '', '', false`);
    console.log(`${humanScore}, ${computerScore}, ${playerRounds}, ${round}, ${roundName}, ${emoji}, ${humanInput}, ${computerInput}, ${state}, ${gameOver}`);
} 

function playGame(e) {
    console.log(e.id);
    if (round === playerRounds) {
        console.log(`final round`);
        
        const humanSelection = e.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        round = playerRounds;

        updateDOM();
        gameOver = true;

        setTimeout(() => {
            setGameOverState();
        }, 1000);

        updateDOM();

    } else {
        const humanSelection = e.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkGameState();
        updateDOM();
        winSatateEffects();
    }

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerRounds = 5;
    round = 1;
    roundName = 'one';
    emoji = '';
    humanInput = '';
    computerInput = '';
    state = '';
    gameOver = false;
    checkGameState();
    removeGameOverState();
    updateDOM();
    winSatateEffects();
}

updateDOM();