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

    test('expect the sum', () => {
        const output = "157659425125824405803858286696577";
        const output2 = "1000";
        expect(kSum('93784735753254593429238459234595','63874689372569812374619827461982')).toBe(output);
        expect(kSum('999','1')).toBe(output2);
    });
    
    test('expect the sum', () => {
        const output = "9334299525531648942012";
        expect(kSum('9334287432322340000000','12093209308942012')).toBe(output);
    });

    test('expect the sum', () => {
        const output2 = "1000";
        expect(kSum('999','1')).toBe(output2);
    });

    test('expect the sum', () => {
        const output2 = "10000"
        expect(kSum('9999','1')).toBe(output2);
    });
});
