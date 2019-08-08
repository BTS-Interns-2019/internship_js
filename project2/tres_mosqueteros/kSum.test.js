const kSum = require('./ksum.js');

const output = '131151201344081895336534324866';
const output2 = '100';
const output3 = '2035';
const output4 = '2201990';

describe("Sum like kindergarden", () => {

    test('expect the sum', () => {
        expect(kSum('131151201344081895330000000000','0006534324866')).toBe(output);
        expect(kSum('99','1')).toBe(output2);
        expect(kSum('1036','999')).toBe(output3);
        expect(kSum('965445','1236545')).toBe(output4);

    });

});

