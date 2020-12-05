// Recursion - Factorial
// Write a function which accepts a number and returns the factorial of that
// number. A factorial is the product of an integer and all the integers below it
// Example: Factorial 4 => 24 because 4 * 3 * 2 * 1. Factorial 0 is always 1

// Restate:
// Write a function that takes in an integer and returns the factorial of that
// integer. Handle this recursively
// Inputs:
// Single positive integer
// Outputs:
// Single positive integer
// Test I/O:
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120
// Edge Cases:
// If the integer is 0 return 1

// Pseudo Code:
// write func factorial
// If int === 0 => return 1
// return int * factorial(int - 1)

const factorial = (int) => {
  if (int === 0) return 1;
  return int * factorial(int - 1);
};

console.log(factorial(5));
