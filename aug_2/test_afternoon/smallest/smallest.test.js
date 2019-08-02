const smallest = require('./smallest');

test('test smallest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})

test('test smallest2', function(){
  let response = smallest(83425825);
  expect(response[0]).toEqual(28342585);
  expect(response[1]).toEqual(6);
  expect(response[2]).toEqual(0);
})

test('test smallest3', function(){
  let response = smallest(911111);
  expect(response[0]).toEqual(111119);
  expect(response[1]).toEqual(0);
  expect(response[2]).toEqual(5);
})

test('test smallest4', function(){
  let response = smallest(123);
  expect(response[0]).toBe(123)
})