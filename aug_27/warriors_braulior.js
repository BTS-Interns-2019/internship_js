
function Persona() {
  this.healthPoints = 100;
  this.shieldPoints = 20;
}
Persona.prototype = {
  attackPoints: 0,
  selfHealthPoints: 0,
  hiddenUnitHealthPoints: 0,

  get healthPoints() {
    return this.selfHealthPoints + this.unitHealthPoints;
  },
  set healthPoints(points) {
    this.selfHealthPoints = points - this.unitHealthPoints;
  },
  get isDead() {
    return (this.shieldPoints + this.healthPoints) <= 0;
  },
  attack(target) {
    const player = target;
    if (this.attackPoints > target.shieldPoints) {
      player.healthPoints = player.healthPoints - this.attackPoints - player.shieldPoints;
      player.shieldPoints = 0;
    } else {
      player.shieldPoints -= this.attackPoints;
    }

    return player.isDead;
  },
  heal(points) {
    this.healthPoints += points;
    return this.healthPoints;
  },
  healUnit(points) {
    this.unitHealthPoints += points;
  },
};

function Ninja() {
  Persona.call(this);
  this.attackPoints = 20;
  this.weapon = undefined;
}
Ninja.prototype = Object.create(Persona.prototype, {
  unitHealthPoints: {
    set(points) {
      Ninja.prototype.hiddenUnitHealthPoints = points;
    },
    get() {
      return Ninja.prototype.hiddenUnitHealthPoints;
    },
  },
  jutsu: {
    value(target) {
      this.attackPoints *= 2;
      this.attack(target);
      this.attackPoints /= 2;
      return target.isDead;
    },
  },
});

function Samurai() {
  Persona.call(this);
  this.attackPoints = 10;
  this.armor = undefined;
}
Samurai.prototype = Object.create(Persona.prototype, {
  unitHealthPoints: {
    set(points) {
      Samurai.prototype.hiddenUnitHealthPoints = points;
    },
    get() {
      return Samurai.prototype.hiddenUnitHealthPoints;
    },
  },
  breathing: {
    value(target) {
      this.attackPoints *= 2.5;
      this.attack(target);
      this.attackPoints /= 2.5;
      return target.isDead;
    },
  },
});

module.exports = {
  Ninja,
  Samurai,
};
