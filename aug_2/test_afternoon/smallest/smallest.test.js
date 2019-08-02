const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})

//2682351
test('test closest1', function(){
  let response = smallest(2682351);
  expect(response[0]).toEqual(1268235);
  expect(response[1]).toEqual(6);
  expect(response[2]).toEqual(0);
})