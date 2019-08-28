Persona = function () {
  this.healthPoints = 100;
  this.shieldPoints = 20;
  this.attackPoints = 0;
  this.isDead = false;
}

Persona.prototype.attack = function(enemy) {
  if (enemy.shieldPoints > 0) {
    enemy.shieldPoints -= this.attackPoints;
    if (enemy.shieldPoints <= 0) {
      enemy.healthPoints -= Math.abs(enemy.shieldPoints);
      enemy.shieldPoints = 0;
    }
  } else {
    enemy.healthPoints -= this.attackPoints;
    if (enemy.healthPoints <= 0) {
      enemy.healthPoints = 0;
      enemy.isDead = true;
    }
  }
  return enemy.healthPoints == 0 ? true : false
}

Persona.prototype.heal = function(points) {
  this.healthPoints += points;
  return this.healthPoints;
}

Persona.prototype.healUnit = function(points) {
  Persona.call(this);
  this.healthPoints += points;
}

Ninja = function () {
  Persona.call(this);
  this.weapon = 'Katana';
  this.attackPoints = 20;
}

Ninja.prototype = Object.create(Persona.prototype);

Ninja.prototype.jutsu = function(enemy) {
  if (enemy.shieldPoints > 0) {
    enemy.shieldPoints -= (this.attackPoints)*2;
    if (enemy.shieldPoints <= 0) {
      enemy.healthPoints -= Math.abs(enemy.shieldPoints);
      enemy.shieldPoints = 0;
    }
  } else {
    enemy.healthPoints -= (this.attackPoints)*2;
    if (enemy.healthPoints <= 0) {
      enemy.healthPoints = 0;
      enemy.isDead = true;
    }
  }
  return enemy.healthPoints == 0 ? true : false
}

Samurai = function () {
  Persona.call(this);
  this.armor = 'Kozane';
  this.attackPoints = 10;
}

Samurai.prototype = Object.create(Persona.prototype);

Samurai.prototype.breathing = function(enemy) {
  if (enemy.shieldPoints > 0) {
    enemy.shieldPoints -= (this.attackPoints)*2.5;
    if (enemy.shieldPoints <= 0) {
      enemy.healthPoints -= Math.abs(enemy.shieldPoints);
      enemy.shieldPoints = 0;
    }
  } else {
    enemy.healthPoints -= (this.attackPoints)*2.5;
    if (enemy.healthPoints <= 0) {
      enemy.healthPoints = 0;
      enemy.isDead = true;
    }
  }
  return enemy.healthPoints == 0 ? true : false
}

module.exports = Persona;
module.exports = Ninja;
module.exports = Samurai;