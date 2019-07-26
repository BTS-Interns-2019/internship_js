function unzipString(zippedString) {
  zippedString = zippedString.split('');
  let copyZipped = [];
  let repeatNumber = 1;
  for (let i = 0; i < zippedString.length; i++) {
    if (
      zippedString[i + 1] &&
      zippedString[i + 1].match(/[a-z]/i) &&
      Number.isInteger(parseInt(zippedString[i], 10))
    ) {
      repeatNumber = parseInt(zippedString[i]);
      continue;
    }
    const repeatedChars = zippedString[i].repeat(repeatNumber).split('');
    copyZipped.push(...repeatedChars);
  }
  return copyZipped.filter(elem => elem.match(/[a-z]/i)).join('');
}

module.exports = unzipString;