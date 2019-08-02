const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
});

test('smallest de 28342585', function(){
  expect(smallest(83425825)).toEqual([28342585, 6, 0]);
});

test('smallest de 911111', function(){
  expect(smallest(911111)).toEqual([111119, 0, 5]);
});

test('smallest de 1000', function(){
  expect(smallest(1000)).toEqual([1, 0, 3]);
});