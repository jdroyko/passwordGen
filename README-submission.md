# Usage
This homework was desigend to be used a Password Generator. The user can input their character requirements and the generator will output a random set of characters. This capability will be showcased once the button "Generate Password" is clicked. 

![Screenshot] (./images/Screenshot.PNG)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

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
Utilized Sources:

https://www.youtube.com/watch?v=duNmhKgtcsI

https://www.youtube.com/watch?v=iKo9pDKKHnc

https://dev.to/olawanle_joel/password-generator-with-javascript-57c

https://www.youtube.com/watch?v=9sT03jEwcaw

https://www.youtube.com/watch?v=MW1wz-PAOaE

Generate characters to symbols, numbers, letters: 
97-122 https://www.w3schools.com/html/html_charset.asp
Represent letters of the alphabet and utilize Math.random

Study Group: Joey Kouneski, Eric Cole, Ryan Scherr, Reginald Mace, Caitlin Bopp, Jashawn Stewart
