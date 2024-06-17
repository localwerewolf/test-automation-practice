//Creating the variables we need
let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false
let runnerAge = 18
//checking runner age and registration time to assign a number
runnerAge > 18 && registerEarly ? raceNumber += 1000 : raceNumber
//console.log(raceNumber)
//evaluating which start time the individual racer will have
if (registerEarly && runnerAge > 18){
console.log(`Your race number is ${raceNumber}. Your start time is 9:30am.`)
} else if(runnerAge > 18 && !registerEarly){
  console.log(`Your race number is ${raceNumber}. Your start time is 11:00am`)
} else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber}. Your start time is 12:30pm.`)
} else if (runnerAge = 18){
  console.log("Please see the registration desk to have your number assigned.")
}


