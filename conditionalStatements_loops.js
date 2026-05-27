// Conditional Statements & Loops

// Exercise 1: Temperature check

console.log("Exercise 1: Temperature Check");


function checkTemperatureIfElse(temperature) {
    if (temperature < 0) {
        console.log("It's freezing!");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}



// Using switch statements


function checkTemperatureSwitch(temperature) {
    switch (true) {
        case temperature < 0:
            console.log("It's freezing!");
            break;
        case temperature >= 0 && temperature <= 15:
            console.log("It's cold.");
            break;
        case temperature >= 16 && temperature <= 25:
            console.log("It's mild.");
            break;
        case temperature > 25:
            console.log("It's warm.");
            break;
        default:
            console.log("Invalid temperature");
    }
}



// Exercise 2
console.log("Exercise 2");


function checkDivisibilityIfElse(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(num + ": Divisible by both.");
    } else if (num % 2 === 0) {
        console.log(num + ": Divisible by 2.");
    } else if (num % 3 === 0) {
        console.log(num + ": Divisible by 3.");
    } else {
        console.log(num + ": Not divisible by 2 or 3.");
    }
}



console.log("Using switch statement");

function checkDivisibilitySwitch(num) {
    let remainder2 = num % 2;
    let remainder3 = num % 3;
    
    switch (true) {
        case (remainder2 === 0 && remainder3 === 0):
            console.log(num + ": Divisible by both.");
            break;
        case (remainder2 === 0):
            console.log(num + ": Divisible by 2.");
            break;
        case (remainder3 === 0):
            console.log(num + ": Divisible by 3.");
            break;
        default:
            console.log(num + ": Not divisible by 2 or 3.");
    }
}


// Exercise 3: For loops

console.log("Exercise 3: For Loops");


console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print all even numbers between 1 and 20
console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



let sum1To100 = 0;
for (let i = 1; i <= 100; i++) {
    sum1To100 += i;
}
console.log("3. Sum of numbers from 1 to 100:", sum1To100);


const numbers1 = [1, 2, 3, 4, 5];
console.log("4. Array elements:");
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}
console.log("\n");


const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i];
    }
}
console.log("5. Largest number in [3, 7, 2, 5, 10, 6]:", largestNumber);

// Exercise 4

console.log("Exercise 4");

// 1
console.log("1. Numbers from 1 to 10:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


// 2
console.log("2. Even numbers between 1 and 20:");
let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}


// 3
let sumWhile = 0;
let k = 1;
while (k <= 100) {
    sumWhile += k;
    k++;
}
console.log("3. Sum of numbers from 1 to 100:", sumWhile);


// 4
console.log("4. Multiples of 5 less than 50:");
let m = 1;
while (m < 50) {
    if (m % 5 === 0) {
        console.log(m);
    }
    m++;
}
console.log("\n");


console.log("Exercise 5");

// 1
console.log(" Numbers from 1 to 10:");
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);
console.log("\n");

// 2
let sumDoWhile = 0;
let o = 1;
do {
    sumDoWhile += o;
    o++;
} while (o <= 100);
console.log("2. Sum of numbers from 1 to 100:", sumDoWhile);


// 3
console.log("3. Number greater than 10 prompt (simulated):");
console.log("Note: In a browser environment, this would use prompt().");
console.log("For Node.js, we'll simulate with a function.");

function getNumberGreaterThan10() {
    let userInput;
    do {
        
        if (typeof userInput === 'undefined') {
            userInput = 15; 
            console.log("Simulated input:", userInput);
        }
        
        if (userInput <= 10) {
            console.log("Invalid! Number must be greater than 10.");
        } else {
            console.log("Valid number entered:", userInput);
        }
    } while (userInput <= 10);
    return userInput;
}

// Uncomment to run the simulation
// getNumberGreaterThan10();
console.log("Simulation complete - would continue asking until number > 10");
console.log("\n");

// 4. Create a simple guessing game where the user must guess a number between 1 and 10.
console.log("4. Guessing Game (simulated):");
console.log("Guess the number between 1 and 10!");

function guessingGame() {
    const secretNumber = 7; // Secret number for simulation
    let guess;
    let attempts = 0;
    
    do {
        // In a real browser, it would be: guess = parseInt(prompt("Enter your guess (1-10):"));
        
        // SIMULATION: Using predetermined guesses
        const simulatedGuesses = [3, 5, 7];
        if (attempts < simulatedGuesses.length) {
            guess = simulatedGuesses[attempts];
        } else {
            guess = secretNumber;
        }
        
        console.log("Guess #" + (attempts + 1) + ":", guess);
        
        if (guess !== secretNumber) {
            console.log("Wrong guess! Try again.");
        }
        attempts++;
        
    } while (guess !== secretNumber);
    
    console.log("Congratulations! You guessed the number", secretNumber, "correctly!");
    console.log("It took you", attempts, "attempts.");
}

guessingGame();


