const fibonacci = require('./fibonacci');

let output = '4224696333392304878706725602341482782579852840250681098010280137314308584370130707224123599639141511088446087538909603607640194711643596029271983312598737326253555802606991585915229492453904998722256795316982874482472992263901833716778060607011615497886719879858311468870876264597369086722884023654422295243347964480139515349562972087652656069529806499841977448720155612802665404554171717881930324025204312082516817125';

describe('Fibonacci Tests', () => {
    test('expect short', () => {
        expect(fibonacci(5)).toEqual(BigInt(8));
        expect(fibonacci(6)).toEqual(BigInt(13));
    });

    test('expect looong', () => {
        expect(fibonacci(2000)).toEqual(BigInt(output));
    });
});

describe('Our Fibonacci tests',()=>{

    test("Output must be a bigint", ()=>{
        expect(typeof fibonacci(10)).toEqual('bigint');
    });
    test("Output must be the tenth Fibonacci", ()=>{
        expect(fibonacci(10)).toEqual(BigInt(89));
    });
});
