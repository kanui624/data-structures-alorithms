// Accessing a Certain index in an Array:
let names = ['Marley', 'Isaac', 'Kanui'];

console.log(names[2]);
// Outputs:
// Kanui
// O(1) Time - This runs in constant time, because as long as you
// specify a valid index the corresponding value will be fetched in
// constant time

// Appending element to the end of an array
const namePushEnd = names.push('Gerald');

console.log(names[3]);
// Outputs:
// Gerald
// O(1) Time - Appending to the end of an array runs in constant time

// Appending to the beginning of an array
const nameUnshiftBeginning = names.unshift('Jobin');

console.log(names[0]);
// Outputs:
// Jobin
// O(n) Time - Appending to the beginning of an array runs in linear
// time because the 0 index is now mapped to a different value forcing
// every other element in the array to be reassigned a new index

const nameShiftBeginning = names.shift();

console.log(nameShiftBeginning);
// Outputs:
// Jobin
// O(n) Time - Removing an element from the beginning of an array also
// runs in linear time because it changes the index of all subsequent
// elements in the array
