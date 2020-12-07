// someRecursive
// Prompt:
// Write a function called someRecursive which accepts an array and a callback. The
// function returns true if a single value in the array returns true when passed to
// the callback. Otherwise it returns false

// Restate:
// Write a function the accepts an array and a callback function. The function returns
// true if the only a single value in the array returns true when passed to the
// callback. Else return false
// Inputs:
// an array and a callback function
// Outputs:
// Boolean
// Test I/O:
// someRecursive([1, 2, 3, 4, 5, 6, 7], () => isOdd?) => true
// someRecursive([2, 4, 6], () => isOdd?) => false
// someRecursive([1, 2, 3, 4, 5, 6, 7], (val) => val > 10 ? false : true) => false

// Pseudo Code:
// Return false if array.length is 0
// initialize start pointer at 0
// start internal helper function to handle the recursion
// pass arrayHelper at i into the callback and store in a variable
// if false return false
// else increment start pointer and recursivley call helper again
// if start > array.length - 1 return true
// return recursiveHelper(array, callback)
