const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})

test('test closest1', function(){
  let response = smallest(83425825);
  expect(response[0]).toEqual(28342585);
  expect(response[1]).toEqual(6);
  expect(response[2]).toEqual(0);
})

test('test closest1', function(){
  let response = smallest(911111);
  expect(response[0]).toEqual(111119);
  expect(response[1]).toEqual(0);
  expect(response[2]).toEqual(6);
})

test('test closest1', function(){
  let response = smallest(3472898);
  expect(response[0]).toEqual(234798);
  expect(response[1]).toEqual(3);
  expect(response[2]).toEqual(0);
})

test('test closest1', function(){
  let response = smallest(3241566);
  expect(response[0]).toEqual(13241566);
  expect(response[1]).toEqual(3);
  expect(response[2]).toEqual(0);
})

