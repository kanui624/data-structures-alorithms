// Find Longest Substring
// Prompt:
// Write a function called findLongestSubstring, which accepts a string and returns
// the length of the longest substring with all distinct characters

// Restate:
// Given a string return the longest substring within with unique characters.
// Inputs:
// string
// Outputs:
// integer
// Test I/O:
// findLongestSubstring("alskdjfair") => 7
// findLongersSubstring("alskdjf") => 7
// findLongersSubstring("aaaaaa") => 1
// Edge Cases:
// If the length of the string is 0 return 0

// Work Through:
// "abcdefgabc" => 7
//  i
//  while(i < string.length)
//  let map = {}
//  if char in map
//  map = {}
//  arr[i] = true
//  i++

// Pseudo Code:
// check if string's length is equal to 0, if so return 0
// initialize an object to store elements in
// initialize a pointer variable i = 0
// initialize a count variable to 0
// while i < string.length
// if string[i] in object
// set int to obj.length
// set obj back to empty
// and set obj[string[i]] = true
// else
// string[i] = true

// const findLongestSubstring = (string) => {
//   if (string.length === 0) return 0;
//   let charStore = {};
//   let maxCount = 0;
//   let tempCount = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] in charStore) {
//       charStore = {};
//       maxCount = tempCount;
//       tempCount = 1;
//     } else {
//       tempCount++;
//     }
//     charStore[string[i]] = true;
//   }
//   return maxCount;
// };

// console.log(findLongestSubstring('abcdefg'));
