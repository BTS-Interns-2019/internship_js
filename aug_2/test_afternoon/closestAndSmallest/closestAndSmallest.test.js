const closestAndSmallest = require('./closestAndSmallest');

test('test closest1', function(){
  let response = closestAndSmallest('103 123 4444 99 2000');
  expect(response[0][0]).toEqual(2);
  expect(response[0][1]).toEqual(4);
  expect(response[0][2]).toEqual(2000);
  expect(response[1][0]).toEqual(4);
  expect(response[1][1]).toEqual(0);
  expect(response[1][2]).toEqual(103);
})

test('Error input', function(){
  expect(closestAndSmallest(2)).toEqual([]);
})