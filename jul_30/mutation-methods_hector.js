function sort(arr, callback) {
  let undefArray = [];
  arr.forEach((elem, index, arr) => {
    if (typeof elem === 'undefined') {
      undefArray.push(...arr.splice(index, 1));
    }
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[j + 1] !== 'undefined' && arr[j + 1] !== null) {
        let comparison = !callback ? 
          arr[j].toString() > arr[j + 1].toString() : 
          callback(arr[j], arr[j + 1]) > 0;

        if (comparison) {
          let holder;
          holder = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = holder;
        } 
      }
    }
  }

  arr.push(...undefArray);
  return arr;
}

function generateSeed(arr) {
  return Array.from(arr).sort(() => Math.floor(Math.random() * (3) + (-1)));
}

function encrypt(baseAlphabet, seed, message) {
  return message.toLowerCase()
    .split('')
    .map(element => baseAlphabet.indexOf(element) === -1 ? element : seed[baseAlphabet.indexOf(element)])
    .join('');
}

function decrypt(baseAlphabet, seed, encryptedMessage) {
  return encryptedMessage.toLowerCase()
    .split('')
    .map(element => seed.indexOf(element) === -1 ? element : baseAlphabet[seed.indexOf(element)])
    .join('');
}

module.exports = {
  sort,
  generateSeed,
  encrypt,
  decrypt,
};