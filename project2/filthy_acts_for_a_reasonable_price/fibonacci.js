/**
 * Calculate the fibonacci number in the position given. Large numbers are expected.
 * @param {*} position Position of the Fibonacci number desired
 * @param {*} fibObj  Object to store the calculations of previous positions
 */
function fibonacci(position, fibObj = {}) {
  // To be able to obtain a large result for Fibonacci, we need to transform the position into a BigInt
  position = BigInt(position);

  // If the Fibonacci number of the input position given is already stored and calculated, return it
  if (fibObj[position]) {
    return fibObj[position];
  }

  if (position <= 1) { // If the input position is 0 or 1, return 1 as the result;
    return 1;
  }

  /* This part stores the result of recursive Fibonacci calls to have them available in case
  ** the input position has not been calculated
  */
  return fibObj[position] = 
    BigInt(fibonacci(position - BigInt(1), fibObj)) + // 
    BigInt(fibonacci(position - BigInt(2), fibObj));
}

module.exports = fibonacci;