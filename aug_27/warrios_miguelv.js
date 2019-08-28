module.exports=Persona;

function Persona(){
    this.healthPoints=100;
    this.shieldPoints=20;
    this.isDead=false;
}
Object.defineProperty(Persona.prototype,"healthPoints",{
    get: function(){return this._healthPoints},
    set: function(hp){this._healthPoints=hp}
});
Object.defineProperty(Persona.prototype,"shieldPoints",{
    get: function(){return this._shieldPoints},
    set: function(sp){this._shieldPoints=sp}
});
Object.defineProperty(Persona.prototype,"attackPoints",{
    get: function(){return this._attackPoints},
    set: function(atk){this._attackPoints=atk}
});
Object.defineProperty(Persona.prototype,"isDead",{
    get: function(){return this._isDead},
    set: function(die){this._isDead=die}
});

Persona.prototype.attack=function(enemy){
    //console.log("-"+this.attackPoints);
    if(this.isDead==false){
        //console.log("_"+enemy.shieldPoints);
        enemy.shieldPoints= enemy.shieldPoints-(this.attackPoints);
        if(enemy.shieldPoints<0){
            enemy.healthPoints=enemy.healthPoints+enemy.shieldPoints;
            if(enemy.healthPoints<0){
                enemy.isDead=true;
            }
        }
    }
}
Persona.prototype.heal=function(plus){
    if(this.isDead==false){
        this.healthPoints=this.healthPoints+plus;
    }
}
/*Persona.prototype.healUnit=function(plus){
    if(this._isDead==false){
        this._healthPoints=this._healthPoints+plus;
    }
}*/

function Ninja(){
    Persona.call(this);
    this.jutsu=function(enemy){
        this.attackPoints=this.attackPoints*2;
        attack(enemy);
        this.attackPoints=this.attackPoints/2;
    }
    this.attackPoints=20;
}
Object.defineProperty(Ninja.prototype,"weapon",{
    get: function(){return this._weapon},
    set: function(wpn){this._weapon=wpn}
});
Ninja.prototype=Object.create(Persona.prototype);

function Samurai(){
    Persona.call(this);
    this.breathing=function(enemy){
        this.attackPoints=this.attackPoints*2.5;
        //console.log("-"+this.attackPoints);
        this.attack(enemy);
        this.attackPoints=this.attackPoints/2.5;
    };
    this.attackPoints=10;
}
Object.defineProperty(Samurai.prototype,"armor",{
    get: function(){return this._armor},
    set: function(arm){this._armor=arm}
});
Samurai.prototype=Object.create(Persona.prototype);

const Hanzo = new Ninja();
/*console.log(Hanzo.attackPoints);
console.log(Hanzo.healthPoints);
console.log(Hanzo.attack());*/
const Chiyome = new Ninja();

const Nobunaga = new Samurai();
const Masamune = new Samurai();

Hanzo.heal(10); // 110
//Hanzo.healUnit(20); // undefined
console.log(Hanzo.healthPoints);
console.log(Chiyome.healthPoints);
//Hanzo.healthPoints; // 130
//Chiyome.healthPoints; // 120

//Masamune.healthPoints; // 100
/*console.log(typeof Hanzo === 'object');
console.log(typeof Nobunaga);
console.log(typeof Nobunaga.heal);
console.log(typeof Persona.heal);
console.log(typeof Nobunaga.breathing);*/
console.log(Masamune.healthPoints);
Nobunaga.breathing(Hanzo); // false
//Hanzo.healt; // 105
console.log(Hanzo.healthPoints);
//Hanzo.isDead; // false*/
console.log(Hanzo.isDead);