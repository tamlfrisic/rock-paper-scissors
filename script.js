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
    // playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log("Player chose: " + playerSelection);
    computerSelection = getComputerSelection(); 
    console.log("Computer chose: " + computerSelection);
   
   // all this has to be changed!
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

    // removing console.logs ... reworking to changing textContents or nodes / appendages
}

// function playGame() {
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
// }

// playGame();

// not sure about this ... 
// const rockBtn = document.querySelector("rock")

const choices = document.querySelector('#choices');

choices.addEventListener("click", (event) => {
    let choice = event.target;

    switch(choice.id) {
        case "rock": 
            playerSelection = "rock";
            break;
        case "paper":
            playerSelection = "paper";
            break;
        case "scissors":
            playerSelection = "scissors";
            break;
    }
    playRound(playerSelection, computerSelection);
});



// playRound(playerSelection, computerSelection)
