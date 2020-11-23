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
