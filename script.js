//computer gets 3 strings: rock, paper, scissor
    //computer has to randomly pick 1
//function returns picked string
let playerScore = 0;
let computerScore = 0;
let winner = document.createElement("div");

const container = document.querySelector("#container");

let rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound("rock"));

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound("paper"));

let scissor = document.querySelector(".scissor");
scissor.addEventListener("click", () => playRound("scissor"));

function getComputerChoice() {
    let choice = Math.random();
    let decision;

    if (choice < 0.4) {
        decision = "rock";
    } else if (choice < 0.7) {
        decision = "paper";
    } else {
        decision = "scissor";
    }
    return decision;
}

//function gets output from player and computer
//compares the two to find a winner
//increments thier score 

function playRound(choice) {
    let compChoice = getComputerChoice();
    

    if (choice === compChoice) {
        console.log("draw");
    } else if ((choice ==="rock" && compChoice ==="scissor") || (choice==="scissor" && compChoice ==="paper") || ((choice==="paper" && compChoice==="rock"))) {
        console.log("win");
        playerScore++;
    } else if ((choice==="rock" && compChoice === "paper") || (choice==="paper" && compChoice==="scissor") || ((choice==="scissor" && compChoice==="rock"))) {
        console.log("lose");
        computerScore++;
    }

    playerResult.textContent = `Your score is: ${playerScore}`;

    computerResult.textContent = `Computer score is: ${computerScore}`;

    if (playerScore === 5) {
        winner.textContent = `You are the winner`;
    } else if (computerScore=== 5) {
        winner.textContent = "You lose";
    }
}

const result = document.querySelector("#result");

let playerResult = document.createElement("div");
playerResult.textContent = `Your score is: ${playerScore}`;

let computerResult = document.createElement("div");
computerResult.textContent = `Computer score is: ${computerScore}`;

result.appendChild(playerResult);
result.appendChild(computerResult);
result.appendChild(winner);