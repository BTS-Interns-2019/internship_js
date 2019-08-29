let Persona = {
    healthPoints:100,
    shieldPoints:20,
    attackPoints:0,
    isDead:false,
    
    attack: function(target){
        if(target.isDead){
            return target.isDead;
        } 
        let ataque1 = target.shieldPoints - this.attackPoints;
        if(ataque1 <= 0){
            target.shieldPoints = 0;
            target.healthPoints -= Math.abs(ataque1);
        }else {
            target.shieldPoints -= this.attackPoints;
        }
        if(target.healthPoints <= 0){
            target.isDead = true; 
        }
        return target.isDead;
    },
    heal: function(healthPoints){
       this.healthPoints += healthPoints;
       return this.healthPoints;
    },
    healUnit: function(healthPoints){

    }
}

function Ninja () {
    this.attackPoints = 20;
    this.weapon = 'kat';
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
    this.armor = 'kab';
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