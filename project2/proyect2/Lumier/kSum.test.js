const kSum = require('./ksum');

const output = '131151201344081895336534324866';
const output2 = '100';

describe('Morse Tests', () => {

    test('expect HEY JUDE', () => {
        expect(kSum('131151201344081895330000000000','0006534324866').length).toBe(output);
        expect(kSum('99','1').length).toBe(output2);
    });

});
