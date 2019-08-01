const { jsonTimes, toLazyHuman } = require('./dates_exercises_hector');

describe('jsonTimes', () => {
  test(`Returns an object`, () => {
    expect(typeof jsonTimes(2016)).toBe('object');
  });
  test(`Returns an array with the dates`, () => {
    const isArray = Array.isArray(jsonTimes(2016).dates);
    expect(isArray).toBe(true);
  });
  test(`Returns a number with the Friday 13 count`, () => {
    const isInteger = Number.isInteger(jsonTimes(2016).times);
    expect(isInteger).toBe(true);
  });
  
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
});

describe('toLazyHuman', () => {
  test('less than 5 minutes ago', () => {
    expect(toLazyHuman(new Date('2019-07-31T12:00:00.000'), new Date('2019-07-31T12:04:00.100'))).toBe('less than 5 minutes ago')
  })
  test('more than 2 minutes ago', () => {
    expect(toLazyHuman(new Date('2019-07-31T12:00:00.000'), new Date('2019-07-31T12:03:00.000'))).toBe('more than 2 minutes ago')
  })
  test('2 minutes ago', () => {
    expect(toLazyHuman(new Date('2019-07-31T12:00:00.000'), new Date('2019-07-31T12:02:00.000'))).toBe('2 minutes ago')
  })
  test('less than 1 year ago', () => {
    expect(toLazyHuman(new Date('2018-08-31T12:04:00.000'), new Date('2019-07-31T12:00:00.000'))).toBe('less than 1 year ago')
  })
  test('more than 10 years ago', () => {
    expect(toLazyHuman(new Date('2008-08-31T12:04:00.000'), new Date('2019-07-31T12:00:00.000'))).toBe('more than 10 years ago')
  })
  test('in less than 1 minute', () => {
    expect(toLazyHuman(new Date('2019-07-31T12:00:00.100'), new Date('2019-07-31T12:00:00.000'))).toBe('in less than 1 minute')
  })
});