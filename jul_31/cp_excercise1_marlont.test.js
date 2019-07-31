const avoidingFire = require('./cp_excercise1_marlont');

test('1 Array input', function(){
  expect(avoidingFire([3,1,2,4,8,6,6])).toBe(1);
})

test('+1 Array input', function(){
    expect(avoidingFire([3,1,2,4,8,6,6],[8,8,2,6,3],[4,5,6,7,8])).toBe(4);
})

test('Empty Array', function(){
    expect(avoidingFire([],[],[])).toBe(0);
})

test('Undefined Input', function(){
    expect(avoidingFire()).toBe(0);
})