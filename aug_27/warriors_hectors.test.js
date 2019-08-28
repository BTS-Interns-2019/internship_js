const { Ninja, Samurai } = require('./warriors_hectors');

test('Ninja gets killed', () => {
  // ninjas
  const ninjaDonatello = new Ninja('Katana');

  // samurais
  const samuraiMasamune = new Samurai('Kozane');
  const samuraiMuramasa = new Samurai('Tosei-gusoku');  

  samuraiMasamune.breathing(ninjaDonatello);
  samuraiMuramasa.breathing(ninjaDonatello);
  samuraiMasamune.breathing(ninjaDonatello);
  samuraiMuramasa.breathing(ninjaDonatello);
  samuraiMasamune.attack(ninjaDonatello);
  samuraiMuramasa.attack(ninjaDonatello);
  samuraiMasamune.attack(ninjaDonatello);
  samuraiMuramasa.attack(ninjaDonatello);
  expect(ninjaDonatello.isDead).toBe(true);
});

test('Ninja clan is healed', () => {
  // ninjas
  const ninjaGaiden = new Ninja('Sai');
  const ninjaDonatello = new Ninja('Katana');

  // samurais
  const samuraiMasamune = new Samurai('Kozane');
  const samuraiMuramasa = new Samurai('Tosei-gusoku');

  samuraiMasamune.breathing(ninjaDonatello); // HP: 95 SP: 20
  samuraiMasamune.attack(ninjaDonatello); // HP: 85
  samuraiMuramasa.breathing(ninjaGaiden); // HP: 95 SP: 20
  samuraiMuramasa.attack(ninjaGaiden); // HP: 85
  ninjaGaiden.healUnit(10); // HP: 95
  expect(ninjaDonatello.healthPoints).toBe(95);
  expect(ninjaGaiden.healthPoints).toBe(95);
});

test('Ninja clan retaliates. Can\'t heal the dead!', () => {
  // ninjas
  const ninjaGaiden = new Ninja('Sai');
  const ninjaDonatello = new Ninja('Katana');

  // samurais
  const samuraiMasamune = new Samurai('Kozane');
  const samuraiMuramasa = new Samurai('Tosei-gusoku');

  ninjaDonatello.jutsu(samuraiMasamune); // HP: 80 SP: 0
  ninjaGaiden.jutsu(samuraiMasamune); // HP: 40
  ninjaDonatello.attack(samuraiMasamune); // HP: 20
  ninjaGaiden.attack(samuraiMasamune); // HP: 0
  samuraiMuramasa.healUnit(100); // HP: 200 for Muramasa, HP: 0 for Masamune
  expect(samuraiMasamune.healthPoints).toBe(0);
  expect(samuraiMasamune.isDead).toBe(true);
  expect(samuraiMuramasa.healthPoints).toBe(200);
});