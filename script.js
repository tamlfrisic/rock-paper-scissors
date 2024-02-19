function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    let computerSelection = (getComputerChoice === 0) ? "rock" : 
        (getComputerChoice === 1) ? "paper" : 
        "scissors";
    //check to make sure all 3 choices are being selected sometimes
    // console.log("Computer chose: " + computerSelection);
    return computerSelection;
}

let computerSelection = getComputerChoice(); 
console.log("Computer chose: " +computerSelection);

function getPlayerSelection() {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
// tried to make it ask the user again if there was a typo. it did, but it didn't save the new response
    // into the playerSelection variable and I don't know why
    // if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
    //     alert("Looks like you had a typo. Please try again!");
    //     getPlayerSelection();
    // } else {
        return playerSelection;
    // }
}
let playerSelection = getPlayerSelection();
console.log("Player chose: " + getPlayerSelection());

function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === computerSelection) {
        console.log("comp picked: " + computerSelection + "and u picked: " + playerSelection);
        console.log("It's a tie!");
    } else if ((playerSelection === "rock") && (computerSelection == "scissors")) {
        console.log("You win! Rock beats scissors.");
    } else if ((playerSelection === "paper") && (computerSelection == "rock")) {
        console.log("You win! Paper beats rock.");
    } else if ((playerSelection === "scissors") && (computerSelection == "paper")) {
        console.log("You win! Scissors beats paper.");
    } else {
        console.log("You lose!");
    }
}

playRound();
