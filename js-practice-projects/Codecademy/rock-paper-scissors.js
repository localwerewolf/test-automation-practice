//console.log('hi');
let userInput = "";
//function to obtain and sanitize the user input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //if/else statement to determine if the input is valid or report an error if it is not
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Please input Rock, Paper, or Scissors");
  }
};
//function to determine the computers choice in the game
let computerInput = 0;
const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3);
  switch (computerInput) {
    case 0:
      console.log("paper");
      return "paper";
      break;
    case 1:
      console.log("rock");
      return "rock";
      break;
    case 2:
      console.log("scissors");
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "User wins!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "User wins!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "User wins!";
  } else if (userChoice === "bomb") {
    return "Game exploded! You win!";
  } else {
    return "Computer wins!";
  }
};
//console.log(determineWinner(userChoice, computerChoice));

const playGame = () => {
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  let userChoice = getUserChoice("bomb");
  console.log(userChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
