const { performance } = require('perf_hooks');
// Sliding Window
// This pattern involves creating a window which can be an array or number from one
// position to another. Depending on a certain condition, the window either
// increases or closes.

// Example Problem:
// Prompt:
// Wrire a function called maxSubArraySum which accepts an array of integers and a
// number called n. The function should calculate the maximum sum of n consecutive
// elements in the array

// Restate:
// Find n consecutive numbers that have the largest sum
// Inputs:
// An array of integers and n
// Outputs:
// Return the sum of the numbers found
// Return null if array.length === 0
// Enough Info:
// What to return if n is 0 or a negative number
// What to return if n is greater than array.length
// Test Cases:
// [1,3,2,5,2,7,4,6,4,4], 3

// Naive Solution = O(N^2): Time

const maxSubArraySum = (array, n) => {
  // Covers edge case if n is greater than the length of the array
  if (n > array.length) {
    return null;
  }
  // max is started at negative infinity in case the array contains all negative
  // numbers in which case starting at 0 wouldn't be helpful
  let max = -Infinity;
  // we set the iteration count to the length of the array minus n so we can
  // set our last iteration to start at n places from the end of the array
  for (let i = 0; i <= array.length - n; i++) {
    // we initialize a variable called temp, temp will hold our hew sum each
    // iteration to be compared with our current highest sum (max)
    temp = 0;
    // we start a nested for loop that iterates to n length and accumulates the
    // sum of n integers and stores them in temp
    for (let j = 0; j < n; j++) {
      temp += array[i + j];
    }
    // if the sum in temp is greater than the sum in max, max should be updated
    // to the sum temp is currently holding
    if (temp > max) {
      max = temp;
    }
  }
  // once all iterations are done return max
  return max;
};
const timeOne = performance.now();
let input = maxSubArraySum([1, 4, 4, 3, 4, 7, 2, 5, 6, 7], 4);

console.log(input);
const timeTwo = performance.now();

// Sliding Window Variation - O(N): Time

const maxSubArraySumSW = (arraySW, nSW) => {
  // Initialize variables to keep track of the tempSum and the maxSum
  let maxSum = 0;
  let tempSum = 0;
  // Handle edge case if n is greater than the length of the array
  if (nSW > arraySW.length) return null;
  // start a for loop that iterates to the length of nSW and accumulates
  // first sum of nSW numbers and stores them in the maxSum variable
  for (let i = 0; i < nSW; i++) {
    maxSum += arraySW[i];
  }
  // temporarily assign temp's value equal to maxSum's value
  tempSum = maxSum;
  // start another for loop, independent of the first one, set i to nSW, because
  // we've already gone through those, and the iteration length to the length of
  // arraySW
  for (let i = nSW; i < arraySW.length; i++) {
    // set tempSum to tempSum minus the first index in tempSum and plus the next
    // index after tempSum's already currently summed indices
    tempSum = tempSum - arraySW[i - nSW] + arraySW[i];
    // Set maxSum to whichever is higher maxSum or tempSum
    maxSum = Math.max(maxSum, tempSum);
    // tempSum > maxSum ? (maxSum = tempSum) : (maxSum = maxSum);
  }
  return maxSum;
};

const timeThree = performance.now();
let inputTwo = maxSubArraySumSW([1, 4, 4, 3, 4, 7, 2, 5, 6, 7], 4);

console.log(inputTwo);
const timeFour = performance.now();

console.log(`Time To Run A: ${timeTwo - timeOne} milliseconds`);
console.log(`Time To Run B: ${timeFour - timeThree} milliseconds`);
