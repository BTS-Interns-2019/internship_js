

const Persona = {
    healthPoints: 100,
    shieldPoints: 20,
    attackPoints: 0,
    isDead: false,

    attack: function (target) {
        if (target.isDead) return target.isDead;

        dmg = target.shieldPoints - this.attackPoints;
        if (dmg <= 0) {
            target.shieldPoints = 0;
            target.healthPoints -= Math.abs(dmg);
        } else {
            target.shieldPoints -= this.attackPoints;
        }

        if (target.healthPoints <= 0) target.isDead = true;

        return target.isDead;
    },

    heal: function (heal) {
        this.healthPoints += heal;
        return this.healthPoints;
    },

    healUnit: function (heal) {
        if (this.jutsu) {
            for (i = 0; i < Ninja.instances.length; i++) {
                if (!Ninja.instances[i].isDead) Ninja.instances[i].healthPoints += heal;
            }
        } else {
            for (i = 0; i < Samurai.instances.length; i++) {
                if (!Ninja.instances[i].isDead) Samurai.instances[i].healthPoints += heal;
            }
        }
    }
};

function Ninja(Weapon) {
    Ninja.instances.push(this);
    this.attackPoints = 20;
    this.weapon = Weapon;
    this.jutsu = function (target) {
        this.attackPoints *= 2;
        this.attack(target);
        this.attackPoints /= 2;
    }
}
Ninja.instances = [];
Ninja.prototype = Persona;

function Samurai(armor) {
    Samurai.instances.push(this);
    this.attackPoints = 10;
    this.armor = armor;
    this.breathing = function (target) {
        this.attackPoints *= 2.5;
        this.attack(target);
        this.attackPoints /= 2.5;
    }
}

Samurai.instances = [];
Samurai.prototype = Persona;

module.exports = {Ninja, Samurai};