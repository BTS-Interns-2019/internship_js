const kSum = require('./kSum');

const output = '131151201344081895336534324866';
const output2 = '100';
const output3 = '6941';


describe('Ksum Tests', () => {

    test('expect sum', () => {
        expect(kSum('131151201344081895330000000000','0006534324866')).toBe(output);
        expect(kSum('99','1')).toBe(output2);
        expect(kSum('44','6897')).toBe(output3);  
    });

    test('just string', () => {
        expect(typeof(kSum('99','1'))).toBe('string');
    });
});