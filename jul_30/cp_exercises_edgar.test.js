test("Test Login different User and pass", function () {

    expect(login("peter","mu56is")).toBe(false);

});

test("Test Login different User", function () {

    expect(login("luis","94585")).toBe(false);

});

test("Test Login different pass", function () {

    expect(login("pablo","6547889")).toBe(false);

});

test("Test Login incorrect type data", function () {

    expect(login("angel",768624)).toBe(false);

});

test("Test Login correct user", function () {

    expect(login("edgar","ed12")).toBe(true);

});



//even

let numberEven=[24,52,88,100,66,32];

let numberOdd= [7,9,11,15,17,19];

test("Test Only Evens", function () {

    expect(even(numberEven)).toBe(numberEven);

});

test("Test Only Evens", function () {

    expect(even(numberOdd)).toBe(false);

});
/*
test("Test Only Evens", function () {

    expect(even(1258)).toBe("Solo se pueden ingresar datos de tipo array")

});*/
/*
test("google", function () {

    expect(google()).toEqual("")*/

const {
    login,
    even
} = require('./cp_exercises_edgar');