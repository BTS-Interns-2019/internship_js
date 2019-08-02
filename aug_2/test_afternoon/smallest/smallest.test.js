const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})
test('test closest2', function(){
  expect(smallest(83425825)).toEqual([28342585, 6, 0]);
})
test('test closest3', function(){
  expect(smallest(911111)[2]).toEqual(5);
})
test('test closest string', function(){
  expect(smallest('911111')).toEqual([111119, 0, 5]);
})
test('test closest just one', function(){
  expect(smallest(8)).toEqual([8,0,0]);
})
test('test closest empty', function(){
  expect(smallest('')).toEqual([]);
})
test('test closest zero', function(){
  expect(smallest(0)).toEqual([0,0,0]);
})
test('test closest none', function(){
  expect(smallest()).toEqual([]);
})