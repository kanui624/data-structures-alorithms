// Second Recursive Function

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(8));

// Questions from the Instructor:
// Can you identify the base case?
// - The base case is "if(num === 1) return 1"
// Do you notice the different input?
// - The different input is num - 1
// What would happen if we didn't return?
// - if we didn't return the function would continue through negative numbers
