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


//Possible password characters
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ".", ","];
var lowerChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperChars = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

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

  //Acceptance Criteria: THEN my input should be validated and at least one character type should be selected
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
  return randFunc;
}

/* Acceptance Criteria: WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated*/


//obtains random elements to push in the generatePassword function
function randomEl(Arr) {
  var index = Math.floor(Math.random() * Arr.length);
  var random = Arr[index];
  return random;
}

function generatePassword() {
  var options = getPassOpts();
  var tempPass = []; //temporarypassword
  var possChars = []; // possible characters
  var guarChars = []; // guaranteed characters

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

  //possible characters
  for (var i = 0; i < options.length; i++) {
    var possChar = randomEl(possChars);
    tempPass.push(possChar);
  }

  //mixes up the characters more
  for (var i = 0; i < guarChars.length; i++) {
    tempPass[i] = guarChars[i];
  }


  //Step 3: Display the value in the "password" text-area
  //THEN the password is either displayed in an alert or written to the page
  return tempPass.join("");
}






