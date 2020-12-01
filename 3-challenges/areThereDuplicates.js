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

// Instructor Solution One: Frequency Counter
function areThereDuplicates1() {
  // Initialize an empty object to store values from the argument and their respective
  // frequencies
  let collection = {};
  // Loop through the values passed in the arguments, put them in the empty collection object
  // unless it's already their in which case increment by one
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  // Loop through the collection object and check if any of the key's value are greater than 2
  // if so return true because it means there are duplicates
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  // if the last loop never returns true, there are no duplicates so return false
  return false;
}

function areThereDuplicates2(...args) {
  // Two pointers
  // sort the given array of arguments
  args.sort((a, b) => a > b);
  // initialize a start pointer at 0
  let start = 0;
  // initialize another pointer to the right of the start pointer
  let next = 1;
  // while next doesn't surpass the length of the arguments passed in then:
  while (next < args.length) {
    // compare args at start and args at next
    // if they are ever equal return true because there are duplicates
    if (args[start] === args[next]) {
      return true;
    }
    // within the while loop increment both pointers to continue checking
    start++;
    next++;
  }
  // if we get through the entire loop without returning true then return false
  return false;
}

function areThereDuplicatesLinear() {
  // This single line of code:
  // Creates an new Set object with the given arguments
  // checks it's size with .size()
  // and compares it with the original length of the arguments given
  // this line will return a boolean

  // the new Set object constructor creates a new object based on the arguments given, however
  // if there are duplicates it won't count them twice therefore the length of the sets object
  // will be shorter than the original length of the arguments given, and if shorter we will know
  // that there are duplicates
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesLinear(1, 2, 3, 4, 4, 5, 6, 7, 8));

// Things learned:
// The new Set object creates a new object with the array of values given and doesn't count the
// same values twice if given duplicates
// The .size() method calculates the length of a set object
// arguments is a key word and can be used to represent arguments passed in when there is no
// specific value written in the paratheses
