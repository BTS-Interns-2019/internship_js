const kSum = require('./ksum.js');

const output = '131151201344081895336534324866';
const output2 = '100';
const output3 = '100000'

describe('Ksum ', () => {
    test('Sumando dos strings como en el kindergarden', () => {
        expect(kSum('131151201344081895330000000000','0006534324866')).toEqual(output);
        expect(kSum('99','1')).toBe(output2);
        expect(kSum('99999','1')).toBe(output3);
    });

});


