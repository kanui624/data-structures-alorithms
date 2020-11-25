//  UNDERSTAND THE PROBLEM
// - Can you restate the problem in your own words?
// create a function that accepts two integers adds them together and
// returns thier sum

// - What are the inputs that go into the problem?
// Usually 2 integers, however if we are given 2 very large numbers
// javascript will coerce this into infinity, so maybe we should check if it is a
// large number to convert it to a string and return a string that represents the
// number. What if we get floats?

// - What is the expected output(s)?
// Maybe 1 integer or a float or a string

// - Do we have enough information to solve the problem only given the inputs?
// What if we're only given 1 number? What should we return?

// How should I label the important pieces of data that are a part of the problem?
// Use descriptive names appropriately representative of the data i/o

const sumTwoNumbers = (numA, numB) => {
  return numA + numB;
};

console.log(sumTwoNumbers(3, 5));
// Outputs: 8

// EXPLORE CONCRETE EXAMPLES
// Prompt: Write a function which takes in a string and returns counts of each char
// character in the string

// Restate:
// Accept a string as an argument and return a hash table where the key is the
// character and the value is the number of times that character appeared in the
// string

// Inputs?:
// Only accept string types that have a length greater than 0

// Outputs?:
// Only return an object with key value pairs

// Enough Info?:

// I/O labels:
// Input - stringToCount
// Output - charsAndTallies

// Explore Concrete Examples:

// Simple:
// Input - "Hey"
// Output -
// {h: 1,
//  e: 1,
//  y: 1}

// Complex:
// Input - "hey what's up"
// Output -
// {
//   h: 2,
//   e: 1,
//   y: 1,
//    : 2,
//   w: 1,
//   a: 1,
//   t: 1,
//   ': 1,
//   s: 1,
//   u: 1,
//   p: p
// }

// Empty Inputs:
// Input - ""
// Output - ?

// Invalid Inputs:
// Input - null
// OutPut- ?

// Break it Down

// O(n): Time
// O(n): Space
const charCount = (string) => {
  // create and initialize an empty hash table labeled charTable
  let charTable = {};
  // for every element in string
  for (let char of string) {
    // only allow uppercase/lowercase letters, and numbers through
    if (isAlphanumeric(char)) {
      // lowercase all letters
      char = char.toLowerCase();
      // check if char is already in charTable
      if (char in charTable) {
        // if it is then increment the already existing value
        charTable[char]++;
      } else {
        // if char is not already present in charTable,
        // put it in and set it's value to 1
        charTable[char] = 1;
      }
    }
  }
  // return the charTable object
  return charTable;
};

const isAlphanumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
};

// Corner Cases we still need to check:
// - avoid adding char values that are equal to a special character or a space

console.log(
  charCount('Hhello MArley IsaAC KAnuO 12345693475019837405198??><>?//..,.')
);
