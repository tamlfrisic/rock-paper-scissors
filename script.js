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
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.style.border = "solid rgb(179, 250, 199) 2px";
    div.style.marginTop = "5px";
    
    body.appendChild(div);
    
    const playerChoice = document.createElement("p");
    playerChoice.textContent = "Player chose: " + playerSelection; 
    div.appendChild(playerChoice);
    
    const compChoice = document.createElement("p");
    computerSelection = getComputerSelection(); 
    compChoice.textContent = "Computer chose: " + computerSelection;
    div.appendChild(compChoice);

    
    const results = document.createElement("p");
    // trying to remove the previous added "p" node's textcontent
    // if (choices !== "") {
    //     choices.removeChild(results);
    // }
    if (playerSelection === computerSelection) {
        results.textContent = "It's a tie!";
        choices.appendChild(results);
    } else if ((playerSelection === "rock") && (computerSelection == "scissors")) {
        results.textContent = "You win! Rock beats scissors.";
        choices.appendChild(results);
    } else if ((playerSelection === "paper") && (computerSelection == "rock")) {
        results.textContent = "You win! Paper beats rock.";
        choices.appendChild(results);
    } else if ((playerSelection === "scissors") && (computerSelection == "paper")) {
        results.textContent = "You win! Scissors beats paper.";
        choices.appendChild(results);
    } else {
        results.textContent = "You lose!";
        choices.appendChild(results);
    }
    

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
