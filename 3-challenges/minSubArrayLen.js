// Sliding Window - minSubArrayLen
// Prompt:
// Write a function called minSubArrayLen which accepts two parameters - an array of positive
// integers and a positive integer. This function should return the minimal length of a
// contiguous subarray of which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead.

// Restate:
// Write a function that take in an array of positive integers and positive integer. Return a
// subarray of the main array passed in that has is either greater than or equal to the
// integer passed in. If there are multiple subarray's within the main array that meet this
// requirement return the subarray with shortest length. If there isn't one return 0
// Inputs:
// An array of positive integers and a positive integer
// Outputs:
// A subarray of contiguous integers that when summed together are greater than or equal to
// the intger passed into the function
// Test I/O:
// minSubArrayLen([1, 2, 4, 5, ,6 ,7 ,8], 9) => [5, 4]
// EdgeCases:
// if there isn't a subarray that meets the requirements return 0
