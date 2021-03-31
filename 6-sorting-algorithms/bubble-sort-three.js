// // Implement Bubble Sort

// const swap = (intOne, intTwo, array) => {
//   let temp = array[intOne];
//   array[intOne] = array[intTwo];
//   array[intTwo] = temp;
// };

// const bubbleSort = (array) => {
//   let isSorted = false;
//   let counter = 0;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < array.length - 1 - counter; i++) {
//       console.log(array[i], array[i + 1]);
//       if (array[i] > array[i + 1]) {
//         swap(i, i + 1, array);
//         isSorted = false;
//       }
//     }
//     counter++;
//   }
//   return array;
// };

// let bs = bubbleSort([1, 5, 3, 7, 5, 9, 7, 8, 67, 5, 6, 45]);
// console.log(bs);

const swap = (intOne, intTwo, array) => {
  let temp = array[intOne];
  array[intOne] = array[intTwo];
  array[intTwo] = temp;
};

const bubbleSort = (array) => {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
};

let bs = bubbleSort([1, 4, 2, 6, 4, 8, 6, 7, 76, 5, 6, 454, 34, 43, 65, 8756]);

console.log(bs);
