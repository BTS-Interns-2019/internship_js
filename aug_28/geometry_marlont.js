class Figure {
  constructor (descriptionObj, description) {
	this.descriptionObj = descriptionObj;
	this.description = description;
  }
}


class Square extends Figure {
  constructor(base){
    super({
		type : 'Square',
		mesures : {
			base : base
		}
	}, 'Square of base = ' + base);
	this.base = base;
  }

  get area () {
	return this.base * this.base;
  }

  get perimeter () {
	return this.base * 4;
  }
}

class Rectangle extends Figure {
  constructor(base, height){
	super({
	  type : 'Rectangle',
	  mesures : {
		base : base,
		height : height
	  }
	}, 'Rectangle of base = ' + base + ' and height = ' + height);
	this.base = base;
	this.height = height;
  }

  get area () {
	return this.base * this.height;
  }

  get perimeter () {
	return (this.base + this.height) * 2;
  }
}

class Triangle extends Figure {
  constructor(base, height){
	super({
	  type : 'Triangle',
	  mesures : {
		base : base,
		height : height
	  }
	}, 'Triangle of base = ' + base + ' and height = ' + height);
	this.base= base;
	this.height = height;
  }
	
  get area () {
	return (this.base * this.height)/2;
  }
	
  get perimeter () {
	return parseFloat((2 * (Math.sqrt((Math.pow((this.base/2),2) + Math.pow(this.height,2)))) + this.base).toFixed(2));
  }
}

class Circle extends Figure {
  constructor (radius) {
	super({
	  type : 'Circle',
	  mesures : {
	    radius : radius
	  }
	}, 'Circle of radius = ' + radius);
	this.radius = radius;
  }

  get area () {
	return parseFloat((Math.PI * Math.pow(this.radius,2)).toFixed(2));
  }
	
  get perimeter () {
	return parseFloat((2 * Math.PI * this.radius).toFixed(2));
  }
}


class Cube extends Figure {
  constructor(base){
	if (typeof base === 'object') {
	  if (base instanceof Square){
			super({
		  	type : 'Cube',
		  	mesures : {
		    	base : base.base
		  	}
			}, 'Cube of base = ' + base.base);
			this.base = base.base;
	  	} else {
				throw new Error('Error creating Cube: It expects an object of Type Square but got ' + base.constructor.name + ' instead.');
	  	}
		} else {
	  	super({
	    	type : 'Cube',
				mesures : {
		  		base : base
				}
			}, 'Cube of base = ' + base);
			this.base = base;
		}
  }
	
  get area () {
    return (this.base * this.base) * 6;
  }
	
  get perimeter () {
    return this.base * 4;
  }
}

class prismRectangle extends Figure {
	constructor(base, height, vHeight){
		if (typeof base === 'object') {
		  if (base instanceof Rectangle){
				super({
			  	type : 'Prism Rectangle',
			  	mesures : {
						base : base.base,
						height : base.height,
						vHeight : height
			  	}
				}, 'Prism Rectangle of base = ' + base.base + ', height = ' + base.height + ' and vHeight = ' + height);
				this.base = base.base;
				this.height = base.height;
				this.vHeight = height;
		  	} else {
					throw new Error('Error creating Prism Rectangle: It expects an object of Type Rectangle but got ' + base.constructor.name + ' instead.');
		  	}
			} else {
		  	super({
					type : 'Prism Rectangle',
					mesures : {
						base : base,
						height : height,
						vHeight : vHeight
					}
		  	}, 'Prism Rectangle of base = ' + base + ', height = ' + height + ' and vHeight = ' + vHeight);
				this.base = base;
				this.height = height;
				this.vHeight = vHeight;
			}
	  }
		
	  get area () {
		  return 2*(this.base * this.height) + 2*(this.base * this.vHeight) + 2*(this.height * this.vHeight);
	  }
		
	  get perimeter () {
		  return (this.base + this.height)*2;
	  }
}

class prismTriangle extends Figure {
	constructor(base, height, vHeight){
		if (typeof base === 'object') {
		  if (base instanceof Triangle){
				super({
			  	type : 'Prism Triangle',
			  	mesures : {
						base : base.base,
						height : base.height,
						vHeight : height
			  	}
				}, 'Prism Triangle of base = ' + base.base + ', height = ' + base.height + ' and vHeight = ' + height);
				this.base = base.base;
				this.height = base.height;
				this.vHeight = height;
		  	} else {
					throw new Error('Error creating Prism Triangle: It expects an object of Type Triangle but got ' + base.constructor.name + ' instead.');
		  	}
			} else {
		  	super({
					type : 'Prism Triangle',
					mesures : {
						base : base,
						height : height,
						vHeight : vHeight
					}
		  	}, 'Prism Triangle of base = ' + base + ', height = ' + height + ' and vHeight = ' + vHeight);
				this.base = base;
				this.height = height;
				this.vHeight = vHeight;
			}
	  }
		
	  get area () {
			return parseFloat(2*((this.base * this.height)/2) + 
											  2*((Math.sqrt(Math.pow(this.base/2, 2) + Math.pow(this.height, 2))) * this.vHeight) + 
			                  (this.base*this.vHeight).toFixed(2));
	  }
		
	  get perimeter () {
		  return parseFloat((2 * (Math.sqrt((Math.pow((this.base/2),2) + Math.pow(this.height,2)))) + this.base).toFixed(2));
	  }
}

class Cilinder extends Figure {
	constructor (radius, vHeight) {
		if (typeof radius === 'object') {
			if (radius instanceof Circle) {
				super ({
					type : 'Cilinder',
					mesures : {
						radius : radius.radius,
						vHeight : vHeight
					}
				}, 'Cilinder of radius = ' + radius.radius + ' and vHeight = ' + vHeight);
				this.radius = radius.radius;
				this.vHeight = vHeight;
			} else {
				throw new Error('Error creating Cilinder: It expects an object of Type Circle but got ' + radius.constructor.name + ' instead.');
			}
		} else {
			super ({
				type : 'Cilinder',
				mesures : {
					radius : radius,
					vHeight : vHeight
				}
			}, 'Cilinder of radius = ' + radius + ' and vHeight = ' + vHeight);
			this.radius = radius;
			this.vHeight = vHeight;
		}
	}

	get area () {
		return parseFloat((2*(Math.PI * Math.pow(this.radius,2)) + 
		                 ((2 * Math.PI * this.radius) * this.vHeight)).toFixed(2));
	}

	get perimeter () {
		return parseFloat((2 * Math.PI * this.radius).toFixed(2));
	}
}

module.exports = {Square, Rectangle,      Triangle,      Circle, 
	                Cube,   prismRectangle, prismTriangle, Cilinder};