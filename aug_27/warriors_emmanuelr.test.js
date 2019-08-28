const {
  Ninja,
  Samurai,
} = require('./warriors_emmanuelr');

const ninja1 = new Ninja();
const ninja2 = new Ninja();
const samurai1 = new Samurai();
const samurai2 = new Samurai();
const samurai3 = new Samurai();

test('Valores iniciales', () => {
  expect(ninja1.attackPoints).toBe(20);
  expect(ninja1.healthPoints).toBe(100);
  expect(ninja1.shieldPoints).toBe(20);
  expect(ninja1.isDead).toBe(false);
  expect(samurai1.attackPoints).toBe(10);
  expect(samurai1.healthPoints).toBe(100);
  expect(samurai1.shieldPoints).toBe(20);
  expect(samurai1.isDead).toBe(false);
});

test('healt', () => {
  expect(ninja1.heal(20)).toBe(120);
  expect(samurai1.heal(5)).toBe(105);
});

test('attack to reduce shield and is dead', () => {
  expect(samurai1.shieldPoints).toBe(20);
  expect(ninja1.attack(samurai1)).toBe(false);
  // samurai tenia 105 y 20 de escudo, perdió  20
  expect(samurai1.shieldPoints).toBe(0);
  expect(samurai1.healthPoints).toBe(105);

  // ahora ataca al ninja
  expect(ninja1.shieldPoints).toBe(20);
  expect(samurai1.attack(ninja1)).toBe(false);
  // ninja tenia 120 y 20 de escudo, perdió  10
  expect(ninja1.shieldPoints).toBe(10);
  expect(ninja1.healthPoints).toBe(120);
});

test('jutsu', () => {
  expect(samurai1.healthPoints).toBe(105);
  expect(samurai1.shieldPoints).toBe(0);
  ninja1.jutsu(samurai1);
  expect(samurai1.shieldPoints).toBe(0);
  expect(samurai1.healthPoints).toBe(65);
});

test('breathing to reduce shield and health', () => {
  expect(ninja1.healthPoints).toBe(120);
  expect(ninja1.shieldPoints).toBe(10);
  samurai1.breathing(ninja1);
  expect(ninja1.shieldPoints).toBe(0);
  expect(ninja1.healthPoints).toBe(105);
});

test('heal unit', () => {
  expect(ninja2.healthPoints).toBe(100);
  expect(samurai2.healthPoints).toBe(100);
  expect(samurai3.healthPoints).toBe(100);
  samurai1.healUnit(10);
  expect(ninja2.healthPoints).toBe(100);
  expect(samurai2.healthPoints).toBe(110);
  expect(samurai3.healthPoints).toBe(110);
});

test('kill a samurai', () => {
  expect(ninja1.healthPoints).toBe(105);
  samurai1.breathing(ninja1);
  samurai1.breathing(ninja1);
  samurai1.breathing(ninja1);
  expect(samurai1.breathing(ninja1)).toBe(false);
  expect(ninja1.healthPoints).toBe(5);
  expect(samurai1.breathing(ninja1)).toBe(true);
  expect(ninja1.healthPoints).toBe(0);
});
