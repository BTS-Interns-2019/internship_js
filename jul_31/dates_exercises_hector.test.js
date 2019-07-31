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
  ['Fri, 13 Jun 2025 05:00:00 GMT'],
  ['Fri, 13 Jun 2014 05:00:00 GMT'],
  ['Fri, 13 Sep 2019 05:00:00 GMT', 'Fri, 13 Dec 2019 06:00:00 GMT']
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