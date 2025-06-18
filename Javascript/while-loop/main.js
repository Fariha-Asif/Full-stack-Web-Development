// Write a C program to print all natural numbers from 1 to n. – using while loop

let n = 10;

let num = 0;

while(num <= n) {
    console.log(num);
    num++;
}

// Write a C program to print all natural numbers in reverse (from n to 1). – using while loop

while(n <= 10 && n > 0) {
    console.log(n);
    n--;
}

// Write a C program to print all alphabets from a to z. – using while loop

let charCode = 97; // ASCII value of 'a'

while (charCode <= 122) { // ASCII value of 'z'
    console.log(String.fromCharCode(charCode));
    charCode++;
}

let charCode2 = 122; // ASCII value of 'z'

while (charCode2 >=97) {
    console.log(String.fromCharCode(charCode2));
    charCode2--;
}

// Write a C program to print all even numbers between 1 to 100. – using while loop

let num1 = 1;
while (num1 <= 100) {
    if(num1 % 2 === 0) {
        console.log(num1);
    }
    num1++;
}

// Write a C program to print all odd number between 1 to 100.

let num2 = 1;

while (num2 <= 100) {
    if(num2 % 2 !== 0) {
        console.log(num2);
    }
    num2++;
}