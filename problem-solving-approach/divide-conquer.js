// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then
// repeating a process with a subset of data

// This pattern can tremendously decrease time complexity

// Example:
// Prompt:
// Given a sorted array of integers, write a function called search, that accepts
// a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1

// Restate:
// accept a sorted array and a value, and find the index in the array in which
// that integer is located
// Inputs:
// a SORTED array and a positive or negative integer
// Outputs:
// the index at which the value was found or -1 to indicate that the value was
// not found
// Edge Cases:
// what if the input array.length is 0?
// What if n is a negative integer?
// Test Cases:
// divideConquer([1,2,3,4,5,6,7,8,9], 4) => return 3
// divideConquer([-8,-3,-1, 0], 2) => return -1

// Pseudo Code:
//
// check if n is greater than array[array.length / 2]
// if greater
