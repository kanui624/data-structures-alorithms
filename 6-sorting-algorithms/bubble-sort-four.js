// Bubble Sort Four

// Bubble sort is implemented by looping through an array and checking if the current indice is
// either greater than or less than the indice directly subsequent to it. If it is greater than
// the subsequent indice than swap the two values. If it is less than move on with the iteration.
// Repeat this until the array has been sorted

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

const bs = bubbleSort([1, 5, 3, 7, 54, 8, 4, 3, 5, 345, 656, 5, 7, 76]);
console.log(bs);
