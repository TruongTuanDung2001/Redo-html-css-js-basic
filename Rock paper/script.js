const buttonsEl = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let userScore = Number(userScoreEl.innerText);
let computerScore = Number(userScoreEl.innerText);


buttonsEl.forEach(btn => {
    btn.addEventListener("click", () => {
        const result = playRound(btn.id, computerPlay());

        resultEl.innerText = result;
        
    });
});

//
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

//
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie !";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        userScore++;
        userScoreEl.innerText = userScore;
        return "You win ! " + playerSelection + " beats " + computerSelection; 
    }
    else{
        computerScore++;
        computerScoreEl.innerText = computerScore;
        return "You lose ! " + computerSelection + " beats " + playerSelection;
    }
}