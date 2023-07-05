let playerTotal = 0;
let computerTotal = 0;
let gameOver = false;
const buttons = document.querySelectorAll('button');
const computerScore = document.querySelector('.computerScore');
const userScore = document.querySelector('.userScore');
const gameText = document.querySelector('.gameText')
const computerScoreValue = document.createElement('p');
const userScoreValue = document.createElement('p');

buttons.forEach(button => button.addEventListener('click', round))

function initializeGame(){
    playerTotal = 0;
    computerTotal = 0;
    gameText.innerHTML = '';
    buttons.forEach(button => button.disabled = false);

    displayScore();

    let beginGameMessageH1 = document.createElement('h1');
    beginGameMessageH1.innerText = 'START GAME';

    let beginGameMessageH3 = document.createElement('h3');
    beginGameMessageH3.innerText = 'Click the Rock, Paper, Scissors buttons below';

    gameText.appendChild(beginGameMessageH1);
    gameText.appendChild(beginGameMessageH3);


}

function getComputerChoice(){
    const options = ['ROCK', 'PAPER', 'SCISSORS']

    return options[Math.floor(options.length * Math.random())];
}

function round(e){
    const userGuess = (e.target.className).toUpperCase();
    const computerGuess = getComputerChoice();
    const whoWonH3 = document.createElement('h3');
    const computerGuessH1 = document.createElement('h1');
    const userGuessH1 = document.createElement('h1');

    gameText.innerHTML = '';

    if(computerGuess === userGuess) {
        whoWonH3.innerText = 'Tie'
        console.log(`Computer: ${computerGuess} || User: ${userGuess}\nTIE!!`)
        addScore('tie');
    } else if (computerGuess === 'ROCK' && userGuess === 'SCISSORS' ||
            computerGuess === 'PAPER' && userGuess === 'ROCK' ||
            computerGuess === 'SCISSORS' && userGuess === 'PAPER') {
                whoWonH3.innerText = 'Computer scored!'
                console.log(`Computer: ${computerGuess} || User: ${userGuess}\nComputer wins.`);
                addScore('computer');
    } else {
        whoWonH3.innerText = 'Player scored!'
        console.log(`Computer: ${computerGuess} || User: ${userGuess}\n You win.`)
        addScore('player');
    }

    userGuessH1.innerText = `Player's Choice: ${userGuess}`
    computerGuessH1.innerText = `Computer's Choice: ${computerGuess}`
    
    gameText.appendChild(userGuessH1);
    gameText.appendChild(computerGuessH1);
    gameText.appendChild(whoWonH3);

    checkIfWinner();
   
}

function checkIfWinner(){
    if(playerTotal === 5) {
        endGame('Player')
    } else if (computerTotal === 5){
        endGame('Computer')
    }
}

function addScore(whoWon){
    if(whoWon === 'player') {
        playerTotal++;
    } else if (whoWon === 'computer') {
        computerTotal++;
    }

    displayScore();
}

function displayScore(){
    computerScoreValue.innerText = computerTotal;
    userScoreValue.innerText = playerTotal;

    computerScore.appendChild(computerScoreValue);
    userScore.appendChild(userScoreValue);
    
}

function endGame(winner) {
    gameText.innerHTML = '';
    displayScore();
    

    buttons.forEach(button => button.disabled = true);

    const endGameH1 = document.createElement('h1');
    const resetButton = document.createElement('button');

    endGameH1.innerText = `${winner} Wins`;

    resetButton.classList.add('reset-button');
    resetButton.innerText = 'Restart'

    resetButton.addEventListener('click', initializeGame, false)

    gameText.appendChild(endGameH1);
    gameText.appendChild(resetButton);
}


initializeGame()








// function game(){
//     let computerScore = 0;
//     let userScore = 0;

//     for(let rounds = 0; rounds < 5; rounds++){
//         const scored = round();
        
//         if(scored === 'player'){
//             userScore++;
//         } else if (scored == 'computer') {
//             computerScore++;
//         } else {
//             continue;
//         }
//     }

//     console.log(`Final Computer: ${computerScore} || Final User: ${userScore}`)

//     if(userScore > computerScore) {
//         console.log('You win the game');
//     } else if (computerScore > userScore) {
//         console.log('Computer wins the game.');
//     } else {
//         console.log('Game tied.');
//     }


// }

// game()


// const buttons = document.querySelectorAll('button');
// const computer = document.querySelector('.computerScore');
// let total = 0;

// function round(e){
//     total++;
//     computer.innerHTML = `<p>${total}</p>`
// }





// buttons.forEach(button => button.addEventListener('click', round))