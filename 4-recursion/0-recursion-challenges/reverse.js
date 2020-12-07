// Reverse a string - Recursive Challenge
// Prompt:
// Write a function called reverse which accepts a string and returns a reversed
// version of that string

// Restate:
// Write a function that accepts a string and returns the reverse version of that
// string
// Inputs:
// a String
// Outputs:
// A reversed version of the input string
// Test I/O:
// reverse("hey") => "yeh"
// reverse("abcdefghjk") => "kjhgfedcba"
// reverse("oock") => "kcoo"
// Edge Cases:
// What if the string's length is 0? => return ""

// Pseudo Code:
// check if string length is equal to zero or not
// pointer at 0 pointer at last char and swap them
// increment pointer, decrement pointer
// unless l point is greater than Math.ceiling(string.length / 2)

const reverse = (str) => {
  let l = 0;
  let r = str.length - 1;
  let splitString = str.split('');

  const reverseHelper = (strHelper) => {
    if (l >= Math.ceil(strHelper.length / 2) || r <= Math.ceil(strHelper / 2)) {
      return strHelper;
    }
    let temp = strHelper[l];
    strHelper[l] = strHelper[r];
    strHelper[r] = temp;
    l++;
    r--;
    return reverseHelper(strHelper);
  };

  return reverseHelper(splitString).join('');
};

console.log(reverse('1234567890'));
