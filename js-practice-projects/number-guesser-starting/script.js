let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10); 
}
generateTarget()
const compareGuesses = (humanGuess, computerGuess, target) => {
    let guess1 = Math.abs(humanGuess - target);
    let guess2 = Math.abs(computerGuess - target);
    if (guess1 <= target) {
        return true;
    } else if (guess2 <= target){
        return false;
    } else if (guess1 === guess2){
        return true;
    }
}
const updateScore = (human, computer) => {
    if (compareGuesses === true) {
        humanScore + 1;
    } else {
        computerScore + 1;
    }
}
const advanceRound = () => currentRoundNumber += 1
advanceRound()