let Person = {
    healthPoints:100,
    shieldPoints:20,
    attackPoints:0,
    isDead:false,
    attack: function(target){
        if(target.isDead){
            return target.isDead;
        } 
        let diff = target.shieldPoints - this.attackPoints;
        if(diff <= 0){
            target.shieldPoints = 0;
            target.healthPoints -= Math.abs(diff);
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
        if(this.jutsu){
            for (let i = 0; i < Ninja.instances.length; i++) {
                if(Ninja.instances[i].isDead){
                    console.log('ve juntando las esferas ya esta tiezo');
                }else{
                    Ninja.instances[i].healthPoints += healthPoints;
                }
                
            }
        }else{
            for (let i = 0; i < Samurai.instances.length; i++) {
                if(Samurai.instances[i].isDead){
                    console.log('echenle cal ya esta muerto');
                }else{
                    Samurai.instances[i].healthPoints += healthPoints;
                }
                
            }
            // this.healthPoints += healthPoints;
        }
        
     }

};


function Ninja (weapon) {  
    Ninja.instances.push(this);
    this.attackPoints = 20;
    this.weapon = weapon;
    this.jutsu = function(target){
        this.attackPoints = this.attackPoints*2;
        this.attack(target);
        this.attackPoints = this.attackPoints/2;
    }
 }
Ninja.instances = [];
Ninja.prototype = Person;

function Samurai (armor) {
    Samurai.instances.push(this);
    this.attackPoints = 10;
    this.armor = armor;
    this.breathing = function(target){
        this.attackPoints = this.attackPoints*2.5;
        this.attack(target);
        this.attackPoints = this.attackPoints/2.5;
    }
}
Samurai.instances = [];
Samurai.prototype = Person;



// const ninjaGaiden = new Ninja();

// const ninjaNaruto = new Ninja();

// const samTanjiro = new Samurai();
// const samBatusai = new Samurai();

// ninjaGaiden.heal(10); // 110
// ninjaGaiden.healUnit(20); // undefined
// ninjaGaiden.heal; // 130
// ninjaNaruto.heal; // 120

// samTanjiro.heal; // 100
// samBatusai.breathing(ninjaGaiden); // false
// ninjaGaiden.healUnit; // 130
// console.log(ninjaGaiden.isDead);   // false
module.exports = {Ninja,Samurai};
