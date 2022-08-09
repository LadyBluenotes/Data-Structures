// NEED TO LOOK INTO MORE

// find the symmetric difference - the elements that are in one set but not in the other

// binary operation - operates on only 2 elements so if you have 3 elements you must complete one operation at a time

//Example 1:

// Create a function that takes 2+ arrays and returns an array of their symmetric difference. Returned array must contain only unique values (no duplicates).

function sym() {
    // initialize an empty array to store arguments
    let args = [];
    // loop through arguments and push them to the args array
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    //symDiff function that takes in 2 arrays and returns a new array with the symmetric difference
    function symDiff(arrayOne, arrayTwo) {
        // initialize an empty array to store the symmetric difference
      let result = [];

        // for each item in first array, compare to second array and if not found in second array or in results array, push to result array
      arrayOne.forEach(function(item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
        // for each item in second array, compare to first array and if not found in first array or in results array, push to result array
      arrayTwo.forEach(function(item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
      
      // return the result array
      return result;
    }
  
    // return the result of the symDiff function with the args array
    return args.reduce(symDiff);
  }

sym([1, 2, 3], [5, 2, 1, 4]);

// expected output is [3, 4, 5]