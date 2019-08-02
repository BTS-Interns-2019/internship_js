function smallest(str) {
  if (typeof str !== 'string') {
    return 'Please, provide a number or a string of a number';
  }
  let fromIndexMin;
  let fromIndexMax;
  for (let i = 0; i <= 9; i++) {
    if (str.includes(i.toString())) {
      fromIndexMin = str.lastIndexOf(i.toString());
      break;
    }
  }

  for (let i = 9; i >= 0; i--) {
    if (str.includes(i.toString())) {
      fromIndexMax = str.indexOf(i.toString());
      break;
    }
  }

  let replacedMin = str[0];
  let replacedMax = str[str.length - 1];

  let str1 = str.split('') , str2 = str.split('');
  str1[0] = str[fromIndexMin];
  str1[fromIndexMin] = replacedMin;
  str2[str.length - 1] = str[fromIndexMax];
  str2[fromIndexMax] = replacedMax;
  str1 = str1.join('');
  str2 = str2.join('');
  
  return Number.parseInt(str1) > Number.parseInt(str2) ? [str2, fromIndexMax, str.length - 1] : [str1, fromIndexMin, 0];
}

module.exports = smallest;