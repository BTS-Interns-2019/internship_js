const {Ninja, Samurai} = require('./warriors_ricardom');

const ninjaGaiden = new Ninja();
test('values asigned Ninja',()=>{
    expect(ninjaGaiden.healthPoints).toBe(100);
    expect(ninjaGaiden.attackPoints).toBe(20);
    expect(ninjaGaiden.isDead).toBe(false);
});

const samTanjiro = new Samurai();
test('values asigned Samurai',()=>{
    expect(samTanjiro.healthPoints).toBe(100);
    expect(samTanjiro.attackPoints).toBe(10);
    expect(samTanjiro.isDead).toBe(false);
});


test('heal Ninja',()=>{
    ninjaGaiden.heal(10);
    expect(ninjaGaiden.healthPoints).toBe(110);
    expect(ninjaGaiden.attackPoints).toBe(20);
    expect(ninjaGaiden.isDead).toBe(false);
});

