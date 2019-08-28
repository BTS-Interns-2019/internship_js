class Persona {
  constructor() {
		this.healthPoints = 100,
		this.shieldPoints = 20,
		this.attackPoints = 0,
		this.isDead = false
	}

	attack (target) {
    if(target.shieldPoints > 0){
			target.shieldPoints -= this.attackPoints;
			if(target.shieldPoints < 0){
				target.healthPoints += target.shieldPoints;
				target.shieldPoints = 0;
			}
		} else {
			target.healthPoints -= this.attackPoints;
			if (target.healthPoints <= 0) target.isDead = true;
		}
		return target.isDead;
	}
	
	heal (healPoints) {
		return this.healthPoints += healPoints;
	}
	
	healUnit (healPoints) {
		if(this instanceof Ninja){
			Ninja.healthPoints += healPoints;
		} else if (this instanceof Samurai){
			Samurai.healthPoints += healPoints;
		}
	}

}

class Ninja extends Persona {
  constructor(weapon){
		super();
	  this.attackPoints = 20,
		this.weapon = weapon
	}

	jutsu (target) {
		if(target.shieldPoints > 0){
			target.shieldPoints -= this.attackPoints*2;
			if(target.shieldPoints < 0){
				target.healthPoints += target.shieldPoints;
				target.shieldPoints = 0;
			}
		} else {
			target.healthPoints -= this.attackPoints*2;
			if (target.healthPoints <= 0) target.isDead = true;
		}
		return target.isDead;
	}

}

class Samurai extends Persona {
	constructor(armor){
		super();
	  this.attackPoints = 10,
		this.armor = armor
	}

	breathing (target) {
		if(target.shieldPoints > 0){
			target.shieldPoints -= this.attackPoints*2.5;
			if(target.shieldPoints < 0){
				target.healthPoints += target.shieldPoints;
				target.shieldPoints = 0;
			}
		} else {
			target.healthPoints -= this.attackPoints*2.5;
			if (target.healthPoints <= 0) target.isDead = true;
		}
		return target.isDead;
	}
}

module.exports = { Persona, Ninja, Samurai };