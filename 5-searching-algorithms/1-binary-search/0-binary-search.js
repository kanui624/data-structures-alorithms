// Binary Search
// Write a function called binarySearch that accepts a sorted array and a
// value
// Then create a left pointer at the start of the array, and a right pointer
// at the end of the array
// while left pointer is less than the right pointer
// create a pointer in the middle
// if you find the value you want, return the index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you never find the value, return -1

const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.round((left + right) / 2);
  while (array[middle] !== value && left <= array.length) {
    if (array[middle] === value) return middle;
    if (value < array[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.round((left + right) / 2);
  }
  return array[middle] === value ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10], 30));
