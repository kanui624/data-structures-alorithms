// Flatten - Recursion
// Prompt:
// Write a function called flatten which acceptd an array of arrays a returns a new
// array with all values flattened

// Restate:
// Given a multi-dimensional array, consolidate or "flatten" all values in each array
// into one array
// Inputs:
// Multi-dimensional array
// Outputs:
// An array
//Test I/O:
// flatten([1, 2, 3, [4, 5, 6, [7, 8], 8], 9]) => [1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
// Edge Cases:
// If empty array return empty array

// Pseudo Code:
// if array.length is 0 => return an empty array
// initialize an empty array to hold our values
// initialize an internal helper function to handle the recursion
// as a base case if array[0] is typeOf Array
// if so recursively pass it into the helper function again to be analyzed
// if not outterArray.push the value into the empty array

// const flatten = (array) => {
//   if (array.length === 0) return [];
//   let newArr = [];
//   let p = 0;

//   const flattenHelper = (arrayHelper) => {
// if (Array.isArray(arrayHelper[0]) && arrayHelper[0].length === 0) {
//   p++;
//   return flattenHelper(arrayHelper[p]);
// } else if (Array.isArray(arrayHelper[0]) && arrayHelper[0].length !== 0) {
//   return flattenHelper(arrayHelper[0]);
// } else if (typeof arrayHelper[0] === 'number') {
//   let intToPush = arrayHelper.shift();
//   newArr.push(intToPush);
//   return flattenHelper(arrayHelper);
// }
//   };
//   flattenHelper(array);
//   return newArr;
// };

// console.log(flatten([[], [2, 3], 3]));

// Instructor Solution:
// Things leared:
// Utilize a forLoop with recursion to handle problems where starting a new recursive
// call may loose the rest of the data we need to traverse

// const flatten = (array) => {
//   // initialize an empty array
//   let newArray = [];
//   // loop through the length of the outter array
//   for (let i = 0; i < array.length; i++) {
//     // if i in array is an array itself
//     if (Array.isArray(array[i])) {
//       // set newArray to a contanized recursive call of passing array at i into
//       // flatten
//       newArray = newArray.concat(flatten(array[i]));
//     } else {
//       // else just push array at i into the new array
//       newArray.push(array[i]);
//     }
//   }
//   //return the new array
//   return newArray;
// };

// console.log(flatten([[1, 2], 3, [4]]));
// My Attempt with the same strategy

const flatten = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = newArr.concat(flatten(array[i]));
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, [2, [3, 4]], [5], 6]));
