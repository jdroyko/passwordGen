/*
Homework questions: 
-- where do I put in the loop to get the functions to keep running until it reaches the amount of characters required? 
-- 
*/

/*Ask for lenght required of the password

Criteria:
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters 

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
*/

//When the button is pressed
function initPrompt() {
  let passwordLength = prompt("Please password character length between 8 and 128.");
}
var upperCase = confirm("Do you want Uppercase?")

var lowerCase = confirm("Do you want Uppercase?")


//Boolean for the rest of the requirements
// var wantsLower = prompt("Include Lower case? Y or N.");

// if ("Y") {
//   //Random Lowercase Letters
//   //Browser Character set 97-122
//   function getRandLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   }
// } if (wantsLower !== "Y" || "N") {
//   prompt("Error. Include Lower case? Y or N.");

// }


// Assignment Code
// var generateBtn = document.querySelector("#generate");

//Create objects for the functions below
const randFunc = {
  lower: getRandLower,
  upper: getRandUpper,
  number: getRandNumber,
  symbol: getRandSymbols
};


// For the Random code generator please see Browser Charcter Set

//Random Lowercase Letters
//Browser Character set 97-122
function getRandLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Random Uppercase Letters
//Browser Character set 65-90
function getRandUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Random Numbers 
//Browser Character set 48-57
function getRandNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Random Strings 
//Browser Character set 48-57
function getRandSymbols() {
  const symbols = '!@#$%^&*(){}[]=/.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandSymbols())


//Codes below here were given
// // Write password to the #password input
function writePassword() {
  var password = generatePassword(lower, upper, number, symbol);
  var passwordText = document.querySelector("#password");

  //   passwordText.value = password;

  // }

  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

