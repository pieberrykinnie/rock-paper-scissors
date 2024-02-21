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

    switch (selection.toLowerCase()) {
        case ROCK.toLowerCase():
            result = ROCK_CODE;
            break;
        
        case SCISSORS.toLowerCase():
            result = SCISSORS_CODE;
            break;
        
        case PAPER.toLowerCase():
            result = PAPER_CODE;
            break;
        
        default:
            result = INVALID;
            break;
    }

    return result;
}