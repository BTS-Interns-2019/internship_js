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


test('test closest2', function(){
  let response = closestAndSmallest('101 200 101');
  expect(response).toEqual([[2, 0, 101], [2, 1, 200]]);
})

test('test closest3', function(){
  let response = closestAndSmallest('80 71 62 53');
  expect(response).toEqual([[8, 0, 80], [8, 1, 71]]);
})

test('test closest4', function(){
  let response = closestAndSmallest('444 2000 445 544');
  expect(response).toEqual([[13, 2, 445], [13, 3, 544]]);
})

test('test closest5', function(){
  let response = closestAndSmallest('239382 162 254765 182 485944 468751 49780 108 54');
  expect(response).toEqual([[9, 1, 162], [9, 7, 108]]);
})