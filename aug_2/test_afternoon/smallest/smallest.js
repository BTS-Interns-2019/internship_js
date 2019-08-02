function smallest(str) {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return 'Please, provide a number or a string of a number';
  }

  if (typeof str === 'number') {
    str = str.toString();
  }

  str = str.split('');
  let biggest = 0;
  let biggestIndex = 0;
  let smallest = 0;
  let smallestIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number.parseInt(str[i]) > biggest) {
      biggest = str[i];
      biggestIndex = i;
    }
    if (Number.parseInt(str[i]) < smallest && str[i] !== 0) {
      smallest = str[i];
      smallestIndex = i;
    }
  }


  const resultsBiggest = [];
  const resultsSmallest = [];
  for (let i = 0; i < str.length; i++) {
    let copyBiggest = Array.from(str);
    let numberBiggest = copyBiggest[i];
    copyBiggest[i] = biggest;
    copyBiggest[biggestIndex] = numberBiggest;
    resultsBiggest.push(
      {
        indexMoved: i,
        number: Number.parseInt(copyBiggest.join(''))
      }
    );

    let copySmallest = Array.from(str);
    let numberSmallest = copySmallest[i];
    copySmallest[i] = smallest;
    copySmallest[smallestIndex] = numberSmallest;
    resultsSmallest.push({
      indexMoved: i,
      number: Number.parseInt(copySmallest.join(''))
    });
  }

  let minBiggest = resultsBiggest.map(result => result.number);
  minBiggest = Math.min(...minBiggest);
  let bigIndex;
  for (let obj of resultsBiggest) {
    if (minBiggest === obj.number) {
      bigIndex = obj.indexMoved;
    } 
  }

  let minSmallest = resultsSmallest.map(result => result.number);
  minSmallest = Math.min(...minSmallest);
  let smallIndex;
  for (let obj of resultsBiggest) {
    if (minBiggest === obj.number) {
      smallIndex = obj.indexMoved;
    } 
  }
  return minBiggest > minSmallest ? [minSmallest.toString(), smallestIndex, smallIndex] : [minBiggest.toString(), biggestIndex, bigIndex];
}

module.exports = smallest;