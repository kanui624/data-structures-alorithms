// Sliding Window - minSubArrayLen
// Prompt:
// Write function called minSubArrayLen which accepts two parameters - an array of positive
// integers and a positive integer. This function should return the minimal length of a
// contiguous subarray of which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead

// Restate:
// write a function that accepts an array and an integer. return the length subarray with the
// least amount of integers to that are greater than or equal to the integer passed in
// Inputs:
// an array of positive integers and a positive integer
// Outputs:
// and integer representing the length of a subarray within the given array
// Edge Cases:
// What if the integer given is greater than the sum of the entire array? => 0
// Test I/O:
// [1, 2, [3, 4, 5] 6, 7, 8, 9] 12 => 3
// [3, 6, 7, 4, 8, 9] 11 => 2
// [3, 4, 8 ,4 ,6 ,3 ,6] => 35 => 0
