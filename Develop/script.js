//Step 1: When on click, should prompt how many characters, should it have numbers etc.

function initPrompt() {
  var setLength = prompt("Please enter the amount of characters required between 8 and 128. "); // WHy won't the 'set length' here become a variable?
}
// //*****All this code is happening at refresh before button press*****
var upperCase = confirm("Do you want uppercase letters?");
var lowerCase = confirm("Do you want lowercase letters?");
var numbers = confirm("Do you want numbers?");
var symbols = confirm("Do you want symbols?");

var setLength = 12
//*****This is a made up number to test the setLength and will be deleted when the code works*****

if (setLength < 8 || setLength > 128) {
  prompt("Error.Please enter the amount of characters required between 8 and 128. ");
}




//Step 2: Take the information given and store that information given above to make a password

if (upperCase === true) {
  //Random Uppercase Letters
  //Browser Character set 65-90
  function getRandUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
}

if (lowerCase === true) {
  //Random Lowercase Letters
  //Browser Character set 97-122
  function getRandLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
}

if (numbers === true) {
  //Random Numbers 
  //Browser Character set 48-57
  function getRandNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
}

if (symbols === true) {
  //Random Symbols 
  //Browser Character set 48-57
  function getRandSymbols() {
    const symbols = '!@#$%^&*(){}[]=/.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

//testing to see if the randomizer code works -- it does
console.log(getRandUpper(), getRandLower(), getRandSymbols(), getRandNumber())

//loop? the number of times until the character reaches the amount that they wanted?

//Testing if this spews out the password in the text area, it does but I'm not sure what number it's spewing out....
document.getElementById('password').value = (getRandUpper(), getRandLower(), getRandSymbols(), getRandNumber())
  ;

//Step 3:




// //Original Assigned code below// Assignment Code

/*I think this code is supposed to call the button when it's clicked to play the function? */
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
