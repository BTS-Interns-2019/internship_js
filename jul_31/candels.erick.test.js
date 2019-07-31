const avoidingFire = require("./candels.erick")

test('blow candles', () => {
    expect(avoidingFire([1,2,3,4,5,6])).toBe(1);
    expect(avoidingFire([6,5,4,3,2,1,2,3,4,5,6])).toBe(2);
    expect(avoidingFire([2,2,2,1])).toBe(3);
    expect(avoidingFire([2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3])).toBe(1);
    expect(avoidingFire([7,4,1,8,5,2,9,6,3,8,5])).toBe(1)
    expect(avoidingFire([1],[1,2],[7,9,8,4,7,2,5,4,3])).toBe(2)
  })