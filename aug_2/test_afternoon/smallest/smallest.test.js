const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest('103 123 4444 99 2000');
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})
