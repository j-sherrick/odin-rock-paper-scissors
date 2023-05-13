/**
 * Randomly picks rock, paper, or scissors for the computer player
 * 
 * @returns {String} random choice of "ROCK", "PAPER", or "SCISSORS"
*/
function getComputerChoice()
{
    const items = ['ROCK', 'PAPER', 'SCISSORS'];
    let i = Math.floor(Math.random() * 3);
    console.log(`random pick was ${i}`);
    return items[i];
}

// Just a quick test function
function computerChoiceTest(numTests)
{
    let computerPick;
    for(let i = 0; i < numTests; i++)
    {
        computerPick = getComputerChoice();
        console.log("Computer picked: " + computerPick);
    }
    console.log(numTests + " tests concluded.");
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
    else
        result = -2; // ERROR CONDITION! WTF INPUT DID WE JUST RECEIVE???

    return result;
}


/**
 * Prints the outcome of a round to the console.
 * 
 * @param {Number} winner - a number representing the outcome of the round
 */
function printWinner(winner, playerChoice, computerChoice)
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
            break;
        default:
            console.log("Who wins? Nobody knows!");
    }
}

function playRound()
{
    // TODO: check player choice for bad input
    const playerChoice = prompt("Select rock, paper, or scissors:").toUpperCase();
    const computerChoice = getComputerChoice();
    const winner = checkWinner(playerChoice, computerChoice);
    printWinner(winner, playerChoice, computerChoice);
    return winner;
}

function game()
{
    let win = 0, loss = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        result = playRound();
        if (result === -1) ++loss;
        if (result === 1) ++win;
        if (win === 3 || loss === 3)
            break;
    }
    if (win > loss)
        console.log("You win the game!");
    else if (loss > win)
        console.log("Womp womp you lose!");
    else if (loss === win)
        console.log("Tis but a tie!");
}