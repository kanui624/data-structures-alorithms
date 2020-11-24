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
