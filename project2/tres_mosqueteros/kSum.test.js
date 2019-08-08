const kSum = require('./ksum');

const output = '131151201344081895336534324866';
const output2 = '100';

describe("Sum like kindergarden", () => {

    test('expect the sum', () => {
        expect(kSum('131151201344081895330000000000','0006534324866')).toBe(output);
        expect(kSum('99','1')).toBe(output2);
    });

});
