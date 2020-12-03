// First Recursive Function

// Write a function called countDown that accepts a number
const countDown = (num) => {
  // if that number is less than or equal to 0
  if (num <= 0) {
    // log to the console "all done!"
    console.log('All done!');
    // return to finish the function
    return;
    // else
  } else {
    // log to the console num
    console.log(num);
    // decrement num by 1
    num--;
    // and pass the new decremented num value recursively to the countDown function
    countDown(num);
  }
};

countDown(20);
