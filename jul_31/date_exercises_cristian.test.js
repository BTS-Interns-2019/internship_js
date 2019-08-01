const {
    jsonTimes,
    toLazyHuman} = require('./date_excercises_cristian.js');
 
test('Fechas de Json 2018', () => {
    expect(jsonTimes(2018).dates).toEqual([
      '04/13/2018',
      '07/13/2018',
    ]);
  });
date = new Date('2012');  
test('matansas del 2012', () => {
    expect(jsonTimes(2012).dates).toEqual([
        '01/13/2012',
        '04/13/2012',
        '07/13/2012',
    ]);
});

//var a = new Date(2017,00);
//var b = new Date(2018,00);

test('more than 1 year ago', () => {
    expect(toLazyHuman(new Date('2017-01-01T06:00:00.000'),new Date('2018-01-01T06:00:00.000'))).toBe('more than 1 year ago')
  })

  test('in less than 20 years', () => {
    expect(toLazyHuman(new Date('2037-01-01T06:00:00.000'),new Date('2018-01-01T06:00:00.000'))).toBe('in less than 20 years')
  })