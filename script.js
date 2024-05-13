/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  // ========================================================
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
// age value is 21



console.log('Exercise 2 Result:', isAdult(21));

const isAdult = (age) => {
  if age >= 18 {
    return 'adult';
    else age < 18 {
      return 'minor';
    }
  }
}
  //================================================================
  /*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
// char value is 'a'

console.log('Exercise 3 Result:', isCharAVowel("a"));
const isCharAVowel = (char) => {
  if (char === 'a')|| (char === 'e' ) || (char === 'i' ) || (char === 'o' ) || (char === 'u' )}
return true;
else {
  return false;
}
//================================================================
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// name value is 'johnsmith'

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

let generateEmail = (name, domain) => {
  return name + '@' + domain;
}
//================================================================
/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
// name value is 'sam'
const greetuser = (name, timeofday) => {
  return 'good' + timeofday + ',' + name + '!';
  console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
}
//================================================================
/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

// string value is 'rockstar'
console.log('Exercise 6 Result:', reverseString("rockstar"));
//for rockstar split to ratskcor using split and reverse
let reverseString = (str) => {
  return str.split('').reverse ().join('');
}
//================================================================
/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/
// string value is 'radar'
const checkPalindrome = (str) => {
  return str === str.split('').reverse().join('')
}



console.log('Exercise 7 Result:', checkPalindrome("radar"));
//================================================================
/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));
// with 5, 10, 8 the largest number is 10
const maxofThree = (x, y, z) => {
  if (x >= y && x >= z) 
  return x;
else if (y >= x && y >= z)
}
//================================================================
/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
// when bill amount is 50 and tip percentage is 20
 let calculateTip = (bill, tip) => {
    return bill * tip / 100;
 }
console.log('Exercise 9 Result:', calculateTip(50, 20));
}
//================================================================
/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
// with temperature 32 and dealing with celsius temperature
console.log('Exercise 10 Result:', convertTemperature(32, "C"));
let convertTemperature = (temp , scale ) => { 
  if (scale === 'c) 
    return temp * 9/5 + 32;
  else { 
    return (temp - 32) * 5/9;
  }
}
//================================================================
/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
// working with 10, 5 and subtract operation 

let basicCalculator = (x, y, operation) => {
  if (operation === 'add') {
    return x + y;

  } else if (operation === 'subtract') {
    return x - y;
  }
  }
}console.log('Exercise 11 Result:', basicCalculator(10, 5, "subtract"));
//================================================================
/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
// Dealing with score 85.....
console.log('Exercise 12 Result:', calculateGrade(85));

let calculateGrade = (score) => {
  if (score >= 90) { 
    return 'A';
    else if (score >= 80) {
      return 'B';
      else if (score >= 70) {
        return 'c';
      } else if (score >= 60)
  } return 'D';
    else { 
      return 'F';
    }
  }
  //================================================================
  /*
Exercise 13: createUsername()

Define a function called createUsername. It should take a first name and a last name and return a username. The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/
// for Samantha as first name and Green as last name
let createUsername = (firstname, lastname) => { 
  return firstname.slice(1/3) + lastname.slice(1/3) + (firstname.lenght + lastname.lenght);
console.log('Exercise 13 Result:', createUsername("Samantha", "Green"));
}
//================================================================
/*
Exercise 14: numArgs()

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/  (need help with this one)...
console.log('Exercise 14 Result:', numArgs(1, 2, 3, 4));
git add -A 
git commit -m 
git push origin main




