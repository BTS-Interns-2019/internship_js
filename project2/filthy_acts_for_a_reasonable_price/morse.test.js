const morse = require('./morse.js');

const input = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
const input2 = '1100110000000000000011001111110011111100110000001100111111000000110011001100000011001100110000001100000011111100110011';
const nonBinary = 'non binary';
const notEven = '1100111';
const output = 'HEY JUDE';
const output2 = 'I PASSED';

describe('Morse Tests', () => {

    test('Output is "HEY JUDE"', () => {
        expect(morse(input)).toBe(output);
    });

    test('Input is not a binary representation', () => {
        expect(morse(nonBinary)).toBe(nonBinary);
    });

    test('Input is not of even length', () => {
        expect(morse(notEven)).toBe(notEven);
    });

    test('Output is human readable', () => {
        expect(morse(input2)).toBe(output2);
    });

    test('Output is "I PASSED"', () => {
        expect(morse(input2)).toBe(output2);
    });
});
