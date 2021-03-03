//Step 1: When on click, should prompt how many characters, should it have numbers etc.
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input 
// // **howcome the password is variable here but when try to do it with var promptit doesn't work as variable
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//END STARTER PROVIDED CODE


// var setLength = prompt("Please enter the amount of characters required between 8 and 128. "); // WHy won't the 'set length' here become a variable?

function writePassword() {
  var setLength = prompt("Please enter the amount of characters required between 8 and 128. ");
}

// let setLenght = document.getElemenetID("slider").value; used if there was a slider on the homepage -- how do I translate what this is doing to the pop up?


//How to make it that everytime the button is clicked? addEventListener?
// //*****All this code is happening at refresh before button press*****
var upperCase = confirm("Do you want uppercase letters?");
var lowerCase = confirm("Do you want lowercase letters?");
var numbers = confirm("Do you want numbers?");
var symbols = confirm("Do you want symbols?");

var setLength = "8";
//*****This is a made up number to test the setLength and will be deleted when the code works*****

//****This code isn't working when setLenght doesn't have a value
if (setLength < 8 || setLength > 128) {
  prompt("Error. Please enter the amount of characters required between 8 and 128. ");
}



//Step 2: Take the information given and store that information given above to make a password
//Create objects for the functions below
var randFunc = {
  lower: getRandLower,
  upper: getRandUpper,
  number: getRandNumber,
  symbol: getRandSymbols
};

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

//***loop? the number of times until the character reaches the amount that they wanted?


//Step 3: Display the value in the "password" text-area
//****Testing if this spews out the password in the text area, reads out 'Undefined'
document.getElementById('password').value = (randFunc.lower, randFunc.upper, randFunc.number, randFunc.symbol)
  ;

