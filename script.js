function getComputerChoice() {
    const ROCK_CODE = 0;
    const SCISSORS_CODE = 1;
    const PAPER_CODE = 2;

    const computerChoiceCode = Math.floor(Math.random() * 3);

    let computerChoice;

    switch(computerChoiceCode) {
        case ROCK_CODE:
            computerChoice = "Rock";
            break;
        
        case SCISSORS_CODE:
            computerChoice = "Scissors";
            break;

        case PAPER_CODE:
            computerChoice = "Paper";
            break;

        default:
            break;
    }

    return computerChoice;
}