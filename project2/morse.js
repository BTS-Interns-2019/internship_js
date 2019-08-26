function getMorse() {
  return {
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    '-': 'T',
    '--': 'M',
    '---': 'O',
    '-----': '0',
    '----.': '9',
    '---..': '8',
    '--.': 'G',
    '--.-': 'Q',
    '--..': 'Z',
    '--...': '7',
    '-.': 'N',
    '-.-': 'K',
    '-.--': 'Y',
    '-.-.': 'C',
    '-..': 'D',
    '-..-': 'X',
    '-...': 'B',
    '-....': '6',
    '.': 'E',
    '.-': 'A',
    '.--': 'W',
    '.---': 'J',
    '.----': '1',
    '.--.': 'P',
    '.-.': 'R',
    '.-..': 'L',
    '..': 'I',
    '..-': 'U',
    '..---': '2',
    '..-.': 'F',
    '...': 'S',
    '...-': 'V',
    '...--': '3',
    '....': 'H',
    '....-': '4',
    '.....': '5',
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
  };
}
function CreateMorseBits(words) {
  // equivalences of Morse code and alphabet
  const morse = getMorse();
  const morseLike = words.toUpperCase().split(' ')
    .map(word => word
      .split('')
      .map(character => morse[character].split('').join(' '))
      .join('  '))
    .join('   ');

  return morseLike.replace(/( ){3}/g, '00000000000000')
    .replace(/( ){2}/g, '000000')
    .replace(/( ){1}/g, '00')
    .replace(/(-)/g, '111111')
    .replace(/(.)/g, '11');
}

// DecodeMorseBits
function DecodeMorseBits(bits) {
  // equivalences of Morse code and alphabet
  const morse = getMorse();

  const morseLike = bits.replace(/(0){14}/g, '  ')
    .replace(/(0){6}/g, ' ')
    .replace(/(1){6}/g, '-')
    .replace(/(1){2}/g, '.')
    .replace(/(0){2}/g, '');

  return morseLike.split('  ').map(word => word
    .split(' ')
    .map(char => morse[char])
    .join(''))
    .join(' ');
}


module.exports = DecodeMorseBits;
