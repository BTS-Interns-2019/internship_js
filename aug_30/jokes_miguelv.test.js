const giveMeAJoke = require("./jokes_miguelv.js");

test('Test 1', () => {
    return expect(typeof giveMeAJoke('https://sv443.net/jokeapi/category/miscellaneous?type=twopart').then((joke) => {
        console.log(joke.saySetup());
    }).resolves.toBe('string')
});
test('Test 2', () => {
    return expect(typeof giveMeAJoke('https://sv443.net/jokeapi/category/miscellaneous?type=twopart').then((joke) => {
        console.log(joke.sayPunchLine());
    }).resolves.toBe('string')
});