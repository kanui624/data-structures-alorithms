// Naive String Search
// Prompt:
// Write a function that takes a longer string and a string that represents
// a pattern that we're looking for
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// However if the characters do match, keep going
// If you complete the inner loop and find a match increment the count of
// matches
// return the count

const naiveStringSearch = (string, pattern) => {
  // initialize a counter variable
  let count = 0;
  // start an outer loop that iterates for the length of the main string
  for (let i = 0; i < string.length; i++) {
    // start an inner loop that iterates for the length of the pattern
    for (let j = 0; j < pattern.length; j++) {
      // On the first iteration, since i is going to be stuck on its
      // initial iteration, and since we need to be able to compare
      // subsequent characters in the main string to each character within
      // the pattern string we need to make sure we increment the index we
      // are looking at in the main string relative to the internal iteration
      // numbers
      if (pattern[j] !== string[i + j]) {
        break;
        // if we come across characters that don't match break out of that
        // specific iteration and continue on to the next iteration in the
        // outer loop
      }
      // However, if our iteration count equals the length of the pattern
      // string that means we have made a match every iteration an now can
      // increment our count of matches
      if (j === pattern.length - 1) {
        count++;
      }
    }
  }
  // once both iterations are done return the final match count
  return count;
};

console.log(naiveStringSearch('a;lkdsfja;lksd7a;lskdfjaaljsdkfh', 'yo'));
