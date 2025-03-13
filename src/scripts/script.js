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

function playGame() {
for (let i = 1; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

}

//playGame();

const container = document.querySelector('.container2');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');

const content = document.createElement('div');
content.classList.add('testContent');

h1.textContent = `I'm in a DIV`;
p.textContent = `ME TOO!`;
content.appendChild(h1);
content.appendChild(p);


let paraContent = document.createElement('p');
paraContent.classList.add('redText');
paraContent.textContent = `Hey I'm red!`;

let headerContent = h3;
headerContent.classList.add('blueText');
headerContent.textContent = `I'm blue!`;

container.appendChild(paraContent);
container.appendChild(headerContent);
container.appendChild(content);

const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

btn.onclick = () => alert('Hello World!');

btn2.addEventListener('click', () => {
    alert('Hello World!');
});

//🖐️✊✌️