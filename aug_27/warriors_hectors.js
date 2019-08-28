// Persona object
const Persona = {
  // attributes
  healthPoints: 100,
  shieldPoints: 20,
  attackPoints: 0,
  dead: false,
  get isDead() {
    return this.dead;
  },
  set isDead(killed) {
    this.dead = killed;
  },

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
function Ninja(weapon = 'Katana') {
  Ninja.instances.push(this);
  this.attackPoints = 20;
  this.weapon = weapon;

  this.jutsu = (target) => {
    this.attackPoints *= 2;
    this.attack(target);
    this.attackPoints = 20;
    return target.isDead;
  };
}
Ninja.instances = [];
Ninja.prototype = Persona;

// Samurai Constructor
function Samurai(armor = 'Kozane') {
  Samurai.instances.push(this);
  this.attackPoints = 10;
  this.armor = armor;

  this.breathing = (target) => {
    this.attackPoints *= 2.5;
    this.attack(target);
    this.attackPoints = 10;
    return target.isDead;
  };
}
Samurai.instances = [];
Samurai.prototype = Persona;

module.exports = {
  Ninja,
  Samurai,
};
