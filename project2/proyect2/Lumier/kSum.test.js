const kSum = require('./ksum');

const output = '131151201344081895336534324866';
const output2 = '100';

describe('Morse Tests', () => {

    test('expect HEY JUDE', () => {
        expect(kSum('131151201344081895330000000000','0006534324866')).toBe(output);
        expect(kSum('99','1')).toBe(output2);
        expect(kSum('9','1')).toBe('10');
        expect(kSum('0','0')).toBe('0');
        expect(kSum('1','1')).toBe('2');
        expect(kSum('999','99')).toBe('1098');
        expect(kSum('99','999')).toBe('1098');
        expect(kSum('1234','599')).toBe('1833');
    });

});
