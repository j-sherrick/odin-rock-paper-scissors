/**
 * Randomly picks rock, paper, or scissors for the computer player
 * 
 * @returns {String} random choice of "ROCK", "PAPER", or "SCISSORS"
*/
function getComputerChoice()
{
    const items = ['ROCK', 'PAPER', 'SCISSORS'];
    let i = Math.floor(Math.random() * 4);
    return items[i];
}


/**
 * Checks the winner of a round
 * 
 * @param {String} playerChoice       - the human player's selection
 * @param {String} computerChoice     - the computer's selection
 * 
 * @returns {Number}:                -1: Human player loses   :-(
 *                                    0: It's a tie!
 *                                    1: Human player wins    :-)
 */
function checkWinner(playerChoice, computerChoice)
{
    let result;
    if (playerChoice === 'ROCK')
    {
        if (computerChoice === 'ROCK')
            result = 0;
        if (computerChoice === 'PAPER')
            result = -1;
        if (computerChoice === 'SCISSORS')
            result = 1;
    }
    else if (playerChoice === 'PAPER')
    {
        if (computerChoice === 'ROCK')
            result = 1;
        if (computerChoice === 'PAPER')
            result = 0;
        if (computerChoice === 'SCISSORS')
            result = -1;
    }
    else if (playerChoice === 'SCISSORS')
    {
        if (computerChoice === 'ROCK')
            result = -1;
        if (computerChoice === 'PAPER')
            result = 1;
        if (computerChoice === 'SCISSORS')
            result = 0;
    }
}

/**
 * Prints the outcome of a round to the console.
 * 
 * @param {Number} winner - a number representing the outcome of the round
 */
function printWinner(winner)
{
    switch(winner)
    {
        case -1:
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            break;
        case 0:
            console.log("It's a tie!");
            break;
        case 1:
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    }
}

function playRound()
{
    const playerChoice = prompt("Select rock, paper, or scissors:").toUpperCase();
    const computerChoice = getComputerChoice();
    printWinner(checkWinner(playerChoice, computerChoice));
}