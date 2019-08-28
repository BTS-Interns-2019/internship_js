/*--------------God function-------------- */
function Person(attackPoints, weapon, ultimate){
  this.healthPoints = 100,
  this.shieldPoints = 20,
  this.isDead = false,
  this.attackPoints = attackPoints,
  this.ultimate = ultimate,
  this.weapon = weapon
};
/*---------------First human-------------- */
const Persona = new Person()
/*---------------Attack------------------- */
Persona.attack = function attack (target){
  let shield = target.shieldPoints -= this.attackPoints
  target.shieldPoints = shield;
  if(shield < 0){
    target.healthPoints += shield;
  }
  if(target.healthPoints <= 0){
    target.healthPoints = 0
    target.isDead = true
  }
};
/*---------------Healing----------------- */
Persona.heal = function heal (points){
    return this.healthPoints += points;
};

/*------------healUnit------------------- */
Persona.healUnit = function healUnit (points){
  if(Samurai.legion){
    for(let persona of Samurai.legion){
      if(persona.isDead){
        persona.healthPoints += 0
      }
      persona.healthPoints += points
    }
  }
  else{
    for(let persona of Ninja.legion){
      if(persona.isDead){
        persona.healthPoints += 0
      }
      persona.healthPoints += points
    }
  }
};

/*---------Father of Samurai------------- */
function Samurai(){
  Samurai.legion.push(this)
  this.attackPoints = 10
  this.weapon = 'Katana'
  this.breathing = function breathing(target){
     this.attackPoints *= 2.5
     this.attack(target)
     return this.attackPoints /=  2.5
 }
};
Samurai.prototype = Persona
Samurai.legion = []

  

/*---------Father of Ninjas------------- */
function Ninja(){
  Ninja.legion.push(this)
  this.attackPoints = 20
  this.weapon = 'Kusarigama'
  this.jutsu = function jutsu(target){
    this.attackPoints *= 2
    this.attack(target)
    return this.attackPoints /= 2
  };
};
Ninja.prototype = Persona
Ninja.legion = []

module.exports = {
  Samurai,
  Ninja
}

// const Algren = new Samurai()
// const Arun = new Samurai()

// const Kabuto = new Ninja()
// const Hatori = new Ninja()





