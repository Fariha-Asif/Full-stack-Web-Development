// Write a C program to calculate product of digits of a number.

let num = 1234;
let product = 1;

do {
    product *= num % 10;                 // Multiply last digit
    num = Math.floor(num / 10);          // Remove last digit
} while (num !== 0);

console.log("Product of digits:", product);


// Write a C program to calculate sum of digits of a number.

let num1 = 12345;
let sum = 0;

do {
    sum += num1 % 10;                    // Add the last digit
    num1 = Math.floor(num1 / 10);         // Remove the last digit
} while (num1 !== 0);

console.log("Sum of digits:", sum);


// Write a C program to enter a number and print its reverse.


let num3 = 12345;
let reverse = 0;

do {
    reverse = reverse * 10 + (num3 % 10);        // Add last digit to reverse
    num3 = Math.floor(num3 / 10);                // Remove last digit
} while (num3 !== 0);

console.log("Reversed number:", reverse);


// Write a C program to check whether a number is palindrome or not.

let num4 = 121;
let original = num4;
let reversed = 0;

do {
    reversed = reversed * 10 + (num4 % 10);
    num4 = Math.floor(num4 / 10);
} while (num4 !== 0);

if (original === reversed) {
    console.log("The number is a palindrome.");
} else {
    console.log("The number is not a palindrome.");
}


// Write a C program to find frequency of each digit in a given integer.

let number = 112358112;
let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10 slots for digits 0–9

do {
    let digit = number % 10;  // Get the last digit
    freq[digit]++;  // Increase count for that digit
    number = Math.floor(number / 10); // Remove the last digit
} while (number !== 0);

// Show the result
for (let i = 0; i < 10; i++) {
    if (freq[i] > 0) {
        console.log("Digit " + i + " appears " + freq[i] + " times");
    }
}


