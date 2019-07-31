const avoidingFire = require('./cp_exercise1_hector');

const cases = [
  [1,2,3,4,5,6],
  [6,5,4,3,2,1,2,3,4,5,6],
  [2,2,2,1],
  [[2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3]]
];

const results = [1, 2, 3, 1];

for (let i = 0; i < cases.length; i++) {
  test(`Blowing candles case ${i + 1} with ${cases[i]}`, () => {
    expect(avoidingFire(cases[i])).toBe(results[i]);
  });
}