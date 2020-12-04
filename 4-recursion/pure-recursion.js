// Pure Recursion
// Pure Recursion
// Solving the same thing as the helper method example, but all self contained
// without external variables or helper functions

// Helper Method Example:
const collectOddValuesHelper = (array) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
  };
  helper(array);
  return result;
};

// Pure Example:

const collectOddValuesPure = (array) => {
  // Declare a newArr variable to store all the filtered results
  let newArr = [];

  // cover the base case to end the recursive loop
  if (array.length === 0) {
    return newArr;
  }

  // filter the data from the input array
  if (array[0] % 2 !== 0) {
    newArr.push(array[0]);
  }

  // set new array to a concatanize array of all the individual arrays created each
  // stack call. every stack call will either return an empty array indicating it
  // did not pass the modulo condition, or it will return an array filled with the
  // odd value that passed both conditionals. So we end up with a stack of arrays
  // that are either empty or filled with one odd integer. These arrays are then
  // all concatanize into the newArr variable on the last call and returned
  newArr = newArr.concat(collectOddValuesPure(array.slice(1)));
  return newArr;
};

console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9]));
