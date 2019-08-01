const avoidingFire = require('./cp_exercise1_estefania.js')

test('blow candles', () => {
  expect(avoidingFire([1,2,3,4,5,6])).toBe(1);
  expect(avoidingFire([6,5,4,3,2,1,2,3,4,5,6])).toBe(2);
  expect(avoidingFire([2,2,2,1])).toBe(3);
  expect(avoidingFire([2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3])).toBe(1);
  expect(avoidingFire([5,5,4,1], [6, 2], [1,2,5,2], [10,10,11,21,4])).toBe(1);
  expect(avoidingFire([4,4,4,4])).toBe(4);
})