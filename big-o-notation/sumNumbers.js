// Prompt:
// Write a function that calculates the sum of all numbers from 1 up to
// and including some number n.

// Corner Cases:
// return message for integers less than 1
// return message for invalid type

// Pseudo Code:
// if number is less than 1 and if typeof number === "number"
// create a for loop that starts at 1 and loop n times
// create a running sum and add next integer to the running sum each iteration

// Example 1:
const sumUpA = (n) => {
  if (n < 1 || typeof n !== 'number') {
    console.log(`Argument: ${n} is invalid`);
  } else {
    let runningSum = 0;
    for (let i = 1; i <= n; i++) {
      runningSum += i;
    }
    console.log(runningSum);
  }
};

const printSumA = sumUpA(5);

// Example 2:
const sumUpB = (n) => {
  console.log((n * (n + 1)) / 2);
};

const printSumB = sumUpB(5);
