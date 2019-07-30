//login() Function
test('Valid Input', function(){
    expect(login('marlon','pass1996')).toBe(true);
})

test('Invalid Input', function(){
    expect(login('marlon','pass')).toBe(false);
})

test('Number Input', function(){
    expect(login(20, 22)).toBe(false);
})

test('Boolean Input', function(){
    expect(login(true,true)).toBe(false);
})

test('Undefined Input', function(){
    expect(login()).toBe(false);
})

//onlyEven() Function
test('Even Numbers', function(){
    expect(onlyEven([2,4,6,8])).toStrictEqual([2,4,6,8]);
})

test('Odd Number', function(){
    expect(onlyEven([2,4,3,8])).toBe(false);
})

test('Input String', function(){
    expect(onlyEven([2,'hi',6,8])).toBe(false);
})

test('Empty Array', function(){
    expect(onlyEven([])).toBe(false);
})

test('Undefined Input', function(){
    expect(onlyEven()).toBe(false);
})

//google() Function

/////////////////////////////////////
const {
    login, onlyEven, google, evenNumbers
} = require('./cp_exercices_marlont');

