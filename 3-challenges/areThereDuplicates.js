// Frequency Counter / Multiple Pointers: areThereDuplicates
// Prompt:
// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments, and check whether there are any duplicates among the
// arguments passed in. You can solve this using the frequency counter pattern
// OR the multiple pointers pattern

// Restate:
// Create a function that accepts an indefinite length of arguments and check
// if any of the arguments repeat
// Inputs:
// indefinite number of arguments of any type
// Outputs:
// Boolean
// Test I/O:
// areThereDuplicates(1, 2, 3) => false
// areThereDuplicates(1, 2, 2) => true
// areThereDuplicates(a, v, c) => false

const areThereDuplicates = (...args) => {
  // O(1): Time
  // O(N): Space
  const dupCheck = {};
  // O(N): Time
  // O(N): Space
  for (let arg of args) {
    arg in dupCheck ? dupCheck[arg]++ : (dupCheck[arg] = 1);
  }
  // O(N): Time
  // O(1): Space
  for (const value in dupCheck) {
    if (dupCheck[value] === 2) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

// console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'h'));
console.log(areThereDuplicates(1, 2, 3, 4, 4, 5, 6, 7, 8));
