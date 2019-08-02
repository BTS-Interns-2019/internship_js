function smallest(str) {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return 'Please, provide a number or a string of a number';
  }

  if (typeof str === 'number') {
    str = str.toString();
  }

  let weight = [];
  let acc = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    weight.push([str[i], 1 * acc]);
    acc *= 10;
  }

  let biggest = [0, 1];
  let biggestIndex;
  let smallest = [weight[0][0], weight[0][1]];
  weight.forEach((num, index) => {
    if (num[1] > biggest[1] && num[0] !== '0' && index <= weight.length - 1) {
      biggest = [num[0], num[1]];
      biggestIndex = index;
    }
  });

  

  str = str.substring(0, biggestIndex) + smallest[0] + str.substring(biggestIndex);
  // str[str.length - 1] = biggest;
  console.log(str);
  // return [str1, fromIndexMin, 0];
}

smallest('1031234444992000');

module.exports = smallest;