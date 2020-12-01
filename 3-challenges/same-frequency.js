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

// Things Learned:
// - Cannot perform .length on an integer must be converted to string first
// - converting to string runs in O(N) time
// - At the construction of a string the .length property is determined
//   and is immutable
// - Strings are similar to arrays in the way thier indices are accessed
//   accessing an index in a string runs in O(1) constant time because at
//   string construction every character in the string is treated like a
//   value in an array and is given a index number

// Instructor Solution:

function sameFrequency(num1, num2) {
  // Convert Both argument to strings so they get assigned indices and we can calculate their
  // length
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  // Check corner case: If the two argument are not of the same length then return false
  if (strNum1.length !== strNum2.length) return false;
  // Initialize two empty arguments to push the contents of both arguments into respectively
  let countNum1 = {};
  let countNum2 = {};
  // Start a for loop to assign and tally up instances and their duplicates if any in strNum1
  // in countNum1
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  // Start a for loop to assign and tally up instances and their duplicates if any in strNum2
  // in countNum2
  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }
  // start another for loop to check if the same key value pairs match in both objects in
  // frequency, if they don't return false
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
  // if we pass through everything return true because everything checks out
  return true;
}
