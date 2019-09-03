const requireGlob = require('require-glob');
const modules = requireGlob.sync(['./date_exercises_ricardom.js']);

console.log(modules[Object.keys(modules)[0]])

const {
  jsonTimes,
  toLazyHuman,
} = modules[Object.keys(modules)[0]];
// } = require('./date_exercises_braulior');



describe('jsonTimes', () => {
  const date = new Date(2019, 9);
  const jsonTimesIn2019 = 2;

  test('returns an object', () => {
    expect(typeof jsonTimes(date)).toBe('object');
  })

  test('returns the number of times Json is coming', () => {
    expect(jsonTimes(date).times).toBe(jsonTimesIn2019);
  })

  test('returns the number of times Json is coming in an array', () => {
    expect(jsonTimes(date).dates.length).toBe(jsonTimesIn2019);
  })

  test('the array has the right values', () => {
    expect(jsonTimes(date).dates).toEqual([
      '09/13/2019',
      '12/13/2019',
    ]);
  });

  test('can handle number', () => {
    expect(jsonTimes(2019).times).toBe(jsonTimesIn2019);
  })

  test('can handle a year string', () => {
    expect(jsonTimes('2019').times).toBe(jsonTimesIn2019);
  })

  test('can handle an ISO8601 string', () => {
    expect(jsonTimes('2019-01-02').times).toBe(jsonTimesIn2019);
  })
})

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
})