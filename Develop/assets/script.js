//Step 1: When on click, should prompt how many characters, should it have numbers etc.

var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
// **howcome the password is variable here but when try to do it with var promptit doesn't work as variable
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var setLength = prompt("Please enter the amount of characters required between 8 and 128. ");
  if (setLength < 8 || setLength > 128) {
    prompt("Error. Please enter the amount of characters required between 8 and 128. ");
  }
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want numbers?");
  var symbols = confirm("Do you want symbols?");

  //Step 2: Take the information given and store that information given above to make a password
  //Create objects for the functions below
  var randFunc = {
    lower: getRandLower,
    upper: getRandUpper,
    number: getRandNumber,
    symbol: getRandSymbols
  };

  //**this loop doesn't work, but everything inside the loop works
  for (i = 0; i<setLength +1;i++){

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
  }


  //testing to see if the randomizer code works -- it does
  console.log(getRandUpper(), getRandLower(), getRandSymbols(), getRandNumber())



  //Step 3: Display the value in the "password" text-area
  return "placeholder";
}

//Stubbing out the function, write return at the end of the function 



// END STARTER PROVIDED CODE





