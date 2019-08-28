const Persona = {
  healthPoints: 100,
  shieldPoints: 20,
  attackPoints: 0,
  isDead: false,

  // i want cry
  attack(obj) {
    return this.apply_attack(obj, this.attackPoints);
  },
  apply_attack(obj, points) {
    obj.shieldPoints -= points;
    if (obj.isDead) return true;
    if (obj.shieldPoints < 0) {
      obj.healthPoints += obj.shieldPoints;
      obj.shieldPoints = 0;
      if (obj.healthPoints < 0) {
        obj.healthPoints = 0;
        obj.isDead = true;
        return true;
      }
    }
    return false;
  },
  heal(points) {
    if (!this.isDead) {
      this.healthPoints += points;
      return this.healthPoints;
    }
    return 0;
  },
};

const ninjas = [];
const samurais = [];

function Ninja() {
  ninjas.push(this);
  this.attackPoints = 20;
  this.weapont = '';
  this.jutsu = obj => this.apply_attack(obj, this.attackPoints * 2);
  this.healUnit = points => ninjas.forEach(instance => instance.heal(points));
}
Ninja.prototype = Persona;

function Samurai() {
  samurais.push(this);
  this.attackPoints = 10;
  this.armor = '';
  this.breathing = obj => this.apply_attack(obj, this.attackPoints * 2.5);
  this.healUnit = points => samurais.forEach(instance => instance.heal(points));
}
Samurai.prototype = Persona;

module.exports = {
  Ninja,
  Samurai,
};
