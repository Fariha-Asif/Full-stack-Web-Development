// Write a C program to find maximum between two numbers using conditional operator.

let num1 = 20;
let num2 = 25;

let max = num1 > num2 ? num1 : num2;

console.log(`The maximum number between ${num1} and ${num2} is ${max}`);

// Write a C program to find maximum between three numbers using conditional operator.

let num3 = 40;

let max3 = ((num1 > num2) ? num1 : num2) > num3 ? ((num1 > num2) ? num1 : num2) : num3;
console.log(`The maximum number between ${num1}, ${num2}, and ${num3} is ${max3}`);

// Write a C program to check whether a number is even or odd using conditional operator.

let number = 15;

let isEven = (number % 2 === 0) ? "Even" : "Odd";

console.log(`The number ${number} is ${isEven}`);

// Write a C program to check whether year is leap year or not using conditional operator.

let year = 2025;

let isLeapYear = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? "Leap Year" : "not Leap Year"

console.log(`The year ${year} is ${isLeapYear}`);

// Write a C program to check whether character is an alphabet or not using conditional operator.

let alphabet = "f";

let isAlphabet = ((alphabet >= "a") || (alphabet <= "z") && (alphabet >= "A") || (alphabet <= "Z")) ? "is Alphabet" : "is not AAlphabet"

console.log(`The character ${alphabet} ${isAlphabet}`);	


