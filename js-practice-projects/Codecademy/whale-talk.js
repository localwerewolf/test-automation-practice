let input = "Turpentine and Turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  if (input === "e") {
    resultArray.push(input[inputIndex]);
  }
  if (input === "u") {
    resultArray.push(input[inputIndex]);
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log(vowelIndex)
    if (input[inputIndex] === vowels[vowelIndex]) {
      //console.log(input[inputIndex])
      resultArray.push(input[inputIndex]);
      //console.log(resultArray)
    }
  }
}
const resultString = resultArray.join("").toUpperCase();
console.log(resultArray);
console.log(resultString);