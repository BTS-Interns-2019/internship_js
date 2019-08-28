// Persona object
const Persona = {
  // attributes
  healthPoints: 100,
  shieldPoints: 20,
  attackPoints: 0,
  isDead: false,

  // methods
  attack(target) {
    if (target.isDead) {
      return target.isDead;
    }

    const remainer = target.shieldPoints - this.attackPoints;
    if (remainer < 0) {
      target.shieldPoints = 0;
      target.healthPoints -= Math.abs(remainer);
    } else {
      target.shieldPoints -= this.attackPoints;
    }

    if (target.healthPoints <= 0) {
      target.isDead = true;
    }
    return target.isDead;
  },
  heal(healingPoints) {
    if (!this.isDead) {
      this.healthPoints += healingPoints;
    }
    return this.healthPoints;
  },
  healUnit(healingPoints) {
    // add healingPoints to all units of the same type
    if (this.jutsu) {
      Ninja.instances.forEach((ninja) => {
        if (!ninja.isDead) {
          ninja.healthPoints += healingPoints;
        }
      });
    } else {
      Samurai.instances.forEach((samurai) => {
        if (!samurai.isDead) {
          samurai.healthPoints += healingPoints;
        }
      });
    }
  },
};

// Ninja Constructor
function Ninja(weapon) {
  Ninja.instances.push(this);
  this.attackPoints = 20;
  this.weapon = weapon;

  this.jutsu = (target) => {
    this.attackPoints *= 2;
    this.attack(target);
    this.attackPoints = 20;
  };
}
Ninja.instances = [];
Ninja.prototype = Persona;

// Samurai Constructor
function Samurai(armor) {
  Samurai.instances.push(this);
  this.attackPoints = 10;
  this.armor = armor;

  this.breathing = (target) => {
    this.attackPoints *= 2.5;
    this.attack(target);
    this.attackPoints = 10;
  };
}
Samurai.instances = [];
Samurai.prototype = Persona;

module.exports = {
  Ninja,
  Samurai,
};