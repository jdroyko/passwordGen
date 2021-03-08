//Step 1: When on click, should prompt how many characters, should it have numbers etc.
/* Acceptance Criteria:
GIVEN I need a new, secure password
WHEN I click the button to generate a password*/

var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ".", ","];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]; //continue the alphabet here
var upperChars = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];//continue the alphabet here

//gets all data from user input saves and uses 

// Acceptance Criteria: THEN I am presented with a series of prompts for password criteria
/*WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters 
and no more than 128 characters
*/

function getPassOpts() {
  var setLength = parseInt(prompt("Please enter the amount of characters required between 8 and 128. "));
  if (setLength < 8 || setLength > 128) {
    alert("Error. Please enter the amount of characters required between 8 and 128. ");
    return
  }

  if (isNaN(setLength)) {
    alert("Error. Please enter a valid number between 8 and 128. ");
    return
  }
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want numbers?");
  var symbols = confirm("Do you want symbols?");


  //Step 2: Take the information given and store that information given above to make a password

  //Create objects for the functions below
  var randFunc = {
    lower: lowerCase,
    upper: upperCase,
    number: numbers,
    symbol: symbols,
    length: setLength
  };
  console.log(randFunc)
  return randFunc;
}


function randomEl(Arr) {
  var index = Math.floor(Math.random() * Arr.length);
  var random = Arr[index];
  return random;
}


function generatePassword() {
  var options = getPassOpts();
  var tempPass = [];
  var possChars = [];
  var guarChars = [];

  if (options.lower) {
    possChars = possChars.concat(lowerChars);
    guarChars.push(randomEl(lowerChars));
  }
  if (options.upper) {
    possChars = possChars.concat(upperChars);
    guarChars.push(randomEl(upperChars));
  }
  if (options.number) {
    possChars = possChars.concat(numberChars);
    guarChars.push(randomEl(numberChars));
  }
  if (options.symbol) {
    possChars = possChars.concat(specialChars);
    guarChars.push(randomEl(specialChars));
  }

  for (var i = 0; i < options.length; i++) {
    var possChar = randomEl(possChars);
    tempPass.push(possChar);
  }
  console.log(tempPass);

  //mixes up the characters more
  for (var i = 0; i < guarChars.length; i++) {
    tempPass[i] = guarChars[i];
  }
  console.log(tempPass);


  //Step 3: Display the value in the "password" text-area
  return tempPass.join("");
}






