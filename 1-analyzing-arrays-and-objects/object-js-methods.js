let instructor = {
  firstName: 'Marley',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// Keys Object Method:
const keys = Object.keys(instructor);

console.log(keys);
// Outputs:
// ['firstName', 'isInstructor', 'favoriteNumbers'];
// Time Complexity:
// O(N) Linear Time, because as the object grows the .keys() method
// will traverse the extent of the object while adding the key names
// to the output array

// Values Object Method:
const values = Object.values(instructor);

console.log(values);
// Outputs:
// [ 'Marley', true, [ 1, 2, 3, 4 ] ]
// O(N) Linear Time, because similar to the .keys() method, as the
// object grows the .values() method will traverse the extent of the
// object while adding the value names to the output array

// Entries Object Method:
const entries = Object.entries(instructor);

console.log(entries);
// Outputs:
// [
//   [ 'firstName', 'Marley' ],
//   [ 'isInstructor', true ],
//   [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
// ]
// O(N) Linear Time, because similar to the .keys() and .values()
// methods, as the object grows the .entries() method will traverse the
// extent of the object while adding the key/value pairs to the output
// array

// .hasOwnProperty() Object Method:

const hasOwnProperty = instructor.hasOwnProperty('firstName');

console.log(hasOwnProperty);
// Outputs:
// true
// O(1) Constant Time, because if the key name is known, finding out
// whether there's a match within the object or not, is constant
