// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then
// repeating a process with a subset of data

// This pattern can tremendously decrease time complexity

// Example:
// Prompt:
// Given a sorted array of integers, write a function called search, that
// accepts a value and returns the index where the value passed to the
// function is located. If the value is not found, return -1

// Restate:
// accept a sorted array and a value, and find the index in the array in which
// that integer is located. If the value doesn't exist in the array return -1
// Inputs:
// a SORTED array and a positive or negative integer
// Outputs:
// the index at which the value was found or -1 to indicate that the value was
// not found
// Edge Cases:
// what if the input array.length is 0?
// Test Cases:
// divideConquer([1,2,3,4,5,6,7,8,9], 4) => return 3
// divideConquer([-8,-3,-1, 0], 2) => return -1
// What comes to mind to use:
// javascript indexOf() method

// Pseudo Code:
// define a function called search that accepts a sorted array and a integer
// if the length of the array is 0 return -1
// if n is greater than array[array.length / 2]

// Naive approach: O(N) - Linear
// Traverse the entire array until we find the value
const search = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

// Better Solution: O(log(n)) - Binary Search
const search = (array, val) => {
  // initialize a place holder min at 0
  let min = 0;
  // initialize a place holder max at length of array - 1
  let max = array.length - 1;
  // while the min index has not crossed the max index
  while (min <= max) {
    // create a variable representing the middle index in the array
    let middle = Math.floor((min + max) / 2);
    // store the actual element at the middle index in the array in a variable
    let currentElement = array[middle];
    // check if the current middle element is less than the value passed in
    if (currentElement < val) {
      // if so set the new min value to equal the middle index + 1, so one
      // index to the right of the current middle
      min = middle + 1;
      // if the first condition isn't met
      // check if the currentElement is greater than the value passed in
    } else if (currentElement > val) {
      // if so set the new max value to middle - 1 or one index to the left of
      // the current middle index
      max = middle - 1;
      // if the first two conditions arn't met that means we have either
      // reached our element or the while loop cannot progress given the
      // that the min value will surpass the max value on the next iteration
    } else {
      // so return the middle index
      return middle;
    }
  }
  // if no middle index is found the while loop will break and -1 will be
  // returned to represent that the value was not found in the array
  return -1;
};

// This runs in O(log(n)): Time because we divde the length of the section we
// analyze by 2 until the length of the section we are looking at is less than
// or equal to one
