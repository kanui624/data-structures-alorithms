// Frequency Counter - Same Frequency
// Prompt: Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits
// Solution must have to following complexities: O(N)

// Restate:
// Given two positive integers determine if the integers they consist of occur
// at the same frequenct of one another. Example: 123, 321 => true
// Inputs:
// two positive integers
// Outputs:
// Boolean
// Corner Cases:
// return false if the integers given are of different lengths
// Test Cases:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

// Pseudo Code:
// Define a function that takes in two positive integers as arguments
// compare both arguments length and return false if not equal
// initialize an empty hash table for each argument in variables
// create a for loop that pushes the individual integers into their
// respective objects, incrementing up for repeating values
// iterate through the first object and check if and the frequency equals
// the frequency of the corresponding integer in the second object
// if everything checks out return true if not return false

const sameFrequency = (numOne, numTwo) => {
  // O(N): Time
  // O(1): Space
  let numOneS = toString(numOne);
  // O(N): Time
  // O(1): Space
  let numTwoS = toString(numTwo);
  // O(1): Time
  // O(1): Space
  if (numOneS.length !== numTwoS.length) {
    return false;
  }
  // O(N): Space
  let objOne = {};
  // O(N): Space
  let objTwo = {};
  // O(N): Time
  // O(N): Space
  for (let i = 0; i < numOneS.length; i++) {
    numOneS[i] in objOne ? objOne[numOneS[i]]++ : (objOne[numOneS[i]] = 1);
    numTwoS[i] in objTwo ? objTwo[numTwoS[i]]++ : (objTwo[numTwoS[i]] = 1);
  }
  // O(N): Time
  // O(1): Space
  for (let num in objOne) {
    if (num in objTwo) {
      if (objOne[num] !== objTwo[num]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const toString = (num) => {
  // O(N)
  return num.toString();
};

console.log(sameFrequency(182, 382));

// Time Complexity: O(N * N * 1 * N * N * N) => O(N)
// Space Complaxity: O(1 * 1 * 1 * N * N * N * 1) => O(N)
