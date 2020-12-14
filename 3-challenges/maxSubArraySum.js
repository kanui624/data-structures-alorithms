// Sliding Window - maxSubArraySum
// Propt:
// Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum
// length of the number passed to the function. Note that a subarray must consist of consecutive elements from
// the original array.

// Restate:
// Given an array of integers and a number representing the length of a subarray. write a function that returns the greatest sum of a subarray found in the given array
// Inputs:
// An unsorted or sorted array and an integer
// Outputs:
// and integer representing the greatest sum of a subarray within in given array
// Edge Cases:
// what if the given integer is greater than the array's length?
// Test I/O:
// maxSubArraySum([100, 200, 300, 400], 2) => 700
// maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 10], 4) => 39
// maxSubArraySum([3, -2, 7, -4, 1, 1, 4, -2, 1], 2) => 5
// maxSubArraySum([2, 3], 3) => null

// [-3, -5, 6, 7, 13, 2 ,4 ,1 ,7, 9], 4 => 28
// maxSum = 5
// tempSum = maxSum
// for(let i = 0; i < n; i++)
// maxSum += array[i]
// [-3, -5, 6, 7, 13, 2 ,4 ,1 ,7, 9]
//
//
// tempSum = tempSum - array[i - n] + array[i + 1]
// if tempSum > MaxSum  => maxSum = tempSum

// tempSum > MaxSum

// Pseudo Code:
// check if n >
// Initialize a tempSum variable = 0
// Intiialize a maxSum variable = 0
// loop through n values and add them to maxSum
// set tempSum to maxSum temporarily
// loop starting at n and iterating through the end of the array
// tempSum = tempSum - array[i - n] + array[i + 1]
// if tempSum > MaxSum
// MaxSum = TempSum

const maxSubArraySumOne = (array, n) => {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};

const maxSubArraySum = (array, n) => {
  if (n > array.length) return null;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  let tempSum = maxSum;

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};
console.log(maxSubArraySum([-3, -5, 6, 7, 13, 2, 4, 1, 7, 9], 2));
