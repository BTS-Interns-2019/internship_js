const {
    forEach,
    map,
    filter,
    reduce,
    reduceRight
  } = require('./am_iterators_estefania.js');


function forEach1(cv, index, arr) {
    return cv + 1;
}
  test('forEach 1', function(){
    expect(forEach(forEach1, [1,2,3,4,5])).toBe(undefined);
});
   
function forEach2(cv, index, arr) {
  return cv * 5;
}
test('forEach 2', function(){
  expect(forEach(forEach2, [1,2,3,4,5])).toBe(undefined);
});

function forEach3(cv, index, arr) {
  return cv % 2;
}
test('forEach 3', function(){
  expect(forEach(forEach3, [1,2,3,4,5])).toBe(undefined);
});

