function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The parameter passed is not an array");
  }

  return arr.reduce((acc, current) => Array.isArray(current) ? 
    acc.concat(flattenArray(current)) : 
    acc.concat(current), []);
}

module.exports = flattenArray;