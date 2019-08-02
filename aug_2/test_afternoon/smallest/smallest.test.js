const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(1);
})

test('test Smallest 2', function(){
  let response = smallest(911111);
  expect(response[0]).toEqual(111119);
  expect(response[1]).toEqual(5);
  expect(response[2]).toEqual(0);
})

test('test Smallest 3', function(){
  let response = smallest(52489);
  expect(response[0]).toEqual(25948);
  expect(response[1]).toEqual(1);
  expect(response[2]).toEqual(4);
})