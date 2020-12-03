// Sliding Window - maxSubArraySum
// Propt:
// Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum
// length of the number passed to the function. Note that a subarray must consist of consecutive elements from
// the original array.

// Restate:
// Given an array of integers and a number representing the length of a subarray. write a function that
// returns the greatest sum of a subarray found in the given array
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
