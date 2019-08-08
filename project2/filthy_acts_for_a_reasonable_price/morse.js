/**
 * Transform the input Morse code into a decoded message
 * @param {*} input String with binary numbers to represent a message in Morse code
 */
function morse(input) {
  if (input.match(/[^0-1]/g)) { // Check if input has anything other than 1's and 0's
    return input;
  }

  if (input.length % 2 !== 0) { // Check if input is not of even length (meaning some part of the message will be lost)
    return input;
  }

  const ref = { // Morse code map
    '1100111111': 'A',
    '111111001100110011': 'B',
    '1111110011001111110011': 'C',
    '11111100110011': 'D',
    '11': 'E',
    '110011001111110011': 'F',
    '111111001111110011': 'G',
    '11001100110011': 'H',
    '110011': 'I',
    '11001111110011111100111111': 'J',
    '111111001100111111': 'K',
    '110011111100110011': 'L',
    '11111100111111': 'M',
    '1111110011': 'N',
    '1111110011111100111111': 'O',
    '1100111111001111110011': 'P',
    '11111100111111001100111111': 'Q',
    '11001111110011': 'R',
    '1100110011': 'S',
    '111111': 'T',
    '11001100111111': 'U',
    '110011001100111111': 'V',
    '110011111100111111': 'W',
    '1111110011001100111111': 'X',
    '11111100110011111100111111': 'Y',
    '1111110011111100110011': 'Z',
    '1100111111001111110011111100111111': '1',
    '110011001111110011111100111111': '2',
    '11001100110011111100111111': '3',
    '1100110011001100111111': '4',
    '110011001100110011': '5',
    '1111110011001100110011': '6',
    '11111100111111001100110011': '7',
    '111111001111110011111100110011': '8',
    '1111110011111100111111001111110011': '9',
    '11111100111111001111110011111100111111': '0'
  };

  // Separate words
  const words = input.split('00000000000000');

  // Map each word to decode it
  return words.map(
    word => word.split('000000') // Separate the letters of each word
      .map(letter => ref[letter]) // Create a new array with the decoded letter using the Morse code map
      .join('') // Join the array of letters to create the decoded word
  ).join(' '); // Join the array of decoded words to create the final message
}

module.exports = morse;