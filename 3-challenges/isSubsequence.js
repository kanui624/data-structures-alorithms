// Multiple Pointers - isSubsequence
// Prompt:
// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the second string. In other words, the
// function should check whether the characters in the first string appear somewhere in the
// second string, without their order changing.

// Restate:
// Write a function that takes in two strings and check to see if the first string is a
// subsequence of the second string. return a boolean specifying if so or not

// Input:
// two strings

// Outputs:
// Boolean

// Clarify:
// Can one character be considered and subSequence?
// Is it only a subsequence if it's characters are in the same order as the comparing string?

// Test I/O:
// isSubsequence("hello", "hello world") => true
// isSubsequence("sing", "string") => true
// isSubsequence("abc", "y a slkdj b sdklj c ") => true
// isSubsequence("acb", "abc") => false

// Corner Case:
// Check if seqPoint is equal to sequence.length if so we have reached the end of our sequence
// meaning all characters check out

//Pseudo Code
// initialize a pointer strPoint at 0
// initialize a pointer seqPoint at 0
// while strPoint is less than string.length and while seqPoint less than sequence.length
// check if seqPoint === sequence.length
// if so return true
// else check if string[strPoint] === sequence[seqPoint]
// if so increment both pointers up
// if not only increment the string pointer to check the next character
// if we exit the while loop having never returned true then return false

const isSubsequence = (sequence, string) => {
  let strPoint = 0;
  let seqPoint = 0;
  while (strPoint < string.length && seqPoint < sequence.length) {
    if (string[strPoint] === sequence[seqPoint]) {
      strPoint++;
      seqPoint++;
    } else {
      strPoint++;
    }
  }
  return seqPoint === sequence.length;
};

console.log(isSubsequence('abc', 'y a slkdj b sdklj '));

// Time: O(N + M)
// Space: O(1)
