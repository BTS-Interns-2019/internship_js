let fibonacci = (function fibonacci(){
  let dictionary = [0n,1n,1n,2n,3n,5n,8n,13n,21n,34n,55n,89n,144n,233n,377n,610n,987n,1597n,2584n]
  return function(ni) {
    function internFib(n) {
      if(dictionary[n] === undefined) {
        dictionary[n] = internFib(n-1) + internFib(n-2)
      }
      return dictionary[n]
    }

    // avoid max call stack
    while(dictionary.length < Math.abs(ni)){
      internFib(dictionary.length + 10)
    }

    return internFib(Math.abs(ni))
  }
})()


function CreateMorseBits(words) {
  // equivalences of Morse code and alphabet
  const morse = {
    "0": "-----","1": ".----","2": "..---","3": "...--","4": "....-","5": ".....","6": "-....","7": "--...","8": "---..",
    "9": "----.","-": "T","--": "M","---": "O","-----": "0","----.": "9","---..": "8","--.": "G","--.-": "Q","--..": "Z","--...": "7",
    "-.": "N","-.-": "K","-.--": "Y","-.-.": "C","-..": "D","-..-": "X","-...": "B","-....": "6",".": "E",".-": "A",".--": "W",
    ".---": "J",".----": "1",".--.": "P",".-.": "R",".-..": "L","..": "I","..-": "U","..---": "2","..-.": "F","...": "S",
    "...-": "V","...--": "3","....": "H","....-": "4",".....": "5","A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".",
    "F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.","O": "---","P": ".--.",
    "Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","V": "...-","W": ".--","X": "-..-","Y": "-.--","Z": "--.."
  }
  let morseLike = words.toUpperCase().split(' ')
      .map(word => word
        .split('')
        .map(character => morse[character].split('').join(' '))
        .join('  ')
      )
      .join('   ')

  return morseLike.replace(/(\ ){3}/g, '00000000000000')
      .replace(/(\ ){2}/g, '000000')
      .replace(/(\ ){1}/g, '00')
      .replace(/(\-)/g, '111111')
      .replace(/(\.)/g, '11');
}

function DecodeMorseBits(bits) {
  // equivalences of Morse code and alphabet
  const morse = {
    "0": "-----","1": ".----","2": "..---","3": "...--","4": "....-","5": ".....","6": "-....","7": "--...","8": "---..",
    "9": "----.","-": "T","--": "M","---": "O","-----": "0","----.": "9","---..": "8","--.": "G","--.-": "Q","--..": "Z","--...": "7",
    "-.": "N","-.-": "K","-.--": "Y","-.-.": "C","-..": "D","-..-": "X","-...": "B","-....": "6",".": "E",".-": "A",".--": "W",
    ".---": "J",".----": "1",".--.": "P",".-.": "R",".-..": "L","..": "I","..-": "U","..---": "2","..-.": "F","...": "S",
    "...-": "V","...--": "3","....": "H","....-": "4",".....": "5","A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".",
    "F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.","O": "---","P": ".--.",
    "Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","V": "...-","W": ".--","X": "-..-","Y": "-.--","Z": "--.."
  }

  let morseLike = bits.replace(/(0){14}/g, '  ')
      .replace(/(0){6}/g, ' ')
      .replace(/(1){6}/g, '-')
      .replace(/(1){2}/g, '.')
      .replace(/(0){2}/g, '');

  return morseLike.split('  ').map(word => word
      .split(' ')
      .map(char => morse[char])
      .join('')
    )
    .join(' ')
}


// this function will parse a string into an array of numbers from 0 to 9 each one removing leading 0s
function parseStringToSum(strNumbers) {
  return strNumbers.replace(/^[0]+/g, ' ').trim().split('').map(character => (parseInt(character) >= 0)? parseInt(character) : 0 ).reverse()
}

function ksum(a,b) {
  // Validate only numbers as input
  if((!parseInt(a) && !parseInt(b)) && (a !== '0' || b !== '0')) {
    return "Input error"
  }

  a = parseStringToSum(a)
  b = parseStringToSum(b)


  let result = [];
  let pos = 0, carry = 0;

  while(pos <= a.length || pos <= b.length) {

    if(a[pos] === undefined && b[pos] === undefined) {
      result[pos] = carry
    } else if(a[pos] === undefined) {
      result[pos] = carry + b[pos]
    } else if(b[pos] === undefined) {
      result[pos] = carry + a[pos]
    } else {
      result[pos] = carry + a[pos] + b[pos]
    }
    carry = 0

    if(result[pos] > 9) {
      carry = 1
      result[pos] = result[pos]%10;
    }
    pos++
  }
  let str = result.reverse().join('')

  return (str.charAt(0) === '0')? str.substring(1):str
}
