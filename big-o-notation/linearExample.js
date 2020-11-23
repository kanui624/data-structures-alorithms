// The Algorithm Below runs in O(n) time
// or in Linear time

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
