
/* function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return  pick[Math.floor(Math.random() * pick.length)];
}
// prompt initialize for user input
const prompt=require("prompt-sync")({sigint:true});
const playerSelection = prompt("Start the game by picking among Rock, Paper or Scissors! ").toLowerCase();

// document.getElementById("test").innerHTML = playerSelection;
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection){
       return 'Draw, you both picked: '+ playerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win, rock beats scissors'+ ++playerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win, paper beats rock'+ ++playerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win, scissors beats paper' + ++playerScore;
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + ++computerScore;
    }
}

function game (){

    for (i=1;i <=5; i++) {
        playRound(playerSelection,computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
}

 */

// Bro Code Tutorial



const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultTextText");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${result}`;
}));

function computerTurn() {
    const randNum = Math.floor(Math.random()*3)+1;
    switch (randNum){
        case 1:
            computer = "Rock";
            break
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner() {
    if (player == computer){
        return "Draw!";
    }
    else if (computer == "Rock") {
        return (player == "Paper") ? "You win!" : "You lose!"
    } else if (computer == "Paper") {
        return (player == "Scissors") ? "You win!" : "You lose!"
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You win!" : "You lose!"
    }

}