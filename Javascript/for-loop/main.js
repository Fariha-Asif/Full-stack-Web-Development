// Write a C program to print multiplication table of any number.

let num = 5;

for(let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


// Write a C program to count number of digits in a number.

let number = 12345;
let count = 0;

for (let i = number; i > 0; i = Math.floor(i / 10)) {
    count++;
}

console.log(`Number of digits in ${number} is ${count}`);

// Write a C program to find first and last digit of a number.

let num2 = 12345;
let firstDigit;
let lastDigit = num2 % 10;

for(firstDigit = num2; firstDigit >= 10; firstDigit = Math.floor(firstDigit / 10));

console.log(`First digit of ${num2} is ${firstDigit}`);
console.log(`Last digit of ${num2} is ${lastDigit}`);

// Write a C program to find sum of first and last digit of a number.

let num3 = 12345;
let firstDigit3;
let lastDigit3 = num3 % 10;

for(firstDigit3 = num3; firstDigit3 >= 10; firstDigit3 = Math.floor(firstDigit3 / 10));
let sum = firstDigit3 + lastDigit3;

console.log(`Sum of first and last digit of ${num3} is ${sum}`);

// Write a C program to swap first and last digits of a number.

let num4 = 12345;
let temp = num4;
let digits = 0;
let firstDigit4;
let lastDigit4 = num % 10;

// Count digits and get first digit
for (firstDigit4 = temp; firstDigit4 >= 10; firstDigit4 = Math.floor(firstDigit4 / 10)) {
    digits++;
}

let pow10 = Math.pow(10, digits);
let middlePart = Math.floor((num4 % pow10) / 10);

// Reconstruct swapped number
let swapped = lastDigit4 * pow10 + middlePart * 10 + firstDigit4;

console.log("Original number:", num);
console.log("After swapping first and last digit:", swapped);

