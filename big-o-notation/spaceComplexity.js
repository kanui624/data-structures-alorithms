// Space Complexity Breakdowns:

console.log(
  '#####################################################################'
);
console.log('Constant Example: O(1)');

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
};

sum([1, 2, 3, 4, 5]);
