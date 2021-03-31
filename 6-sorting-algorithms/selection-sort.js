// const selectionSort = (array) => {
//   let startIdx = 0;
//   while (startIdx < array.length - 1) {
//     let smallestIdx = startIdx;
//     for (let i = startIdx + 1; i < array.length; i++) {
//       if (array[smallestIdx] > array[i]) smallestIdx = i;
//     }
//     swap(startIdx, smallestIdx, array);
//     startIdx++;
//   }
//   return array;
// };

// const swap = (intOne, intTwo, array) => {
//   let temp = array[intOne];
//   array[intOne] = array[intTwo];
//   array[intTwo] = temp;
// };

// let ss = selectionSort([1, 3, 5, 3, 7, 8, 9, 6, 89, 76, 75, 99, 34]);
// console.log(ss);

// Selection sort works by finding the min value in the list and
// appending it to the beginning of the list, and doing that over and
// over again until the while list has been appended to the beginning
// in the correct order.

// Pseudo code
// set finalArray variable set to an empty array
// set minValue initialized to the first int in the given array
// start while loop, while finalArray does not equal length of given array
// check if array[i] is less than minvalue
// if it is update minvalue and push it onto final array

const swap = (intOne, intTwo, array) => {
  let temp = array[intOne];
  array[intOne] = array[intTwo];
  array[intTwo] = temp;
};

const selectionSort = (array) => {
  let currentIdx = 0;
  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i;
      }
    }
    swap(currentIdx, smallestIdx, array);
    currentIdx++;
  }
  return array;
};

let ss = selectionSort([
  1,
  5,
  3,
  6,
  8,
  7,
  9,
  8,
  89,
  9786,
  465,
  687354,
  457,
  234,
]);

console.log(ss);
