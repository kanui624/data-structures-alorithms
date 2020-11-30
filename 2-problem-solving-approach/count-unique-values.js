// Count Unique Values
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the
// array, but it will always be sorted

// Clarifying Questions:
// Should we expect the input array to possibly be empty?
// Should we make sure that the input string consists of only integer types?

// Restate:
// Given a sorted array that could possibly be empty check how many unique
// characters there are
// Inputs:
// empty array, sorted array of integers
// Outputs:
// If array empty return 0
// If array sorted integers return number of unique characters
// If array consists of more than one data type return undefined
// Enough Info:
// I/O labels:
// sortedArray
// position

// Test Cases:
// [1, 3, 4, 5, 6, 5, 5, 6]
// [1,2,3,3,3,4,6,7,8]
//
//      i
// Pseudo Code:
// check if array is empty
//      return 0 if so
// check if array consists of more than one data type
//      return undefined if so
// set a pointOne variable initialized to 0
// set pointTwo variable initialized to 1
// while pointTwo < sortedArray.length
// if(sortedArray[pointOne] === sortedArray[pointTwo])
//      pointTwo++;
// else
//      pointOne++;
//      sortedArray[pointOne] = sortedArray[pointTwo]
//      pointTwo++;
//  }
//   return sortedArray.indexOf(sortedArray[pointOne])

const countUniqueValues = (sortedArray) => {
  if (sortedArray.length === 0) {
    return 0;
  } else if (!sortedArray.every(isNumber)) {
    return undefined;
  }
  let pointOne = 0;
  let pointTwo = 1;
  while (pointTwo <= sortedArray.length) {
    if (sortedArray[pointOne] === sortedArray[pointTwo]) {
      pointTwo++;
    } else {
      pointOne++;
      sortedArray[pointOne] = sortedArray[pointTwo];
      pointTwo++;
    }
  }
  return pointOne;
};

const isNumber = (data) => {
  return typeof data === 'number';
};

let arr = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
let are = [1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 6, 6, 7];
// j;
// i;
// let i = 6;
// let j = 12;
// let length = 13;
// let arrlength = 11;
//               = 2
// let uniqcount = 6
//               = 3
// let i = 3;
// let j = 5;

// const arr = [1, 2, 3, 6, 3, 6, 7, 7, 8, 8, 8];
//                                j;
//                       i;
console.log(countUniqueValues(arr));
