let arr = [1, 2, 3, 4]
let arrNames = ["sergio", "rabanito", "urbanus", "pere", "powers", "marlon"]
const {
    forEach,
    map,
    filter,
    reduce,
    reduceRight
} = require('./am_iterators_urbano');

test('Test ForEach Print values', () => {
    forEach((elem, i) => {
        return expect(elem).toBe(arr[i]);
    }, arr);
})
// test('Test ForEach UpperCase values', () => {
//     forEach((elem,i) => {
//         expect((elem)).toBe(elem);
//     }, arrNames);
// })
// test("Test Foreach", function () {
//     forEach((elem, i)=> {expect(elem[i].toUpperCase()).toBe(elem.toUpperCase())},arrNames);
// });
