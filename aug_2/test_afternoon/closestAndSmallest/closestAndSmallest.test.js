const closestAndSmallest = require('./closestAndSmallest');

test('Response says that a string of a number should be provided', function(){
  let response = smallest(1001234444992003);
  expect(response).toBe('Please, provide a number or a string of a number');
});
test('Response is an Array', function(){
  let response = smallest('1031234444992000');
  expect(Array.isArray(response)).toBe(true);
});
test('First element of response is the smallest number possible', function(){
  let response = smallest('1001234444992003');
  expect(response[0]).toBe('0001234444992013');
});
test('First element of response is a string', function(){
  let response = smallest('1001234444992003');
  expect(typeof response[0]).toBe('string');
});
test('Second element of response is an integer with the index the number was taken from', function(){
  let response = smallest('1001234444992003');
  expect(Number.isInteger(response[1])).toBe(true);
});
test('Third element of response is an integer with the index inserted', function(){
  let response = smallest('1001234444992003');
  expect(Number.isInteger(response[2])).toBe(true);
});