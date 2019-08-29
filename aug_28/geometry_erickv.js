const Figure = {
  get descriptionObj (){
    return {type: this.type,
    mesures: this.mesures
    }
  },
};

/*<----------Square constructor----------> */
function Square(base){
  this.base = base,
  this.area = base * base,
  this.perimeter = (base + base) / 2
  this.type = 'Square'
  this.mesures = {
    base: this.base
  }
  this.description = `Base of ${this.type} = ${base}`
}
Square.prototype = Figure;

/*<----------Rectangle constructor---------> */
function Rectangle(base, height){
  this.base = base,
  this.height = height,
  this.area = base * height,
  this.perimeter = (base + height) * 2,
  this.type = 'Rectangle'
  this.mesures = {
    base: this.base,
    height: this.height
  }
  this.description = `Base of ${this.type} = ${base}, height = ${height}`
};
Rectangle.prototype = Figure;

/*---------------Triangle----------------- */
function Triangle(base, height){
  this.base = base,
  this.height = height,
  this.area = (base * height) / 2
  this.perimeter = (Math.sqrt( Math.pow(base/2, 2) + Math.pow(height, 2) )) * 2 + base
  this.type = 'Triangle'
  this.mesures = {
    base: this.base,
    height: this.height 
  }
  this.description = `Base of ${this.type} = ${base} height = ${height}`
};
Triangle.prototype = Figure;

/*------------------Circle-------------------- */
function Circle(radius){
  this.radius = radius,
  this.area = Math.pow((Math.PI * radius), 2),
  this.perimeter = Math.PI * (radius * 2),
  this.type = 'Circle';
  this.mesures = {
    radius: this.radius
  }
  this.description = `Radius of ${this.type} = ${radius}`
};
Circle.prototype = Figure;

/*------------------Cube----------------------- */
function Cube(base){
  this.base = base,
  this.area = (base * base) * 6,
  this.perimeter = (base * base) / 2,
  this.type = 'Cube',
  this.mesures = {
    base: this.base
  },
  this.description = `Base of ${this.type} = ${this.base}`
};
Cube.prototype = Figure;

/*----------------RectanglePrism---------------- */
function PrismRectangle(base, height, vHeight){
  this.base = base,
  this.height = height,
  this.vHeight = vHeight,
  this.area = 2 * ( (height*base) + (height*vHeight) + (base*vHeight) ),
  this.perimeter = (4 * base) + (4 * height) + (4 * vHeight),
  this.type = 'PrismRectangle',
  this.mesures = {
    base: this.base,
    height: this.height,
    vHeight: this.vHeight
  }
  this.description = `Base of ${this.type} = ${this.base}, height = ${this.height}, vHeight = ${this.vHeight}`
};
PrismRectangle.prototype = Figure;

function PrismTriangle(base, height, vHeight){
  this.base = base,
  this.height = height,
  this.vHeight = vHeight,
  this.area = base * ( ( (Math.sqrt(3) / 2 ) * base) + (3 * height) )
  this.perimeter = (base * height) + ((base * height) * 3)
  this.type = 'PrismTriangle',
  this.mesures = {
    base: this.base,
    height: this.height,
    vHeight: this.vHeight
  }
  this.description = `Base of ${this.type} = ${this.base}, height = ${this.height}, vHeight = ${this.vHeight}`
};
PrismTriangle.prototype = Figure;

function Cilinder (radius, vHeight){
  this.radius = radius,
  this.vHeight = vHeight,
  this.area = Math.pow((Math.PI * radius), 2) * 2,
  this.perimeter = 
  this.type = 'Cilinder,'
  this.mesures = {
    radius: this.radius,
    vHeight: this.vHeight
  },
  this.description = `Radius of ${this.type} = ${radius}, vHeight = ${this.vHeight}`
};
Cilinder.prototype = Figure;



