let userName = 'Rae'
//this is where the user can enter a name
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!')
//ternary operator to display the user's name in a greeting if we have it
let userQuestion = 'Will I get a puppy soon?'
  console.log(userQuestion)
//recording the question in the console
let randomNumber = Math.floor(Math.random() * 8)
//generating a number from 0 to 7
let eightBall = ''
//creating a variable to contain the answer
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook is good'
    break;
  case 7:
    eightBall = 'If you have the will to see it done'
    break;
}
//using a switch statement to assign a statement based on the generated number
console.log(`The mystical magical eight ball says... ${eightBall}`)
