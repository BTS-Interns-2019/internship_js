function Figure(base, height, radius, vHeight) {
  this.base = base;
  this.height = height;
  this.radius = radius;
  this.vHeight = vHeight;
  this.descObj = {
    type: '',
    measures: {
      base: this.base,
      height: this.height,
      radius: this.radius,
      vHeight: this.vHeight,
    },
  };
  this.areaFig;
  this.perimFig;
}

Object.defineProperties(Figure, {
  descriptionObject: {
    get() {
      return this.descObj;
    },
    set(type) {
      console.log(type);
      this.descObj.type = type;
    },
  },
  description: {
    get() {
      return `${this.descObj.type} of base = ${this.descObj.measures.base} 
      height= ${this.descObj.measures.height} 
      radius = ${this.descObj.measures.radius}
       vHeight= ${this.descObj.measures.vHeight}`;
    },
  },
  area: {
    get() {
      return this.areaFig;
    },
  },
  perimeter: {
    get() {
      return this.perimFig;
    },
  },
});

function Rectangle(base, height) {
  Figure.apply(this, [base, height]);
  this.descObj.type = 'rectangle';
  this.areaFig = base * height;
  this.perimFig = base * 2 + height * 2;
}

Rectangle.prototype = Object.create(Figure);
const rect = new Rectangle(5, 2);
console.log(rect.area);
console.log(rect.perimeter);
console.log(rect.description);

function Square(base) {
  Figure.apply(this, [base]);
  this.descObj.type = 'square';
  this.areaFig = base * base;
  this.perimFig = base * 4;
}
Square.prototype = Object.create(Figure);
const cuadrado = new Square(5);
console.log(cuadrado.area);
console.log(cuadrado.perimeter);
console.log(cuadrado.description);
console.log(typeof cuadrado.descriptionObject);

function Triangle(base, height) {
  Figure.apply(this, [base, height]);
  this.descObj.type = 'triangle';
  this.areaFig = (base * height) / 2;
  const h = Math.sqrt(Math.pow((base / 2), 2) + Math.pow(height, 2));
  this.perimFig = (h.toFixed(2) * 2) + base;
}
Triangle.prototype = Object.create(Figure);
const trian = new Triangle(4, 5);
console.log(trian.area);
console.log(trian.perimeter);
console.log(trian.description);

function Circle(radius) {
  Figure.apply(this, [0, 0, radius, 0]);
  this.descObj.type = 'circle';
  this.areaFig = Math.PI * (radius ** 2);
  this.perimFig = 2 * (Math.PI) * radius;
}
Circle.prototype = Object.create(Figure);
const circun = new Circle(3);
console.log(circun.area);
console.log(circun.perimeter);
console.log(circun.description);
function prismRectangule(rectangle, vHeight) {
  if (rectangle.descObj.type !== 'rectangle') {
    throw 'creating Prism: It expects an object of Type Rectangle but got Triangle instead';
  } else {
    Figure.apply(this, [rectangle.base, rectangle.height, 0, vHeight]);
    this.descObj.type = 'Rectangle prism';
    this.areaFig = rectangle.area * 2 + rectangle.base * vHeight * 2 + rectangle.height + vHeight * 2;
    this.perimFig = 4 * rectangle.base + 4 * rectangle.height + 4 * vHeight;
  }
}
prismRectangule.prototype = Object.create(Figure);
const box = new prismRectangule(rect, 8);
console.log(box.area);
console.log(box.perimeter);
console.log(box.description);

function Cube(cubo, vHeight) {
  Figure.apply(this, [cubo.base, cubo.base, 0, vHeight]);
  this.descObj.type = 'cube';
  this.areaFig = cubo.area * 6;
  this.perimFig = cubo.base * 12;
}

Cube.prototype = Object.create(Figure);
const steve = new Cube(cuadrado, 10);
console.log(steve.area);
console.log(steve.perimeter);
console.log(steve.description);


function Cilinder(circ, vHeight) {
  Figure.apply(this, [0, 0, circ.radius, vHeight]);
  this.descObj.type = 'cilinder';
  this.areaFig = 2 * Math.PI * circ.radius * (vHeight + circ.radius);
  this.perimFig = 2 * Math.PI * circ.radius ** 2 * vHeight + 4 * (Math.PI * circ.radius ** 2);
}
Cilinder.prototype = Object.create(Figure);
const cilindro = new Cilinder(circun, 5);
console.log(cilindro.area);

function PrismTriangle(triangle, vHeight) {
  Figure.apply(this, [triangle.base, triangle.height, 0, vHeight]);
  this.descObj.type = 'prismTriangle';
  this.area = (triangle.base * vHeight) * 3 + (triangle.area * 2);
  this.perimeter = triangle.perimeter * 2 + (triangle.base * 2 + vHeight * 2) * 3;
}


module.exports = {
   Rectangle, Square, Triangle, Circle, prismRectangule, Cube,  Cilinder, PrismTriangle,
};
