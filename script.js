let computerSelection; 

function getComputerSelection() {
    let getComputerSelection = Math.floor(Math.random() * 3);
    computerSelection = (getComputerSelection === 0) ? "rock" : 
        (getComputerSelection === 1) ? "paper" : 
        "scissors";
    return computerSelection;
}

let computerScore = 0;
let playerScore = 0;

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

function playRound(playerSelection, computerSelection) { 
    computerSelection = getComputerSelection();
    const div = document.querySelector("#choices");
    console.log("p:" + playerSelection + " c:" + computerSelection);
    const results = document.querySelector("#results");
    results.textContent = "Player chose: " + playerSelection + " | Computer chose: " + computerSelection;

    const roundWinner = document.querySelector("#roundWinner");
    if (playerSelection === computerSelection) {
        roundWinner.textContent = "It's a tie!";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        roundWinner.textContent = "You win! Rock beats scissors.";
        playerScore++;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        roundWinner.textContent = "You win! Paper beats rock.";
        playerScore++;
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        roundWinner.textContent = "You win! Scissors beats paper.";
        playerScore++;
    } else {
        roundWinner.textContent = "You lose!";
        computerScore++;
    }
   
    const yourScore = document.querySelector("#yours");
    const yours = document.createElement("p");
    yours.style.color = "black";
    yours.textContent = playerScore;
    yours.style.backgroundColor = "lightgray";
    yourScore.appendChild(yours);

    const itsScore = document.querySelector("#its");
    const its = document.createElement("p");
    its.style.color = "black";
    its.textContent = computerScore;
    its.style.backgroundColor = "lightgray";
    itsScore.appendChild(its);

    // --- this is cut now that a new click will force the page to reload ---
    // const container = document.querySelector("#container");
    // const end = document.createElement("p");
    // end.textContent = "Click refresh to play a new round.";
    if (playerScore == 5) {
        yours.textContent = "You win!";
        its.textContent = "Computer loses";
        //container.appendChild(end);
    } else if (computerScore == 5) {
        yours.textContent = "Sorry, you lose :("
        its.textContent = "Computer wins!";
        //container.appendChild(end);
    }
    if (playerScore >= 5 || computerScore >= 5) {
        choices.onclick = (event) => {
        location.reload();
        }
    }
}