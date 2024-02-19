function getComputerSelection() {
    let getComputerSelection = Math.floor(Math.random() * 3);
    let computerSelection = (getComputerSelection === 0) ? "rock" : 
        (getComputerSelection === 1) ? "paper" : 
        "scissors";
    return computerSelection;
}

let computerSelection; 

// // function getPlayerSelection() {
//     // if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
//     //     alert("Looks like you had a typo. Please try again!");
//     //     getPlayerSelection();
//     // } else {
//         return playerSelection;

let playerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log("Player chose: " + playerSelection);
    computerSelection = getComputerSelection(); 
    console.log("Computer chose: " + computerSelection);
    if (playerSelection === computerSelection) {
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

function playGame() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

playGame();