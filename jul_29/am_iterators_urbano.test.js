let arr= [1]

const forEach = require('./am_iterators_urbano');
test("Test For each", function () {
    expect(forEach(((i)=> console.log(i)),arr)).toBe(1);
});