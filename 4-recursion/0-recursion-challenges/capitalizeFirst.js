// Capitalize First - Recursion
// Prompt:
// Write a recursive function called CapitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array

// Restate:
// Write a function that takes in an array of strings and capitalizes the first
// letter of each word within the string
// Inputs:
// a string with words within it
// Outputs:
// a new string with every first letter of each wi
// Test I/O:
// capitalizeFirst([car, taco, banana]) => [Car, Taco, Banana]
// Edge Cases:
// What if a string has multiple words in it?

// Pseudo Code:
// Define a function that accepts one array of strings
// initialize a pointer at 0
// define an internal function to handle to recursion
// check if pointer is > or equal to arrayHelper.length
// if so return;
// else capitalize array[pointer][0].toLocalUppercase()

const capitalizeFirst = (arrayOfStrings) => {
  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i][0].toUpperCase();
  }
  return capFirstHelper(arrayOfStrings);
};

console.log(capitalizeFirst(['hey', 'yo', 'what', 'is', 'up']));
