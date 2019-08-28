const Persona = {
    healthPoints:100,
    shieldPoints:20,
    attackPoints:0,
    isDead:false,
    attack(contrario){
        if(contrario.isDead){
            return "contrario esta muerto";
        }
        let diff = contrario.shieldPoints - this.attackPoints;
        if(diff<=0){
            contrario.shieldPoints = 0;
            contrario.healthPoints -= Math.abs(diff);
            //console.log("");
        }else{
            contrario.shieldPoints -= this.attack;
            //console.log("Su escudo lo defendió: ");
        }
        if(contrario.healthPoints <= 0){
            contrario.isDead = true;
        }
        return "Is dead: " + contrario.isDead;
    },
    heal(number){
        if(!this.isDead){
            this.healthPoints += number;
            return this.healthPoints;
        }/*else{
            if(this.hasOwnProperty('jutsu')){
                console.log("Guerrero con " + this.weapon + " esta muerto, no se le puede aumentar la vida");
            }else{
                console.log("Guerrero con " + this.armor + " esta muerto, no se le puede aumentar la vida");
            }
        }*/
    },
    healUnit(number){
        if(this.hasOwnProperty('jutsu')){
            Ninja.team.forEach((ninja)=>{
                if(!ninja.isDead){
                    ninja.healthPoints += number
                }/*else{
                    console.log("Guerrero con " + this.weapon + " esta muerto, no se le puede aumentar la vida");
                }*/
            });
        }else if(this.hasOwnProperty('breathing')){
            Samurai.many.forEach((samurai)=>{
                if(!samurai.isDead){
                    samurai.healthPoints += number;
                }/*else{
                    console.log("Guerrero con " + this.armor + " esta muerto, no se le puede aumentar la vida");
                }*/
            });
        }
    }
}
function Ninja(weapon){
    Ninja.team.push(this);
    this.attackPoints = 20;
    this.weapon = weapon;
    this.jutsu = function(contrario){
        this.attackPoints *= 2;
        this.attack(contrario);
        this.attackPoints = 20;
        return contrario.isDead;
    };
}
Ninja.team = [];
Ninja.prototype = Persona;

function Samurai(armor){
    Samurai.many.push(this);
    this.attackPoints = 10;
    this.armor = armor;
    this.breathing = function(contrario){
        this.attackPoints *= 2.5;
        this.attack(contrario);
        this.attackPoints = 10;
        return contrario.isDead;
    };
}
Samurai.prototype = Persona;
Samurai.many = [];

const cris = new Ninja("espada");
// const ali = new Ninja("espada");
const ser = new Samurai("espada");
const nes = new Samurai("escudo");
//cris.healUnit(10);
nes.breathing(cris);
console.log(cris.healthPoints);
ser.breathing(cris);
console.log(cris.healthPoints);
//nes.attack(cris);
// cris.isDead=true;
// cris.heal(10);
//console.log(cris.weapon);
//console.log(cris.healthPoints);
// console.log(cris.healthPoints);
/*const ninjaGaiden = new Ninja();
const ninjaNaruto = new Ninja();
const samTanjiro = new Samurai();
const samBatusai = new Samurai();
console.log(ninjaGaiden.heal(10)); // 110
console.log(ninjaGaiden.healUnit(20)); // undefined
console.log(ninjaGaiden.healthPoints); // 130
console.log(ninjaNaruto.healthPoints); //120*/

module.exports = {Ninja, Samurai};