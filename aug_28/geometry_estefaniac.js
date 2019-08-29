function Figure () {
    this.descriptionObj = undefined,
    this.description = undefined,
    this.area = undefined,
    this.perimeter = undefined
};


Figure.prototype = {
    get descriptionObj() {
      return {
      type: this.tipo,
      measure: this.medidas}
    },
    get description() {
      return `${this.tipo} of base = ${this.medidas.base}, height = ${this.medidas.height}, radio = ${this.medidas.radio}, vHeight = ${this.medidas.vHeight}`;
    }
  }

function Rectangle(base, height) {
    Figure.call(this)
    this.tipo = 'Rectangle',
    this.medidas = {
        base: base,
        height: height
        }
    this.area = base * height,
    this.perimeter = base*2 + height*2
}
Rectangle.prototype = Object.create(Figure.prototype);

// Rectangle.prototype = Figure;

function Square(base) {
    Figure.call(this)
    this.tipo = 'Square',
    this.medidas = {
        base: base
        }
    this.area = base * base
    this.perimeter = base * 4
}
Square.prototype = Object.create(Figure.prototype);

function Triangle(base, height) {
    Figure.call(this)
    this.tipo = 'Triangle',
    this.medidas = {
        base: base,
        height: height
        }
    this.area = (base * height) / 2;
    this.perimeter = base + (Math.sqrt( (base/2)*(base/2) + height*height ))*2;

}
Triangle.prototype = Object.create(Figure.prototype);

function Circle(radio) {
    Figure.call(this)
    this.tipo = 'Circle';
    this.medidas = {
        radio: radio
    };
    this.area = Math.PI * Math.pow(radio,2);
    this.perimeter = (2*Math.PI) * radio;
}
Circle.prototype = Object.create(Figure.prototype);

function Cube(square) {
    if(square.descriptionObj.type!=='Square') {
        throw `"Error creating Cube: It expects an object of Type Square but got ${square.descriptionObj.type} instead"`;
    }
    this.tipo = 'Cube';
    this.medidas = {
        base: square.medidas.base
    }
    this.area = square.area * 6;
    this.perimeter = square.perimeter;
  }
  Cube.prototype = Object.create(Figure.prototype);

function PrismRectangle(rectangle, vHeight) {
    if(rectangle.descriptionObj.type!=='Rectangle') {
        throw `"Error creating PrismRectangle: It expects an object of Type Rectangle but got ${rectangle.descriptionObj.type} instead"`;
    }
    this.tipo = 'PrismRectangle';
    this.medidas = {
        base: rectangle.medidas.base,
        height: rectangle.medidas.height,
        vHeight: vHeight
    }
    this.area = (() => {
        return (rectangle.area * 2)
          + ((this.base * this.vHeight) * 2)
          + ((this.height * this.vHeight) * 2);
      })();

 
    this.perimeter = rectangle.perimeter;
}
PrismRectangle.prototype = Object.create(Figure.prototype);

function PrismTriangle(triangle, vHeight) {
    if(triangle.descriptionObj.type!=='Triangle') {
        throw `"Error creating PrismTriangle: It expects an object of Type Triangle but got ${triangle.descriptionObj.type} instead"`;
    }
    this.tipo = 'PrismTriangle';
    this.medidas = {
        base: triangle.medidas.base,
        height: triangle.medidas.height,
        vHeight: vHeight
    }
    this.area = (() => {
        const sideBaseArea = this.base * this.vHeight;
        const sideHeightAreaTotal = (this.height * this.vHeight) * 2;
        const sideAreaTotal = sideBaseArea + sideHeightAreaTotal;
        const triangleAreaTotal = triangle.area * 2;
        return sideAreaTotal + triangleAreaTotal;
      })();
      this.perimeter = triangle.perimeter;
    }
PrismTriangle.prototype = Object.create(Figure.prototype);


function Cilinder(circle) {
    if(circle.descriptionObj.type!=='Circle') {
        throw `"Error creating Cilinder: It expects an object of Type Circle but got ${circle.descriptionObj.type} instead"`;
    }


}
const rectangle = new Rectangle(3,2);
const circle = new Circle (2);
const prismRectangle = new PrismRectangle (rectangle, 2);
const square = new Square(10);
const cube = new Cube(square);
const triangle = new Triangle(10, 11);
const prismTriangle= new PrismTriangle(triangle, 2);

// console.log(square.descriptionObj);
// console.log(square.description);
// console.log(circle.descriptionObj);
// console.log(circle.description);
// console.log(rectangle.descriptionObj);
// console.log(rectangle.description);
// console.log(rectangle.perimeter);
console.log(prismRectangle.descriptionObj);
console.log(prismRectangle.area);
console.log(prismRectangle.perimeter);
console.log(prismTriangle.descriptionObj);
console.log(cube.descriptionObj);

module.exports = {
    Square,
    Rectangle,
    Triangle,
    Circle,
    Cube,
    PrismRectangle,
    PrismTriangle,
    Cilinder,
  };