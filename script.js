//computer gets 3 strings: rock, paper, scissor
    //computer has to randomly pick 1
//function returns picked string
let humanScore = 0;
let computerScore = 0;

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
    console.log(decision);
    return decision;
}

function humanChoice() {
    let choice = prompt("Please pick between rock, paper and or scissors:");
    return choice.toLowerCase();
}

//function gets output from player and computer
//compares the two to find a winner
//increments thier score 

function playRound(humanChoice, getComputerChoice) {
    if ((humanChoice==="rock") && (getComputerChoice==="paper")) {
        computerScore++;
        console.log("You lose!");
    } else if ((humanChoice=="paper") && (getComputerChoice==="scissor")) {
        computerScore++;
        console.log("You lose!");
    } else if ((humanChoice==="scissor") && (getComputerChoice==="rock")) {
        computerScore++;
        console.log("You lose!");
    } else if ((humanChoice==="scissor") && (getComputerChoice==="paper")) {
        humanScore++;
        console.log("You Win!");
    } else if ((humanChoice==="rock") && (getComputerChoice==="scissor")) {
        humanScore++;
        console.log("You Win!");
    } else if ((humanChoice==="paper") && (getComputerChoice==="rock")) {
        humanScore++;
        console.log("You Win!");
    } else if (humanChoice === getComputerChoice) {
        console.log("Draw");
    }
}



function playGame() {
    let humanSelection = humanChoice();
    let ComputerSelection = getComputerChoice();

    playRound(humanSelection, ComputerSelection);

    console.log(humanScore);
    console.log(computerScore);

    humanSelection = humanChoice();
    ComputerSelection = getComputerChoice();

    playRound(humanSelection, ComputerSelection);

    console.log(humanScore);
    console.log(computerScore);

    humanSelection = humanChoice();
    ComputerSelection = getComputerChoice();

    playRound(humanSelection, ComputerSelection);

    console.log(humanScore);
    console.log(computerScore);

    humanSelection = humanChoice();
    ComputerSelection = getComputerChoice();

    playRound(humanSelection, ComputerSelection);

    console.log(humanScore);
    console.log(computerScore);

    humanSelection = humanChoice();
    ComputerSelection = getComputerChoice();

    playRound(humanSelection, ComputerSelection);

    console.log(humanScore);
    console.log(computerScore);

    
}

playGame();