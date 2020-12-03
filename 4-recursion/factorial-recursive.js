// Factorial looks like this 4!
// Which means: 4 * 3 * 2 * 1
// So 4! = 24

// The Iterative Solution
const findFactorial = (num) => {
  // initialize a variable total to eventually hold the factorial of num
  let total = 1;
  // loop num times, each time multiplying the current total product to i
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  // return the finshed total product
  return total;
};

console.log(findFactorial(3));
// Outputs: 6

// The Recursive Solution

const findFactorialRecursive = (num) => {
  if (num === 1) return 1;
  return num * findFactorialRecursive(num - 1);
};

console.log(findFactorialRecursive(4));
