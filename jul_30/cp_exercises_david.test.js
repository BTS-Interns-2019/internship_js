const {
    login,
    onlyEven,
    google,
    evenIndex 
} = require('./cp_exercises_david.js');

test('login de name:"David", password:"contraseña"', function() {
    expect(login("David", "contraseña")).toStrictEqual(true);
});

test('login de name:"Martin", password:"123"', function() {
    expect(login('Martin', '123')).toStrictEqual(true);
});

test('login de name:"Silva", password:"gatito"', function() {
    expect(login('Silva', 'gatitos')).toStrictEqual(false);
});

///
test('onlyEven de [2,4,6,8,10]', function() {
    expect(onlyEven([2,4,6,8,10])).toStrictEqual([2,4,6,8,10]);
});

test('onlyEven de [1,3,5,7,9]', function() {
    expect(onlyEven([1,3,5,7,9])).toStrictEqual(false);
});

test('onlyEven de [1,2,3,4,5]', function() {
    expect(onlyEven([1,2,3,4,5])).toStrictEqual(false);
});

///
test('google de find', function() {
    expect(google("find")).toStrictEqual({name:"find",
    description:"The find method executes the callback function once for each index of the array until it finds one where callback returns a true value.",
    params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
    returning:"The value of the first element in the array that satisfies the provided testing function."});
});

test('google de findIndex', function() {
    expect(google("findIndex")).toStrictEqual({name:"findIndex",
    description:"The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
    params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
    returning:"The first index of the element in the array; -1 if not found."});
});

test('google de every', function() {
    expect(google("every")).toStrictEqual({name:"every",
    description:"The every() method tests whether all elements in the array pass the test implemented by the provided function.",
    params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
    returning:"true if the callback function returns a truthy value for every array element. Otherwise, false."});
});

///
test('evenIndex de [2,4,6,8,10]', function() {
    expect(evenIndex([2,4,6,8,10])).toStrictEqual([0,1,2,3,4]);
});

test('evenIndex de [1,3,5,7,9]', function() {
    expect(evenIndex([1,3,5,7,9])).toStrictEqual([]);
});

test('evenIndex de [1,2,3,4,5]', function() {
    expect(evenIndex([1,2,3,4,5])).toStrictEqual([1,3]);
});