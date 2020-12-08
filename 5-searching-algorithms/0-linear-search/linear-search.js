// Linear Search
// Prompt:
// Write a function that accepts an array and a value
// Loop through the array and check if the current array element is
// equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

const linearSearch = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([0, 5, 3, 7, 2, 6], 7));
