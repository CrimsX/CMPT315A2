// Return the count for the number of arrays inside a given array
const countNumberOfArrays = function(arr) {
  let count = 0;

  // Loop through array
  for(let i = 0; i < arr.length; i++) {
    // Checks if array is within array
    if(Array.isArray(arr[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countNumberOfArrays;
