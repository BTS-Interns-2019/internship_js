const Persona = {
  healthPoints: 100,
  shieldPoints: 20,
  attackPoints: 0,
  isDead: false,
  attack(target) {
    const enemy = target;
    if (!enemy.isDead) {
      const diff = enemy.shieldPoints - this.attackPoints;
      if (diff <= 0) {
        if (this.shieldPoints <0) { return 'The shield has broken'}
        enemy.healthPoints -= Math.abs(diff);
        enemy.shieldPoints = 0;
      } else {
        enemy.shieldPoints -= this.attackPoints;
      }
    }
    if (enemy.healthPoints <= 0) {
      enemy.isDead = true;
    }
    return target.isDead;
  },
  heal(hp) {
    if (!this.isDead) {
      this.healthPoints += hp;
    }
    return this.healthPoints;
  },
  healUnit(hp) {
    if (this.hasOwnProperty('breathing')) {
      for (const samurai of Samurai.clan) {
        if (!samurai.isDead) {
          samurai.healthPoints += hp;
        }
      }
    } else {
      for (const ninja of Ninja.village) {
        if (!ninja.isDead) {
          ninja.healthPoints += hp;
        }
      }
    }
  },
};

function Ninja(weapon) {
  Ninja.village.push(this);
  this.attackPoints = 20;
  this.weapon = weapon;
  this.jutsu = function (obj) {
    this.attackPoints *= 2;
    this.attack(obj);
    this.attackPoints = 20;
    return obj.isDead;
    
  };
}
Ninja.village = [];

function Samurai(armor) {
    Samurai.clan.push(this);
    this.attackPoints = 10;
    this.armor = armor;
    this.breathing = function (obj) {
        this.attackPoints *= 2.5;
        this.attack(obj);
        this.attackPoints = 10;
        return obj.isDead
    };
}
Samurai.clan = [];

Samurai.prototype = Persona;
Ninja.prototype = Persona;

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

module.exports = { Ninja, Samurai }; 