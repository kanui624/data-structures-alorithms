// // Given two strings check to see if the second string is an anagram of the first
// // An anagram of a string is another string that contains the exact same characters
// // at the exact same frequency of the initial string, but is simply in a different order

// // Restate:
// // Check to see if two strings are anagrams of each other, if they are return true if not return false
// // Inputs:
// // Two strings
// // Outputs:
// // Boolean
// // Edge Cases:
// // spaces?, special characters?, integers?, same length?
// // Sample I/O:
// // isAnagram("hey", "yeh") => True
// // isAnagram("yo", "yo") => True
// // isAnagram("but", "bou") => False
// // isAnagram("got", "too") => False
// // Pseudo Code:
// // check is the two strings are the same length if not return false
// // initialize an empty object to hold stringOneFreqs
// // initialize an empty object to hold stringTwoFreqs
// // for the length of stringOne:
// // check if each character is in it's corresponding object
// // if not set it equal to 1 within the object
// // if so increment it by one
// // start and paralell for loop that checks if stringOneFreqs[key] === stringTwoFreqs[key]
// // if they all check out return True if not return false

// const isAnagram = (stringOne, stringTwo) => {
//   if (stringOne.length !== stringTwo.length) {
//     return false;
//   }

//   let stringOneFreqs = {};
//   let stringTwoFreqs = {};

//   for (let i = 0; i < stringOne.length; i++) {
//     if (stringOne[i] in stringOneFreqs) {
//       stringOneFreqs[stringOne[i]]++;
//     } else {
//       stringOneFreqs[stringOne[i]] = 1;
//     }

//     if (stringTwo[i] in stringTwoFreqs) {
//       stringTwoFreqs[stringTwo[i]]++;
//     } else {
//       stringTwoFreqs[stringTwo[i]] = 1;
//     }
//   }

//     for(let key of stringOneFreqs) {
//         if ()
//     }

//   return stringTwoFreqs;
// };

// const anagram = isAnagram("heyy", "yyeh");
// console.log(anagram);
