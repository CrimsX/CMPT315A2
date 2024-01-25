// Return true or false if an array is a factor chain or not
const isArrayFactorChain = function(arr) {
  // Loop through array
  for (let i = 0; i < arr.length - 1; i++) {
    // Check if factor chain
    if (arr[i + 1] % arr[i] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isArrayFactorChain;
