//Rock, Paper, Scissors
//🖐️✊✌️

let humanScore = 0;
let computerScore = 0;
let playerRounds = 5;
let round = 1;
let roundName = 'one';
let emoji = '';
let npcEmoji = '';
let humanInput = '';
let computerInput = '';
let message = '';

let state = '';
let finalRound = false;

let gameplay = false;

const rockrEmoji = '✊';
const paperEmoji = '🖐️';
const sciEmoji = '✌️';

const npcRockrEmoji = '🗿';
const npcPaperEmoji = '📄';
const npcSciEmoji = '✂️';


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
    round ++;

    humanInput = humanChoice;
    computerInput = computerChoice;

    if (humanChoice === computerChoice) {
         message = `It's A Tie`;
         state = 'tie';
    } 

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        message = 'DEFEAT!';
        state = 'lose'
        computerScore ++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        message = 'WINNER!';
        state = 'win';
        humanScore ++;
    }
    
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        message = 'DEFEAT!';
        state = 'lose';
        computerScore ++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        message = 'WINNER!';
        state = 'win';
        humanScore ++;
    }
    
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        message = 'DEFEAT!';
        state = 'lose';
        computerScore ++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        message = 'WINNER!';
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

function translateNpcEmoji(i) {
    
    if (i === 'rock') {
        npcEmoji = npcRockrEmoji;
    } else if (i === 'paper') {
        npcEmoji = npcPaperEmoji;
    } else if (i === 'scissors') {
        npcEmoji = npcSciEmoji;
    } else if (i === '') {
        npcEmoji = "?";
    } else {
        npcEmoji = "🤷";
    }
    return npcEmoji;
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
    document.querySelector('.roundInfo').style.visibility = 'visible';

    let winner = 'winRound'
    let loser = 'loseRound'
    if (state === 'win') {
        document.querySelector('.roundInfo').classList.add(`${winner}`);
        document.querySelector('.roundInfo').classList.remove(`${loser}`);
        // console.log(`state is ${state}`);
    } else if (state === 'lose') {
        document.querySelector('.roundInfo').classList.add(`${loser}`);
        document.querySelector('.roundInfo').classList.remove(`${winner}`);
        // console.log(`state is ${state}`);
    } else {
        document.querySelector('.roundInfo').classList.remove(`${winner}`);
        document.querySelector('.roundInfo').classList.remove(`${loser}`);
        // console.log(`state is ${state}`);
    }

    setTimeout(() => {
        document.querySelector('.roundInfo').style.visibility = 'hidden'; 
        gameplay = false;
    }, 2000);

}

function updateDOM() {
    let playerScore = document.querySelector('.playerScore');
    const pcScore = document.querySelector('.computerScore');
    const roundDOM = document.querySelector('#round');
    const humanEmojiDOM = document.querySelector('.playerChoice');
    const computerEmojiDOM = document.querySelector('.computerChoice');
    const endPlayerScore = document.querySelector('.endPlayerScore');
    const endPCScore = document.querySelector('.endCompScore');
    const endRoundScoreDOM = document.querySelector('#roundTally');
    const messageDOM = document.querySelector('#message');

    playerScore.textContent = `${humanScore}`;
    endPlayerScore.textContent = `${humanScore}`;
    pcScore.textContent = `${computerScore}`;
    endPCScore.textContent = `${computerScore}`;
    roundDOM.textContent = `${round} of ${playerRounds}`;
    console.log(`update dom - ${round}`);
    
    computerEmojiDOM.textContent = `${translateNpcEmoji(computerInput)}`;
    humanEmojiDOM.textContent = `${translateEmoji(humanInput)}`;
    console.log(message);
    messageDOM.textContent = `${message}`;

    finalRound ? endRoundScoreDOM.textContent = `${ playerRounds}` : endRoundScoreDOM.textContent = `${ round - 1}`;
}

function setGameOverState() {
    const gameOverScreen = document.querySelector('#gameOver');
    gameOverScreen.classList.add('endScreen');

    const endtimes = document.querySelector('.endstate > .mainContainer');
    if (humanScore > computerScore) {
        endtimes.style.boxShadow = '0 0 25px 12px #7abc2a';
    } else if (humanScore === computerScore) {
        endtimes.style.boxShadow = '0 0 25px 12px #f7f7f7';
    } else if (humanScore < computerScore) {
        endtimes.style.boxShadow = '0 0 25px 12px #ff0000';
    }
}

function removeGameOverState() {
    const gameOverScreen = document.querySelector('#gameOver');
    gameOverScreen.classList.remove('endScreen');
    document.querySelector('.roundInfo').style.visibility = 'hidden'; 
}

function checkGameState() {
    finalRound ? console.log('Game Over!') : console.log('Game is still going');
    console.log(`Defaults match? 0, 0, 5, 1, one, '', '', '', '', false`);
    console.log(`${humanScore}, ${computerScore}, ${playerRounds}, ${round}, ${roundName}, ${emoji}, ${humanInput}, ${computerInput}, ${state}, ${gameOver}`);
} 

function stateCheck(e) {
    gameplay ? console.log('playing') : playGame(e);
}

function playGame(e) {
    gameplay = true;
    console.log(e.id);
    console.log('playGame Start');

    if (round === playerRounds) {
        console.log(`final round`);
        
        const humanSelection = e.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        round = playerRounds;

        updateDOM();
        finalRound = true;
        updateDOM();
        winSatateEffects();
        setTimeout(() => {
            setGameOverState();
        }, 3000);

    } else {
        const humanSelection = e.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkGameState();
        winSatateEffects();
        updateDOM();
    }

}

function resetGame() {
    document.querySelector('.roundInfo').style.visibility = 'hidden'; 
    humanScore = 0;
    computerScore = 0;
    playerRounds = 5;
    round = 1;
    roundName = 'one';
    emoji = '';
    humanInput = '';
    computerInput = '';
    state = '';
    finalRound = false;
    message = '';
    gameplay = false;
    checkGameState();
    removeGameOverState();
}



updateDOM();