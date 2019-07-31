const jsonTimes = require('./dates_exercises_hector');

// jsonTimes tests
const jsonCases = [
  '2015',
  2025,
  '2014-07-31T21:50:26.432Z',
  new Date()
];

const jsonCountResults = [
  3,
  1,
  1,
  2
];

const jsonDatesResults = [
  ['2/13/2015', '3/13/2015', '11/13/2015'],
  ['6/13/2025'],
  ['6/13/2014'],
  ['9/13/2019', '12/13/2019']
];

for (let i = 0; i < jsonCases.length; i++) {
  test(`Getting the number of Friday 13 in ${jsonCases[i]}`, () => {
    expect(jsonTimes(jsonCases[i]).times).toBe(jsonCountResults[i]);
  })
}

for (let i = 0; i < jsonCases.length; i++) {
  test(`Getting the dates of Friday 13 in ${jsonCases[i]}`, () => {
    expect(jsonTimes(jsonCases[i]).dates).toStrictEqual(jsonDatesResults[i]);
  })
}