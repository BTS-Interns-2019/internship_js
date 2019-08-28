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

const ninjaGaiden = new Ninja();
const ninjaNaruto = new Ninja();

const samTanjiro = new Samurai();
const samBatusai = new Samurai();

/*console.log(ninjaGaiden.heal(10)); // 110
console.log(ninjaGaiden.healUnit(20)); // undefined
console.log(ninjaGaiden.healthPoints); // 130
console.log(ninjaNaruto.healthPoints); // 120

console.log(samTanjiro.healthPoints); // 100
console.log(samBatusai.breathing(ninjaGaiden)); // false
console.log(ninjaGaiden.healthPoints); // 105
console.log(ninjaGaiden.isDead); // false*/
module.exports = {Ninja,Samarai};
/*
ng 130  20 
10*2.5
25
*/ 