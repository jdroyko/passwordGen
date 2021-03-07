# Password Generator

# Usage
This homework was desigend to be used a Password Generator. The user can input their character requirements and the generator will output a random set of characters. This capability will be showcased once the button "Generate Password" is clicked. 

![Screenshot] (./images/Screenshot.PNG)

### Provided Requirements
The sections 'User Story' and 'Acceptance Criteria' are derived from the README.md presented on the homework. 

#### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

#### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt

//This part is where I need help//
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
# Process

## Using Character Set

I used the character set from the link: https://www.w3schools.com/html/html_charset.asp to produce the random set of characters, upper and lower alphabet through the Math.Random command. 

The Math.Random command assigned a number from 0-1 then manipulated that number to represent the range of characters, as required. Below is an excerpt code from the javascript that represents the explanation provided. 

```
  if (upperCase === true) {
    //Random Uppercase Letters
    //Browser Character set 65-90
    function getRandUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
  }
```
The symbols function does not use this because the character range in the Character Set is not consistent, and a cleaner code could be derived from listing the symbols as an array.

## Error feature

Should the user not enter a valid number to set the character set, an error will prompt them to re-enter another number within the acceptable paramenters. 

![setLenght Error] ("./image/setLengthError.PNG")


# Utilized Sources:

https://www.youtube.com/watch?v=duNmhKgtcsI

https://www.youtube.com/watch?v=iKo9pDKKHnc

https://dev.to/olawanle_joel/password-generator-with-javascript-57c

https://www.youtube.com/watch?v=9sT03jEwcaw

https://www.youtube.com/watch?v=MW1wz-PAOaE

Generate characters to symbols, numbers, letters: 
97-122 
Represent letters of the alphabet and utilize Math.random

Study Group: Joey Kouneski, Eric Cole, Ryan Scherr, Reginald Mace, Caitlin Bopp, Jashawn Stewart
