const Person =  {
    healthPoints: 100,
    shieldPoints: 20,
    attackPoints: 0,
    isDead: false,

    attack (target){
        if (target.isDead == true){
            return target.isDead;
        }

     const remain = target.shieldPoints - this.attackPoints;
     if (remain > 0){
         target.shieldPoints -= this.attackPoints;
     } else {
         target.shieldPoints = 0;
         target.healthPoints -= Math.abs(remain); 
     }
        if (target.healthPoints <= 0){
            target.isDead = true;
        }

        return target.isDead;
    },

    heal (healPoints){
        if(this.isDead == false){
            this.healthPoints += healPoints;
        }
        return this.healthPoints;
    },

    healUnit (healPoints){
        if (this.armour){
         Samurai.instances.forEach ((Samurai) => {
             if (Samurai.isDead == false){ 
            Samurai.healthPoints += healPoints;
        }
    });
} else {
    Ninja.instances.forEach ((Ninja) => {
        if (Ninja.isDead == false){
            Ninja.healthPoints += healPoints;
        }
    });
}
    },
};

function Ninja (weapon){
    Ninja.instances.push(this);
    this.attackPoints = 20;
    this.weapon = weapon;

    this.jutsu = (target) => {
        this.attackPoints *= 2;
        this.attack (target);
        this.attackPoints = 20;
        return target.isDead;
    };
}

Ninja.instances = [];
Ninja.prototype = Person;

function Samurai (armour){
    Samurai.instances.push(this);
    this.attackPoints = 10;
    this.armour = armour;

    this.breathing = (target) => {
        this.attackPoints *= 2.5;
        this.attack (target);
        this.attackPoints = 10;
        return target.isDead;
    };
}

Samurai.instances = [];
Samurai.prototype = Person;

/*
const ninjaGaiden = new Ninja();
const ninjaNaruto = new Ninja();

const samTanjiro = new Samurai();
const samBatusai = new Samurai();

console.log(ninjaGaiden.heal(10)); // 110
console.log(ninjaGaiden.healUnit(20)); // undefined
console.log(ninjaGaiden.healthPoints); // 130
console.log(ninjaNaruto.healthPoints); // 120

console.log(samTanjiro.healthPoints); // 100
console.log(samBatusai.breathing(ninjaGaiden)); // false
console.log(ninjaGaiden.healthPoints); // 105
console.log(ninjaGaiden.isDead); // false
*/

module.exports = {
    Ninja, 
    Samurai,
};