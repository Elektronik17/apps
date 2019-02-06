let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultP = document.querySelector(".result > p");

const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function main() {
    rockDiv.addEventListener('click', () => game('r'));
    paperDiv.addEventListener('click', () => game('p'));
    scissorsDiv.addEventListener('click', function() {
        game('s')
    }); //es5
};

main();

function getComputerChoice() { 
    let choices = ['r','p','s'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game (userChoice) {
    let ComputerChoice = getComputerChoice();

    switch (userChoice + ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log('user win');
            win(userChoice, ComputerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            //console.log('pc win');
            lose(userChoice, ComputerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            drawn(userChoice, ComputerChoice);
            break;
    
    }   
}

function win (userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${converter(userChoice)} beats ${converter(computerChoice)}. You Win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 500)
}

function lose (userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScore.innerHTML = userScore;
    resultP.innerHTML = `${converter(computerChoice)} beats ${converter(userChoice)}. You Lose!`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 500)
}

function drawn (userChoice, computerChoice) {
    computerScoreSpan.innerHTML = computerScore;
    userScore.innerHTML = userScore;
    resultP.innerHTML = `${converter(computerChoice)} vs ${converter(userChoice)}. Drawn!`
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('yellow-glow'), 500)
}   //es6

function converter (letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

