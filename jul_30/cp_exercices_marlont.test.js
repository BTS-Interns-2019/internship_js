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

//evenNumbers() Function
test('All the numbers are even', function(){
    expect(evenNumbers([2,4,6,8])).toBe([0,1,2,3]);
})

test('Even and Odd Numbers', function(){
    expect(evenNumbers([2,4,5,6,7,8])).toBe([0,1,3,5]);
})

test('All the numbers are odd', function(){
    expect(evenNumbers([1,3,5,7])).toBe([]);
})

test('Empty Array', function(){
    expect(evenNumbers([])).toBe([]);
})

test('Undefined Input', function(){
    expect(evenNumbers()).toBe([]);
})

/////////////////////////////////////
const {
    login, onlyEven, google, evenNumbers
} = require('./cp_exercices_marlont');

