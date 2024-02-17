function getComputerChoice() {
    //make the computer randomly choose one of the 3 options
    let getComputerChoice = Math.floor(Math.random() * 3);
    //console.log(getComputerChoice);
    let computerSelection = (getComputerChoice === 0) ? "rock" : 
        (getComputerChoice === 1) ? "paper" : 
        "scissors";
    //check to make sure all 3 choices are being selected sometimes
    //alert("Computer chose: " + computerSelection);
}
//call the function to make sure it /chooses/prints correctly
//getComputerChoice();

function getPlayerSelection() {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log(playerSelection);
    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        alert("Looks like you had a typo. Please try again!");
        getPlayerSelection();
        // Documenting previous attempt which gave an error (didn't actually make the user keep going)
        // playerSelection = prompt("It looks like you had a typo. Please try again: rock, paper, or scissors?");
        // alert("You chose: " + playerSelection);

        // return playerSelection;
    } else {
        alert("You chose: " + playerSelection);
        // return playerSelection;
        
    }
    console.log(playerSelection);
}


// function playGame(playerSelection, computerSelection) {
//     let playerSelection = parseInt.prompt("Rock, paper, or scissors?");
//     playerSelection = ()

// }