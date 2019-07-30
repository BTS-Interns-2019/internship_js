let arr= [1,2,3,4]
let arrNames = ["sergio","rabanito","urbanus","pere","powers","marlon"]
const forEach = require('./am_iterators_urbano');
const map = require

test('Test ForEach Print values', () => {
    forEach((elem,i) => {
        expect((elem)).toBe(elem);
    }, arr);
})
// test('Test ForEach UpperCase values', () => {
//     forEach((elem,i) => {
//         expect((elem)).toBe(elem);
//     }, arrNames);
// })
test("Test Foreach", function () {
    forEach((elem, i)=> {expect(elem[i].toUpperCase()).toBe(elem.toUpperCase())},arrNames);
});
