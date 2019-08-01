const toLazyHuman = require("./date_exercises_miguel.js");

//PRUEBA
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
    //INCLUDE 2 MORE TESTS
  })