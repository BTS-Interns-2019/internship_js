const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})


test('test closest 2', function(){
  let response = smallest(9111);
  expect(response[0]).toEqual(1119);
  expect(response[1]).toEqual(0);
  expect(response[2]).toEqual(3);
})


test('test closest1', function(){
  let response = smallest(111);
  expect(response[0]).toEqual(111);
  expect(response[1]).toEqual(0);
  expect(response[2]).toEqual(0);
})

test('test closest1', function(){
  expect(smallest("")).toEqual("error, ingresa un numero");
})

test('test closest1', function(){
  let response = smallest(83425825);
  expect(response[0]).toEqual(28342585);
  expect(response[1]).toEqual(6);
  expect(response[2]).toEqual(0);
})