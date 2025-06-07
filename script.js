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
    return decision;
}

function humanChoice() {
    let choice = prompt("Please pick between rock, paper and or scissors:")
    return choice;
}

function playRound(humanChoice, getComputerChoice) {

}

console.log(getComputerChoice());
console.log(humanChoice());