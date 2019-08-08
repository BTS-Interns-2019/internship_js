const kSum = require('./ksum');

const output = '131151201344081895336534324866';
const output2 = '100';

describe('Ksum ', () => {

    test('Sumando dos strings como en el kindergarden', () => {
        expect(kSum('131151201344081895330000000000','0006534324866').length).toBe(output);
        expect(kSum('99','1').length).toBe(output2);
    });

});

describe('Ksum ', () => {

    test('Sumando dos strings como en el kindergarden', () => {
        expect(kSum('11422255456222','42588852556222565555').length).toBe(output);
        expect(kSum('99','1').length).toBe(output2);
    });

});
