function hasTargetSum(array, target) {
  // Assign index of Array
  for (let i = 0; i < array.length; i++) {
    // Assign variable for other numbers
    for (let j = i + 1; j < array.length; j++) {
      // Check if addition of index an other number = target
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  O(n²)
  
*/

/* 
  Add your pseudocode here
  
  1. Loop through each integer in array
  2. Assign a starting point to the array
  3. Check if adding the index and other numbers in the array is equal to target
  4. Return true if so
  5. Else return false

*/

/*
  Add written explanation of your solution here

  Make a function taht takes in two arguments. One that is an array of integers and another
  that is the targeted integer. If any of the integers in the array adds up to the target integer,
  return true. Otherwise, return false.

  Example:
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)
  => true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
