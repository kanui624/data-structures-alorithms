// Multiple Pointers
// Creating pointers or values that correspond to an index or position and move
// towards the beginning, end, or middle based on the given conditions

// This is very efficient for solving problems with minimal space complexity

// Example Algorithm:
// Prompt:
// Write a function called sumZero which accepts a sorted array of integers. The
// function should find the first pair where the sum is 0. Return an array that
// includes both values that sum to zero or undefined if a pair does not exist

// Restate?:
// Take in a sorted array, see if any two numbers in the array sum up to 0, then
// return another array with the first two integers that sum up to 0 in it
// Inputs:
// Sorted Array of integers
// Outputs:
// an array containing the first numbers that sum up to 0
// Enough Info?:
// What if there are other data types in the array other then integers?
// What if the array is empty?

// Pseudo Code:
// Initialize two pointers l r
// Set l to 0 and r to array.length - 1
// create a while loop saying that while l < r
// create sum variable sumUp = array[l] + array[r]
// if sumUp === 0
// return [array[l], array[r]]
// else if (sumUp < 0)
//  l++ to get a bigger number
// else
//  r-- to get a smaller number
//  if all else fails return undefined
const sumZero = (sortedArray) => {
  // 0(N): Time, O(1): Space
  if (!sortedArray.every(checkType) || sortedArray.length === 0) {
    return undefined;
  }
  // O(1): Time, O(1): Space
  let l = 0;
  let r = sortedArray.length - 1;
  // O(N): Time
  while (l < r) {
    //  O(1): Space
    let sumUp = sortedArray[l] + sortedArray[r];
    if (sumUp === 0) {
      return [sortedArray[l], sortedArray[r]];
    } else if (sumUp < 0) {
      l++;
    } else {
      r--;
    }
  }
  return undefined;
};

const checkType = (data) => {
  return typeof data === 'number';
};

// Global Complexity:
// Time: O(N * 1 * N) => O(N)
// Space: O(1 * 1 * 1) => O(1)

console.log(sumZero([-3, -1, 1, 2, 4, 5, 7]));
