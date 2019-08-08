const fibonacci = require('./fibonacci.js');

const output = 4224696333392304878706725602341482782579852840250681098010280137314308584370130707224123599639141511088446087538909603607640194711643596029271983312598737326253555802606991585915229492453904998722256795316982874482472992263901833716778060607011615497886719879858311468870876264597369086722884023654422295243347964480139515349562972087652656069529806499841977448720155612802665404554171717881930324025204312082516817125n;

describe('Fibonacci Tests', () => {

    test('expect short'), () => {
        expect(fibonacci(5)).toBe(5n)
        expect(fibonacci(6)).toBe(8n)
    }
    test('expect looong', () => {
        expect(fibonacci(2000)).toBe(output);
    });

});
    test('Fibonacci medium',()=>{
        expect(fibonacci(30)).toBe(832040n)
    })
    test('Fibonacci with 3', ()=>{
    expect(fibonacci(3)).toBe(3n)
    })
    test('Fibonacci with 1',()=>{
        expect(fibonacci(1)),toBe(1n)
    })

    test('Fibonacci with 0',()=>{
        expect(fibonacci(0)),toBe(0n)
})