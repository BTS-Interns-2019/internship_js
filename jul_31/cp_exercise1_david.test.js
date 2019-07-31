const {
    avoidingFire
} = require('./cp_exercise1_david.js');

test('avoidingFire de [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]', function() {
    expect(avoidingFire([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toStrictEqual(2);
});

test('avoidingFire de [1,2,3,4,5,6]', function() {
    expect(avoidingFire([1,2,3,4,5,6])).toStrictEqual(1);
});


test('avoidingFire de [6,5,4,3,2,1,2,3,4,5,6]', function() {
    expect(avoidingFire([6,5,4,3,2,1,2,3,4,5,6])).toStrictEqual(2);
});

test('avoidingFire de [2,2,2,1]', function() {
    expect(avoidingFire([2,2,2,1])).toStrictEqual(3);
});

test('avoidingFire de [[2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3]]', function() {
    expect(avoidingFire([[2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3]])).toStrictEqual(1);
});