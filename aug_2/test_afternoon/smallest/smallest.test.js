const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})

test('test smallest1', function(){
  let response = smallest(958165);
  expect(response[0]).toEqual(195865);
  expect(response[1]).toEqual(3);
  expect(response[2]).toEqual(0);
})

test('test smallest2', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})
test('test smallest3', function(){
  let response = smallest(2657743);
  expect(response[0]).toEqual(2365774);
  expect(response[1]).toEqual(6);
  expect(response[2]).toEqual(1);
})
test('test smallest4', function(){
  let response = smallest(183456789);
  expect(response[0]).toEqual(134567889);
  expect(response[1]).toEqual(1);
  expect(response[2]).toEqual(6);
})
test('test smallest5', function(){
  let response = smallest(987654321);
  expect(response[0]).toEqual(198765432);
  expect(response[1]).toEqual(8);
  expect(response[2]).toEqual(0);
})
test('test smallest5', function(){
  let response = smallest(911111);
  expect(response[0]).toEqual(111119);
  expect(response[1]).toEqual(0);
  expect(response[2]).toEqual(6);
})