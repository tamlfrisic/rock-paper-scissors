function getComputerSelection() {
    let getComputerSelection = Math.floor(Math.random() * 3);
    let computerSelection = (getComputerSelection === 0) ? "rock" : 
        (getComputerSelection === 1) ? "paper" : 
        "scissors";
    return computerSelection;
}

let computerSelection; 
let computerScore = 0;

// // function getPlayerSelection() {
//     // if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
//     //     alert("Looks like you had a typo. Please try again!");
//     //     getPlayerSelection();
//     // } else {
//         return playerSelection;

let playerSelection;
let playerScore = 0;

const choices = document.querySelector('#choices');
choices.addEventListener("click", (event) => {
    let choice = event.target;

    switch(choice.id) {
        case "rock": 
            playerSelection = "rock";
            // console.log(playerSelection);
            break;
            // return playerSelection;
        case "paper":
            playerSelection = "paper";
            // console.log(playerSelection);
            break;
        case "scissors":
            playerSelection = "scissors";
            // console.log(playerSelection);
            break;
    }
    playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const div = document.querySelector("#choices");
    const results = document.createElement("div");
    results.style.border = "solid rgb(179, 250, 199) 2px";
    results.style.marginTop = "10px";
    results.style.borderRadius = "6px"
    
    div.appendChild(results);
    
    const playerChoice = document.createElement("p");
    playerChoice.textContent = "Player chose: " + playerSelection; 
    results.appendChild(playerChoice);
    
    const compChoice = document.createElement("p");
    computerSelection = getComputerSelection(); 
    compChoice.textContent = "Computer chose: " + computerSelection;
    results.appendChild(compChoice);

    
    const winner = document.createElement("p");
    // trying to remove the previous added "p" node's textcontent
    // if (choices !== "") {
    //     choices.removeChild(results);
    // }
    if (playerSelection === computerSelection) {
        winner.textContent = "It's a tie!";
        choices.appendChild(winner);
    } else if ((playerSelection === "rock") && (computerSelection == "scissors")) {
        winner.textContent = "You win! Rock beats scissors.";
        choices.appendChild(winner);
        playerScore++;
    } else if ((playerSelection === "paper") && (computerSelection == "rock")) {
        winner.textContent = "You win! Paper beats rock.";
        choices.appendChild(winner);
        playerScore++;
    } else if ((playerSelection === "scissors") && (computerSelection == "paper")) {
        winner.textContent = "You win! Scissors beats paper.";
        choices.appendChild(winner);
        playerScore++;
    } else {
        winner.textContent = "You lose!";
        choices.appendChild(winner);
        computerScore++;
    }
    winner.style.border = "solid rgb(179, 250, 199) 2px";
    winner.style.color = "black";
    winner.style.backgroundColor = "rgb(179, 250, 199)";
    winner.style.borderRadius = "6px";
    winner.style.fontSize = "18px";
    winner.style.fontWeight = "700";
    winner.style.padding = "10px 0px";

    // move this to the end of this function once done
   
    const scoreBoard = document.querySelector("#score");
    const score = document.createElement("p");
    score.style.color = "black";
    score.textContent = "Your score: " + playerScore + ". Computer score: " + computerScore;
    scoreBoard.appendChild(score);


    

   // all this has to be changed!
    // if (playerSelection === computerSelection) {
    //     console.log("It's a tie!");
    // } else if ((playerSelection === "rock") && (computerSelection == "scissors")) {
    //     console.log("You win! Rock beats scissors.");
    // } else if ((playerSelection === "paper") && (computerSelection == "rock")) {
    //     console.log("You win! Paper beats rock.");
    // } else if ((playerSelection === "scissors") && (computerSelection == "paper")) {
    //     console.log("You win! Scissors beats paper.");
    // } else {
    //     console.log("You lose!");
    // }

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

// js update: 



// playRound(playerSelection, computerSelection)
