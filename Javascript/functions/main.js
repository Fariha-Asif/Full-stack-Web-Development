// Write a C program to print all natural numbers from 1 to n. – using while loop in function

function printNaturalNumbers(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}

printNaturalNumbers(10);

// Write a C program to print all Prime numbers between 1 to n.

function printPrimeNumbers(n) {
    for (let num = 2; num <= n; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}

printPrimeNumbers(50);

// Write a C program to find sum of all prime numbers between 1 to n.

function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

printPrimes(20);

// Write a C program to print all Armstrong numbers between 1 to n.

function printArmstrongNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let temp = i;
        let digits = i.toString().length;

        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        if (sum === i) {
            console.log(i);
        }
    }
}

printArmstrongNumbers(1000);

// Write a C program to print all Perfect numbers between 1 to n.

function printPerfectNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;

        // Find divisors of i
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                sum += j;
            }
        }

        // Check if it’s a perfect number
        if (sum === i) {
            console.log(i);
        }
    }
}

printPerfectNumbers(700);

