let getComputerChoice = () => {
    
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return ("rock");
        case 1:
            return ("paper");
        case 2:
            return ("scissors");
    }
}

let getHumanChoice = () => {
    const humanChoice = Number(prompt("Type:\n    1 for 'rock'\n    2 for 'paper'\n    3 for 'scissors'"));

    if (humanChoice === 1) {
        return ("rock");
    } else if (humanChoice === 2) {
        return ("paper");
    } else if (humanChoice === 3) {
        return ("scissors");
    } else {
        console.log("Please, try a valid number (1, 2 or 3)");
        getHumanChoice();
    }
}

let playRound = () => {
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    // console.log("I am the computer's choice", computerChoice);
    

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        return 1;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock!");
        return 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper!");
        return 1;
    } if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        return 2;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper!");
        return 2;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors!");
        return 2;
    } else {
        console.log("It's a draw!");
        return 0;
    }

}

let playGame = (rounds) => {

    let humanScore = 0;
    let computerScore = 0;

    for (rounds; rounds > 0; rounds--) {
        result = playRound();

        if (result === 1) {
            humanScore++;
        } else if (result === 2) {
            computerScore++;
        }
    }

    if (humanScore < computerScore) {
        console.log("The Computer Won! -> ", computerScore, " / ", humanScore);
        return 1;
    } else if (humanScore > computerScore) {
        console.log("You Won! -> ", humanScore, " / ", computerScore);
        return 1;
    } else {
        console.log("It Was a Draw! -> ", humanScore, " / ", computerScore)
        return 0;
    }
}