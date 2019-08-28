const Person = require('./warriors_davids.js');
const Ninja = require('./warriors_davids.js');
const Samurai = require('./warriors_davids.js');

describe('Ninja', () =>{
  const ninjaTurtle = new Ninja();

  test('healthPoints', () => {
    expect(ninjaTurtle.healthPoints).toEqual(100);
  });

  test('shieldPoints', () => {
    expect(ninjaTurtle.shieldPoints).toEqual(20);
  });

  test('isDead', () => {
    expect(ninjaTurtle.isDead).toEqual(false);
  });

});

describe('Samurai', () =>{
  const afroSamurai = new Samurai();

  test('healthPoints', () => {
    expect(afroSamurai.healthPoints).toEqual(100);
  });

  test('shieldPoints', () => {
    expect(afroSamurai.shieldPoints).toEqual(20);
  });

  test('isDead', () => {
    expect(afroSamurai.isDead).toEqual(false);
  });

});