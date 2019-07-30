const {
    login,
    onlyEven,
    google
} = require('./cp_exercises_urbanog');

test("Test Login different User and pass", function () {
    expect(login("pedro","muzkis")).toBe(false);
});
test("Test Login different User", function () {
    expect(login("pedro","cirilico")).toBe(false);
});
test("Test Login different pass", function () {
    expect(login("joselit025","cirilico")).toBe(false);
});
test("Test Login incorrect type data", function () {
    expect(login("joselit025",145358)).toBe(false);
});
test("Test Login correct user", function () {
    expect(login("joselit025","jos4526")).toBe(true);
});

//only Even
let numberEven=[2,4,8,16,32];
let numberOdd= [1,3,5,15,19];
test("Test Only Evens", function () {
    expect(onlyEven(numberEven)).toBe(numberEven);
});
test("Test Only Evens", function () {
    expect(onlyEven(numberOdd)).toBe(false);
});
test("Test Only Evens", function () {
    expect(onlyEven(1258)).toBe("Solo se pueden ingresar arreglos")
});