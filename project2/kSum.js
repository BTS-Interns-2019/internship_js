// this function will parse a string into an array of
// numbers from 0 to 9 each one removing leading 0s
function parseStringToSum(strNumbers) {
  return strNumbers.replace(/^[0]+/g, ' ')
    .trim()
    .split('')
    .map(character => ((parseInt(character, 10) >= 0) ? parseInt(character, 10) : 0))
    .reverse();
}

function ksum(str1, str2) {
  // Validate only numbers as input
  if ((!parseInt(str1, 10) && !parseInt(str2, 10)) && (str1 !== '0' || str2 !== '0')) {
    return 'Input error';
  }

  const a = parseStringToSum(str1);
  const b = parseStringToSum(str2);


  const result = [];
  let pos = 0; let
    carry = 0;

  while (pos <= a.length || pos <= b.length) {
    if (a[pos] === undefined && b[pos] === undefined) {
      result[pos] = carry;
    } else if (a[pos] === undefined) {
      result[pos] = carry + b[pos];
    } else if (b[pos] === undefined) {
      result[pos] = carry + a[pos];
    } else {
      result[pos] = carry + a[pos] + b[pos];
    }
    carry = 0;

    if (result[pos] > 9) {
      carry = 1;
      result[pos] %= 10;
    }
    pos += 1;
  }
  const str = result.reverse().join('');

  return (str.charAt(0) === '0') ? str.substring(1) : str;
}

module.exports = ksum;
