//Create a base object
var Persona = {
    healthPoints: 100,
    shieldPoints: 20,
    attackPoints: 0,
    isDead: false,

    // method attack
    attack: function (target) {
        if(target.isDead) {
            return target.isDead
        }

        var ataque = target.shieldPoints - this.attackPoints;
        if(ataque < 0) {
            target.shieldPoints = 0
            target.healthPoints -= Math.abs(ataque);
        } else {
            target.shieldPoints -= this.attackPoints;
            }

        if (target.healthPoints <= 0) {
            target.isDead = true;
        }
            return target.isDead;
    },
    // method heal
    heal: function (points) {
        if(!this.isDead) {
        this.healthPoints += points
        }
        return this.healthPoints
    },
    // method healUnit
    healUnit: function (points) {
        
    }
};

// ninja constructor
function Ninja () {
    this.attackPoints = 20;
    this.weapon = 'katana';
    this.jutsu = function (target) {
        this.attackPoints *= 2;
        this.attack(target);
        if (target.healthPoints <= 0) {
            target.isDead = true;
        }
        return target.isDead ? true : false; 
    }
}

Ninja.prototype = Persona;

// samurai constructor
function Samurai () {
    this.attackPoints = 10;
    this.armor = 'kabuto';
    this.breathing = function (target) {
        this.attackPoints *= 2.5;
        this.attack(target);
        if (target.healthPoints <= 0) {
            target.isDead = true;
        }
        return target.isDead ? true : false; 
    }
}

Samurai.prototype = Persona;

module.exports = {
    Ninja,
    Samurai
}
