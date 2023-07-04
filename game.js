function getComputerChoice(){
    const options = ['ROCK', 'PAPER', 'SCISSORS']

    return options[Math.floor(options.length * Math.random())];
}

function round(){
    const userGuess = prompt().toUpperCase();
    const computerGuess = getComputerChoice();

    if(computerGuess === userGuess) {
        console.log(`Computer: ${computerGuess} || User: ${userGuess}\nTIE!!`)
        return 'tie';
    } else if (computerGuess === 'ROCK' && userGuess === 'SCISSORS' ||
            computerGuess === 'PAPER' && userGuess === 'ROCK' ||
            computerGuess === 'SCISSORS' && userGuess === 'PAPER') {
                console.log(`Computer: ${computerGuess} || User: ${userGuess}\nComputer wins.`);
                return 'computer';
    } else {
        console.log(`Computer: ${computerGuess} || User: ${userGuess}\n You win.`)
        return 'player';
    }
}

function game(){
    let computerScore = 0;
    let userScore = 0;

    for(let rounds = 0; rounds < 5; rounds++){
        const scored = round();
        
        if(scored === 'player'){
            userScore++;
        } else if (scored == 'computer') {
            computerScore++;
        } else {
            continue;
        }
    }

    console.log(`Final Computer: ${computerScore} || Final User: ${userScore}`)

    if(userScore > computerScore) {
        console.log('You win the game');
    } else if (computerScore > userScore) {
        console.log('Computer wins the game.');
    } else {
        console.log('Game tied.');
    }


}

game()