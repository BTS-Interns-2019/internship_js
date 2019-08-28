const Person = {
    healthPoints: 100,
    shieldPoints: 20,
    attackPoints: 0,
    isDead: false,
    attack: function(target){
        if(!!target.isDead){return "Enemy is dead";}
        let reducer = this.attackPoints - target.shieldPoints;
        if(reducer <= 0){
            target.shieldPoints = +reducer;
            return target.isDead
        }
        target.healthPoints -= reducer;
        target.shieldPoints = 0;
        if(target.healthPoints <= 0){
            target.isDead = true
            return target.isDead
        }else {
            return target.isDead;
        }        
    },
    heal: function(hp){
        if(!!this.isDead){ return "you can't cure a dead"}
        return this.healthPoints += hp;
    },
    healUnit: function(hp){
        if(this.attackPoints == 10){
            for (let px  of Samurai.team) {
                if(!!px.isDead){
                    continue;
                }else {
                    px.healthPoints += hp
                }
            }
        }else {
            for (let px  of Ninja.team) {
                if(!!px.isDead){
                    continue;
                }else {
                    px.healthPoints += hp
                }
            }
        }
    },
}
function Ninja() {
    Ninja.team.push(this);
    this.attackPoints = 20;
    this.weapon = "kunias";
    this.jutsu = function(target){
        this.attackPoints *= 2;
        if(!!target.isDead){return "Enemy is dead";}
        this.attack(target);
        this.attackPoints = 20;
        return target.isDead;
    }
};
Ninja.team = [];
Ninja.prototype = Person;

function Samurai() {
    Samurai.team.push(this);
    this.attackPoints = 10;
    this.armor = "mithril armor";
    this.breathing = function(target){
        this.attackPoints *= 2.5;
        if(!!target.isDead){return "Enemy is dead";}
        this.attack(target);
        this.attackPoints = 10;
        return target.isDead;
    }
};
Samurai.team = [];
Samurai.prototype = Person;

const tanjiro = new Samurai();
const naruto = new Ninja();
console.log(naruto.jutsu(tanjiro));

// const sasuke = new Ninja();
// console.log(tanjiro.breathing(naruto));
// console.log(naruto.shieldPoints);
// console.log(naruto.healthPoints);

// console.log(naruto.healUnit(5));
// console.log(naruto.healthPoints)
// console.log(tanjiro.healthPoints);


// console.log(naruto.shieldPoints);
// console.log(tanjiro.healthPoints);
// console.log(tanjiro.shieldPoints);
// console.log(naruto.attack(tanjiro));
// console.log(tanjiro.healthPoints);
// console.log(tanjiro.shieldPoints);
// console.log(naruto.attack(tanjiro));
// console.log(tanjiro.healthPoints);
// console.log(tanjiro.shieldPoints);



module.exports = {
    Ninja,
    Samurai
};