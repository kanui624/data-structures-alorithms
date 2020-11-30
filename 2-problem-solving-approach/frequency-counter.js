// Frequency Counters

// The Frequency Counter solution is useful when you need to accept two or more
// arguments and compare them

// This pattern uses objects or sets to collect values/frequencies of values

// This can often avoid the need for nested loops or O(N^2) operations with arrays
// and strings

// Example Challenge:

// Prompt:
// Write a function calles "same", which accepts two arrays. The function should
// return true if every value in the array has it's corresponding value squared
// in the second array. The frequency of values must be the same.

// Restate:
// accept two arrays, return true if every value in the second array is the squared
// version of the values in the first array
// Inputs?:
// Would the input arrays be invalid if they are of different lengths?
// Would the input arrays be invalid if thier value's orders don't correspond?
// Will the squared version consistently be passed as the second argument?
// Outputs:
// Boolean

// Example I/O one:
// arrOne = [1, 2, 3, 4, 5, 6] arrTwo = [1, 4, 9, 16, 25, 36] - Return true.
// arrOne = [1, 2, 3, 4, 5, 6] arrTwo = [ 36, 9, 16, 1, 25, 4] - Return true

// My failed  but close solution
const sameOne = (arrOne, arrTwo) => {
  const arrTable = {};
  let bool = false,
    inc = 1;
  if (arrOne.length != arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      arrTable[arrOne[i]] = 1;
      if (Math.sqrt(arrTwo[i]) in arrTable) {
        arrTable[arrOne[i]]++;
        bool = true;
        inc++;
      } else {
        bool = false;
        inc--;
      }
    }
  }
  console.log(bool, inc);
};

// same([1, 2, 3, 4, 5, 6], [2, 78, 9, 16, 25, 36]);

// create a arrTable object
// if the lengths of both arrays do not equate return false
// start one for loop
// for every value in arrOne that is not in arrTable add the value as a key and
// set 1 as the value to that key
// next  initialize a pointer to check if the squareRoot of all the value

// Naive Solution - O(N^2) Time
const sameTwo = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      let correctIndex = arrTwo.indexOf(arrOne[i] ** 2);
      if (correctIndex === -1) {
        return false;
      }
      arrTwo.splice(correctIndex, 1);
    }
  }
  return true;
};
// This runs in O(N^2) Time because within the for loop the .indexOf() method
// also iterates N times through arrTwo therefore creating a quadratic nested
// loop solution.

// Check if both array lengths are equal and return fales if not
// Start a for loop that iterates through the length of arrOne
// Check if arrOne at i to the power of 2 is in arrTwo
// If not and the .indexOf() method returns -1, return false
// If the .indexOf() method returns a valid index, remove that index from arrTwo
// If we reach the end of our iterations then we know that we made a match
// for every index in arrOne to every index in arrTwo and now we can return true

// * two for loops is vastly better in regards to time complexity in comparison
// to nested for loops

// Refactored O(N) solution
const same = (arrOne, arrTwo) => {
  // If the lengths of both array are not equal return false
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  let freqCountOne = {};
  let freqCountTwo = {};
  // Push the contents of both arrays into the initialized objects via a loop
  for (let i = 0; i < arrOne.length; i++) {
    arrOne[i] in freqCountOne
      ? freqCountOne[arrOne[i]]++
      : (freqCountOne[arrOne[i]] = 1);

    arrTwo[i] in freqCountTwo
      ? freqCountTwo[arrTwo[i]]++
      : (freqCountTwo[arrTwo[i]] = 1);
  }

  for (let key in freqCountOne) {
    // Check if the squared version of the keys in freqCountOne are in freqCountTwo
    if (!(key ** 2 in freqCountTwo)) {
      return false;
    }
    // Check if the frequency of instances of the given key equals are the same amount
    // in both objects
    if (freqCountTwo[key ** 2] !== freqCountOne[key]) {
      return false;
    }
  }
  // If everything checks out return true
  return true;
};

console.log(same([1, 2, 3, 4, 6, 6], [1, 4, 9, 16, 36, 36]));

// This runs in O(N * N) Time due to the two for loops which simplifies to O(N)
// To compare if the length of the input array is 1,000, with 2 for loops thats 2000
// iterations, vs nested for loops which is 1,000 * 1,000 or 1,000,000 iterations.
// So it's 2,000 iterations vs 1,000,000 iterations.

// check if both array lengths are the same
// initialize two empty objects to push the array contents into
// push the contents of each array into their respective object
// iterate through arrOne and check if arrOne[i] ** 2 is in arrTwo
// if not return false
