// Multiple Pointers - averagePair
// Prompt:
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the average target

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Restate:
// Given a sorted array of integers, and a target value, figure out if any of the pairs' average
// equals the target average given. Return a boolean indicating if there is or isn't

// Inputs:
// a sorted array of integers

// Outputs:
// Boolean

// Edge Cases:
// What if the array's length is 0?
// What if the target average is a negative number?
// What if the target average is a float?
// Can the same number twice equal the average?

// Test I/O:
// averagePair([1, 2, 3], 2.5) => true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) => false
// averagePair([], 4) => false

// Pseudo Code:
// check if array's length is 0
// if so return false
// initialize a l pointer at 0
// initialize a r pointer at array.length - 1
// start a while loop which will iterate while l is less than r
// initialize a variable sumAndAverage summing together l and r of array and dividing their sum
// by 2
// if sumAndAverage equals the target average then
// return true
// else if the average is less than the the target average then
// increment l up
// else increment r down
// if we exit the while loop having never returned true then
// return false

const averagePair = (array, target) => {
  if (array.length === 0) {
    return false;
  }
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    let sumAndAverage = (array[leftPointer] + array[rightPointer]) / 2;
    if (sumAndAverage === target) {
      return true;
    } else if (sumAndAverage < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return false;
};

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
