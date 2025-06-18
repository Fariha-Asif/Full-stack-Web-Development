// Write a C program to find maximum between two numbers.

let num1 = 23;
let num2 = 32;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} is greater than ${num1}`)
} else {
    console.log("Both numbers are equal")
}

// Write a C program to find maximum between three numbers.

let num3 = 34;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`)
} else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} is greater than ${num1} and ${num2}`)
} else {
    console.log("All number are equal")
}

// Write a C program to check whether a number is negative, positive or zero.

let num4 = -23;

if (num4 > 0) {
    console.log(`The ${num4} is positive number.`)
} else if (num4 < 0) {
    console.log(`The ${num4} is negative number.`)
} else {
    console.log(`The ${num4} is equal to zero.`)
}

// Write a C program to check whether a number is divisible by 5 and 11 or not.

let num5 = 43;

if (num5 % 5 === 0 && num5 % 11 === 0) {
    console.log(`The ${num5} is divisible by both 5 and 11`)
} else {
    console.log(`The ${num5} is not divisible by both numbers.`)
}

// Write a C program to check whether a number is even or odd.

if(num5 % 2 === 0) {
    console.log(`The ${num5} is an even number.`)
} else {
    console.log(`The ${num5} is an odd number.`)
}