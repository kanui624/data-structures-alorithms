// Sliding Window - maxSubarraySum
// Propmt:
// Given an array of integers and a number, write a function called maxSubarraySum, which
// finds the maximum sum of a subarray with the length of the number passed to the function
// Note that subarray must consist of consecutive elements from the original array.

// Restate:
// Write a function that takes in an array of integers and a number representing the length
// of a subarray within the given array. If the array's length is 0 or is less than the
// number passed in return 0, otherwise return the maximum sum that can be derived from a
// subarray the length of the number passed in
// Input:
// an array of integers and an integer
// Output:
// an integer
// Test I/O:
// maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 3) => [6, 7, 8] => 21
// maxSubarraySum([4, 3, 6, 4, 7, 8, 2, 1], 2) => [7, 8] => 15
// maxSubarraySum([-3, 7, 3, -16, 3, 5, 23, 1, 5], 4) => [5, 23, 1, 5] => 34
// Edge Case:
// if array.length === 0? return 0
// if array.length < n? return 0

// [1, 2, 3, 4, 5, 6, 7, 8], 3)
//           i
//
// Pseudo Code
// if array.length equals 0 or if n is greater than array.length => return 0
// define maxSum variable at 0
// define tempSum variable at 0
// loop for the length of n and add the first n values in the array to maxSum
// tempoarily set our tempSum equal to maxSum
// start an additional adjacent loop to traverse the remainder of the array
// every iteration add the next value after array[n] to tempsum and subtract the first index
// in the sub array
// then check if the new tempSum is greater than of equal to the maxSum
// if so set maxSum = tempSum
// else don't reassign maxSum
// return maxSum
