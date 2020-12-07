// isPalindrome - Recursion
// Prompt:
// Write a recursive function called isPalindrome which returns true if the string
// passed to it is a palindrome. A palindrome is a word that reads to same forwards
// and backwards

// Restate:
// Recursively write a function that checks if a given string is a palidrome
// Inputs:
// A single string
// Outputs:
// Boolean
// Test I/O:
// isPalindrome("abcdefg") => false
// isPalindrome("abcdcba") => true
// isPalindrome("racecar") => true
// Edge Cases:
// What if the given string's length is 0?

// Pseudo Code:
// initialize l pointer at 0
// initialize r pointer at string.length - 1
// initialize an internal recursive helper function
// set base case to check if l and r are equal
// if not return false
// if so increment l and decrement r
// then return a recursive call of the helper function
// return the value returned from the helper function
