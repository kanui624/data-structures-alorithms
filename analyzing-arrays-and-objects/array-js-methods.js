// Accessing a Certain index in an Array:
let names = ['Marley', 'Isaac', 'Kanui'];

console.log(names[2]);
// Outputs:
// Kanui
// O(1) - This runs in constant time, because as long as you specify a
// valid index the corresponding value will be fetched in constant time

// Appending element to the end of an array
const namePush = names.push('gerald');

console.log(names[3]);
// Outputs:
// Gerald
// O(1) - Appending to the end of an array runs in constant time
