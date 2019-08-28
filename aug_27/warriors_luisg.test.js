class Persona {
    constructor() {
        this.healthPoints = 100;
        this.shieldPoints = 20;
        this.isDead = false;

        this.attack = function (target) {
            let target_shield = target.shieldPoints;
            let ataque = this.attackPoints;
            if (target_shield > 0) {
                target_shield -= ataque;
                if (target_shield < 0) {
                    ataque -= target.shieldPoints;
                    target_shield = 0
                } else {
                    ataque = 0;
                }
                target.shieldPoints = target_shield;
            }
            if (target_shield <= 0) {
                let hp_target = target.healthPoints;
                hp_target -= ataque;
                target.healthPoints = hp_target;
            }
            target.isDead = target.healthPoints <= 0;
            return target.isDead;
        }

        this.heal = function (points) {
            this.healthPoints += points;
            return this.healthPoints;
        }

        
    }
}

class Ninja extends Persona {
    constructor() {
        super();
        this.attackPoints = 20;
        this.wapon;

        this.jutsu = function (target) {
            this.attackPoints *= 2;
            let defeat = this.attack(target);
            this.attackPoints /= 2;
            return defeat;
        }

        this.healUnit = function (points) {
            for(let v of Ninja.instances){
                v.heal(points)
            }
           // return this.healthPoints
        }
        Ninja.instances.push(this);
    }
}
Ninja.instances = [];

class Samurai extends Persona {
    constructor() {
        super();
        this.attackPoints = 10;
        this.armor;

        this.breathing = function (target) {
            this.attackPoints *= 2.5;
            let defeat = this.attack(target);
            this.attackPoints /= 2.5;
            return defeat;
        }
        this.healUnit = function (points) {
            for(let v of Samurai.instances){
                v.heal(points)
            }
        }
        Samurai.instances.push(this);
    }
}
Samurai.instances = []


test("prueba", function () {
    const ninjaGaiden = new Ninja();
const ninjaNaruto = new Ninja();

const samTanjiro = new Samurai();
const samBatusai = new Samurai();
    expect(ninjaGaiden.heal(10)).toBe(110); // 110
ninjaGaiden.healUnit(20); // undefined
expect(ninjaGaiden.healthPoints).toBe(130); // 130
expect(ninjaNaruto.healthPoints).toBe(120); // 120
expect(samTanjiro.healthPoints).toBe(100); // 100
expect(samBatusai.breathing(ninjaGaiden)).toBe(false); // false
expect(ninjaGaiden.healthPoints).toBe(125); // 105
expect(ninjaGaiden.isDead).toBe(false); // false
expect(samBatusai.breathing(ninjaGaiden)).toBe(false); // false
expect(ninjaGaiden.healthPoints).toBe(100); 
expect(samBatusai.breathing(ninjaGaiden)).toBe(false);
expect(samTanjiro.breathing(ninjaGaiden)).toBe(false);
expect(samBatusai.breathing(ninjaGaiden)).toBe(false);
expect(samTanjiro.breathing(ninjaGaiden)).toBe(true);
expect(ninjaNaruto.attack(samTanjiro)).toBe(false);
expect(ninjaGaiden.jutsu(samTanjiro)).toBe(false);
expect(ninjaNaruto.jutsu(samTanjiro)).toBe(false);
expect(ninjaGaiden.attack(samTanjiro)).toBe(true);
}); 