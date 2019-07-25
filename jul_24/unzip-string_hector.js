function unzipString(zippedString) {
  zippedString = zippedString.split('');
  let copyZipped = zippedString;
  for (let i = 0; i < zippedString.length; i++) {
    // check if element is a number and check if next element is a letter
    if (!isNaN(parseInt(zippedString[i], 10)) && zippedString[i + 1].match(/[a-z]/i)) {
      // create array with repeated next char
      const repeatedChar = zippedString[i + 1].repeat(parseInt(zippedString[i])).split('');
      copyZipped.splice(i + 1, 1); // delete number element
      copyZipped.splice(i, 1, ...repeatedChar); // insert in array the array of repeated chars
    }
  }
  return copyZipped.filter(elem => elem.match(/[a-z]/i)).join('');
}

module.exports = unzipString;