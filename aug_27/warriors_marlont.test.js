const {Persona, Ninja, Samurai} = require('./warriors_marlont');

test('One Warrior instance', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');
});

test('Warrior heal', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');

    n.heal(10);
    expect(n.healthPoints).toBe(110);
});

test('Warrior attack reducing shieldPoints', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');

    let s = new Samurai('Armadura');
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(20);
    expect(s.attackPoints).toBe(10);
    expect(s.isDead).toBe(false);
    expect(s.armor).toBe('Armadura');

    n.attack(s);
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(0);
});

test('Ninja uses jutsu', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');

    let s = new Samurai('Armadura');
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(20);
    expect(s.attackPoints).toBe(10);
    expect(s.isDead).toBe(false);
    expect(s.armor).toBe('Armadura');

    n.jutsu(s);
    expect(s.healthPoints).toBe(80);
    expect(s.shieldPoints).toBe(0);
});

test('Samurai uses breathing', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');

    let s = new Samurai('Armadura');
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(20);
    expect(s.attackPoints).toBe(10);
    expect(s.isDead).toBe(false);
    expect(s.armor).toBe('Armadura');

    s.breathing(n);
    expect(n.healthPoints).toBe(95);
    expect(n.shieldPoints).toBe(0);
});

test('Warrior kills other warrior', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');

    let s = new Samurai('Armadura');
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(20);
    expect(s.attackPoints).toBe(10);
    expect(s.isDead).toBe(false);
    expect(s.armor).toBe('Armadura');

    expect(n.jutsu(s)).toBe(false);
    expect(s.healthPoints).toBe(80);
    expect(s.shieldPoints).toBe(0);

    expect(n.jutsu(s)).toBe(false);
    expect(s.healthPoints).toBe(40);
    expect(s.shieldPoints).toBe(0);

    expect(n.jutsu(s)).toBe(true);
    expect(s.healthPoints).toBe(0);
    expect(s.shieldPoints).toBe(0);
});

test('Multiple Instances', function(){
    let n = new Ninja('Espada');
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(20);
    expect(n.attackPoints).toBe(20);
    expect(n.isDead).toBe(false);
    expect(n.weapon).toBe('Espada');

    let s = new Samurai('Armadura');
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(20);
    expect(s.attackPoints).toBe(10);
    expect(s.isDead).toBe(false);
    expect(s.armor).toBe('Armadura');

    let n2 = new Ninja('Espada');
    expect(n2.healthPoints).toBe(100);
    expect(n2.shieldPoints).toBe(20);
    expect(n2.attackPoints).toBe(20);
    expect(n2.isDead).toBe(false);
    expect(n2.weapon).toBe('Espada');

    let s2 = new Samurai('Armadura');
    expect(s2.healthPoints).toBe(100);
    expect(s2.shieldPoints).toBe(20);
    expect(s2.attackPoints).toBe(10);
    expect(s2.isDead).toBe(false);
    expect(s2.armor).toBe('Armadura');

    expect(n.attack(s)).toBe(false);
    expect(s.healthPoints).toBe(100);
    expect(s.shieldPoints).toBe(0);

    expect(s.attack(n2)).toBe(false);
    expect(n2.healthPoints).toBe(100);
    expect(n2.shieldPoints).toBe(10);

    expect(n2.attack(s2)).toBe(false);
    expect(s2.healthPoints).toBe(100);
    expect(s2.shieldPoints).toBe(0);

    expect(s2.attack(n)).toBe(false);
    expect(n.healthPoints).toBe(100);
    expect(n.shieldPoints).toBe(10);
});
