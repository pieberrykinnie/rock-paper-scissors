const ROCK_CODE = 0;
const SCISSORS_CODE = 1;
const PAPER_CODE = 2;

const ROCK = "Rock";
const SCISSORS = "Scissors";
const PAPER = "Paper";

const INVALID = -1;

function getComputerChoice() {
    const computerChoiceCode = Math.floor(Math.random() * 3);

    let computerChoice;

    switch(computerChoiceCode) {
        case ROCK_CODE:
            computerChoice = ROCK;
            break;
        
        case SCISSORS_CODE:
            computerChoice = SCISSORS;
            break;

        case PAPER_CODE:
            computerChoice = PAPER;
            break;

        default:
            break;
    }

    return computerChoice;
}

function getCode(selection) {
    let result;

    switch (selection) {
        case ROCK:
            result = ROCK_CODE;
            break;
        
        case SCISSORS:
            result = SCISSORS_CODE;
            break;
        
        case PAPER:
            result = PAPER_CODE;
            break;
        
        default:
            result = INVALID;
            break;
    }

    return result;
}

function playRound(playerSelection, computerSelection) {
    let result;

    playerSelection = playerSelection.length > 2 ? 
        playerSelection.at(0).toUpperCase() + playerSelection.slice(1).toLowerCase() :
        INVALID;

    const playerSelectionCode = getCode(playerSelection);
    const computerSelectionCode = getCode(computerSelection);

    const comparisonCode = playerSelectionCode - computerSelectionCode;

    /*
        rock = 0
        scissors = 1
        paper = 2

        rock - rock = 0 => draw
        rock - scissors = -1 => win
        rock - paper = -2 => lose
        scissors - rock = 1 => lose
        scissors - scissors = 0 => draw
        scissors - paper = -1 => win
        paper - rock = 2 => win
        paper - scissors = 1 => lose
        paper - paper = 0 => draw
    */
    
    if (playerSelectionCode === INVALID) {
        result = "Invalid selection";
    } else if (comparisonCode === 0) {
        result = `You Draw! ${playerSelection} is the same as ${computerSelection}`;
    } else if (comparisonCode === -1 || comparisonCode === 2) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}