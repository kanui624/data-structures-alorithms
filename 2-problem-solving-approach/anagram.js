// Frequency Counter Example
// Anagrams
// Prompt:
// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// re-arranging the letters of another, such as cinema, formed from iceman

// Restate:
// Take two strings and check if they are anagrams of each other
// Inputs?:
// Only accept strings
// Check that they are of the same length of each other
// Outputs:
// Boolean
// Enough Info?:
// edge cases: spaces? special characters? integers?
// Label:
// stringOne, stringTwo

const validAnagram = (stringOne, stringTwo) => {
  // O(1): Time, O(1): Space
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  //O(1): Time, O(1): Space
  let stringOneFreqs = {};
  let stringTwoFreqs = {};

  //O(N): Time O(N): Space
  for (let i = 0; i < stringOne.length; i++) {
    if (!isAlphaNumeric(stringOne[i]) || !isAlphaNumeric(stringTwo[i])) {
      return false;
    } else {
      let stringOneIndex = stringOne[i].toLowerCase();
      stringOneIndex in stringOneFreqs
        ? stringOneFreqs[stringOneIndex]++
        : (stringOneFreqs[stringOneIndex] = 1);
      let stringTwoIndex = stringTwo[i].toLowerCase();
      stringTwoIndex in stringTwoFreqs
        ? stringTwoFreqs[stringTwoIndex]++
        : (stringTwoFreqs[stringTwoIndex] = 1);
    }
  }

  //O(N): Time, O(1) Space
  for (let char in stringOneFreqs) {
    if (!(char in stringTwoFreqs)) {
      return false;
    } else if (stringOneFreqs[char] !== stringTwoFreqs[char]) {
      return false;
    }
  }
  return true;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);

  if (char === ' ') {
    return false;
  } else if (
    !(code >= 65 && code <= 90) && // Upper Case Alphabet
    !(code >= 97 && code <= 122) // Lower Case Alphabet
  ) {
    return false;
  } else {
    return true;
  }
};

console.log('9'.charCodeAt(0));

console.log(validAnagram('hannah', 'hannaH'));

// Global Complexity:
// O(1 * 1 * N * N): Time => O(N)
// O(1 * 1 * N * 1): Space => O(N)

// Test input: "hey", "yeh"
// stringOneFreqs = {"h": 1, "e": 1, "y": 1}
// stringTwoFreqs = {"y": 1, "e": 1, "h": 1}
// if "h" in stringOneFreqs is not in stringTwoFreqs return false
// if stringOneFreqs["h"] (1) does not equal stringTwoFreqs["h"] (1), return false
//Nothing returns false, so return True
