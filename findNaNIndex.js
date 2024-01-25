// Find all the indexes where NaN is found in a given array of numbers and NaN
const findNaNIndex = function(arr) {
  const index = [];

  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    // Checks if NaN is found
    if(isNaN(arr[i])) {
      index.push(i);
    }
  }
  return index;
}

module.exports = findNaNIndex;
