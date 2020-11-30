// The Algorithm Below runs in O(n) time
// or in Linear time

// Linear Example: O(n)

console.log('Linear Example: O(n)');

const countUpDown = (n) => {
  // This console.log() is independent of n
  // so runs in constant time or O(1)
  console.log('Going Up');
  // The amount of iterations is dependent on n
  // So this first loop is O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // This console.log() is independent of n
  // so runs in constant time or O(1)
  console.log('At the top. And going down');
  // The amount of iterations is dependent on n
  // So this first loop is O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  // This console.log() is independent of n
  // so runs in constant time or O(1)
  console.log('Back to the bottom');
};

countUpDown(10);

// Count up Big O broken down is as follows:
// 1 + n + 1 + n + 1
// Which Simplifies to O(n)

// #####################################################################

// Quadratic Example: O(n^2)
console.log(
  '#####################################################################'
);
console.log('Quadratic Example: O(n^2)');

const printAllPairs = (n) => {
  // As n grows the amount of iterations in the outter loop grows
  // So the outer loop runs in O(n) time
  for (let i = 0; i < n; i++) {
    // As n grows the amount of iterations in the inner loop grows
    // So the inner loop runs in O(n) time
    for (let j = 0; j < n; j++) {
      // Since ignitiated by 2 nested for loops this operation is executed
      // (0(n) * O(n)) times or O(n^2)
      console.log(i, j);
    }
  }
};

printAllPairs(3);
// The printAllPairs Big O is broken down as follows
// n * n = n^2
// o(n^2)

// Linear Example: O(n)

console.log(
  '#####################################################################'
);
console.log('Linear Example: O(n)');

const logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

logAtLeast5(6);

// Constant Example: O(1)

console.log(
  '#####################################################################'
);
console.log('Constant Example: O(1)');

const logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

logAtMost5(6);
