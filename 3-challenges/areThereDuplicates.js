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
  let dupCheck = {};
  for (let arg of args) {
    args[arg] in dupCheck ? dupCheck[arg]++ : (dupCheck[arg] = 1);
  }
  for (let value in dupCheck) {
    if (value >= 2) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(areThereDuplicates(1, 2, 2));
