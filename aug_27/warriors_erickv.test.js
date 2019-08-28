const {
  Samurai,
  Ninja
} = require( './warriors_erickv.js' );

const Katsumoto = new Samurai();
const Masamune = new Samurai();

const Hatori = new Ninja();
const Ishikawa = new Ninja();

describe('Values of Warriors', () => {
  describe('Samurai values', () => {
    test('Health Points', () => {
      expect(Katsumoto.healthPoints).toBe(100)
    });
    test('Shield Points', () => {
      expect(Katsumoto.shieldPoints).toBe(20)
    });
    test('Shield Points', () => {
      expect(Katsumoto.attackPoints).toBe(10)
    });
    test('Weapon', () => {
      expect(Katsumoto.weapon).toBe('Katana')
    });
  });

  describe('Ninja values', () => {
    test('Health Points', () => {
      expect(Hatori.healthPoints).toBe(100)
    });
    test('Shield Points', () => {
      expect(Hatori.shieldPoints).toBe(20)
    });
    test('attack Points', () => {
      expect(Hatori.attackPoints).toBe(20)
    });
    test('Weapon', () => {
      expect(Hatori.weapon).toBe('Kusarigama')
    });
  });
});

describe('<-----Battle phase----->', () => {
  test('Katsumoto strike*3, Hatori HP', () => {
    Katsumoto.attack(Hatori)
    Katsumoto.attack(Hatori)
    Katsumoto.attack(Hatori)
      expect(Hatori.healthPoints).toBe(90)
  });
  test('Hatori jutsu Katsumoto. Katsumoto HP', () => {
    Hatori.jutsu(Katsumoto)
      expect(Katsumoto.healthPoints).toBe(80)
  });
  test('Masamune strikes Hatori with Breathing', () => {
    Masamune.breathing(Hatori)
      expect(Hatori.healthPoints).toBe(65)
  });
  test('Ishikawa and Hatori hits', () => {
    Ishikawa.attack(Katsumoto) 
    Ishikawa.attack(Katsumoto) 
    Ishikawa.attack(Katsumoto) 
    Hatori.attack(Masamune)
    Hatori.attack(Masamune)
      expect(Katsumoto.healthPoints).toBe(20)
      expect(Masamune.healthPoints).toBe(80)
  });
  test('Masamune heals 20pts all Samurai', () => {
    Masamune.healUnit(20);
    expect(Katsumoto.healthPoints).toBe(40)
      expect(Masamune.healthPoints).toBe(100)
  });
  test('Katsumoto kills Hatori, and breathing on Ishikawa', () => {
    Katsumoto.attack(Hatori)
    Katsumoto.attack(Hatori)
    Katsumoto.attack(Hatori)
    Katsumoto.attack(Hatori)
    Katsumoto.breathing(Hatori)
    Katsumoto.breathing(Ishikawa)
    expect(Hatori.healthPoints).toBe(0)
    expect(Hatori.isDead).toBe(true)
    expect(Ishikawa.shieldPoints).toBe(0)
    expect(Ishikawa.healthPoints).toBe(95)
  })
  test('Ishikawa dies, Katsumoto dies', () => {
    Katsumoto.attack(Ishikawa)
    Katsumoto.attack(Ishikawa)
    Katsumoto.attack(Ishikawa)
    Katsumoto.attack(Ishikawa)
    Ishikawa.attack(Katsumoto)
    Ishikawa.attack(Katsumoto)
    Ishikawa.jutsu(Masamune)
    Ishikawa.attack(Masamune)
    Ishikawa.attack(Masamune)
    Masamune.attack(Ishikawa)
    Masamune.attack(Ishikawa)
    Masamune.attack(Ishikawa)
    Masamune.breathing(Ishikawa)
      expect(Masamune.healthPoints).toBe(20)
      expect(Katsumoto.healthPoints).toBe(0)
      expect(Katsumoto.isDead).toBe(true)
      expect(Ishikawa.isDead).toBe(true)
  });
  test('Masamune heals', () => {
    Masamune.heal(50);
      expect(Masamune.healthPoints).toBe(70)
  });
});