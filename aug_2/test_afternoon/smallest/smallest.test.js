const smallest = require('./smallest.js');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})

test('test closest1', function(){
  let response = smallest(264875);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(1);
})

test('test closest1', function(){
  let response = smallest(-264875);
  expect(response[0]).toEqual(NaN);
  expect(response[1]).toEqual(-1);
  expect(response[2]).toEqual(1);
})