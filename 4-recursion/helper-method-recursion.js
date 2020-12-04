// Helper Method Recursion
// Example:

// const recursiveFunction = (input) => {
//   let outerScopedVariable = [];

//   const recursiveHelper = (helperInput) => {
//     helper(helperInput--);
//   };
//   helper(input);
//   return outerScopedVariable;
// };

// Another Recursive Helper Example:

const collectOddValues = (array) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
  };
  helper(array);
  return result;
};

// Using helper method recursion allows us to declare outer scoped variables whose
// values persist through recursive iterations. Example:

// const doesntPersist = (num) => {
//   let notPersist = 1;
//   if (num > 1) {
//     notPersist += num;
//   }
//   return notPersist;
// };

// Returns 1 because the value of the notPersist variable is re-initialized to 1
// every recursive call.

// Inversely using helper methods within the main function to handle all recursive
// tasks allows the outer scoped variables to persist and not be re-initialized
// Example:

const doesPersist = (num) => {
  let persist = 2;

  const helper = (helperInput) => {
    if (helperInput > 1) {
      return helperInput + helper(helperInput - 1);
    } else {
      return helperInput;
    }
  };

  let helperResult = helper(num);

  return persist * helperResult;
};

console.log(doesPersist(3));

// Original Example Two:
// Create function that takes an array and squares every element in the array and
// returns a new array with the squared elements. Solve this recursively

const squareElements = (array) => {
  let newArray = [];

  const squareHelper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }
    newArray.push(helperInput[0] ** 2);
    return squareHelper(helperInput.slice(1));
  };

  squareHelper(array);

  return newArray;
};

console.log(squareElements([1, 2, 3, 4, 5]));
