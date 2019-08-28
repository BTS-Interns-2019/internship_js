const {Ninja, Samurai} = require ('./warriors_urbanog')
describe('Test for warriors', () => {
  const ninjaGaiden = new Ninja('Knife');
  const Tanjiro = new Samurai('Iron helm');
  test('Get ninja health', () => {
    expect(ninjaGaiden.healthPoints).toBe(100);
  });
  test('Ninja attacking', () => {
    ninjaGaiden.jutsu(Tanjiro)
    expect(Tanjiro.healthPoints).toBe(80);
  });
  test('Samurai is dead??', () => {
    expect(Tanjiro.isDead).toBe(false);
  });
  test('Samurai healing', () => {
    expect(Tanjiro.heal(20)).toBe(100);
  });
  test('Samurai attaking', () => {
    expect(Tanjiro.breathing(ninjaGaiden)).toBe(false);
  });


});