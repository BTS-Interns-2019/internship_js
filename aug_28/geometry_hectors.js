// Figure constructor
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
  this.figArea = 0;
  this.figPerimeter = 0;
}

// Defining properties descriptionObj and description
Object.defineProperties(Figure, {
  descriptionObj: {
    get() {
      return this.descObj;
    },
    set(type) {
      this.descObj.type = type;
    },
  },
  description: {
    get() {
      return `${this.descObj.type} of base = ${this.descObj.measures.base}, height = ${this.descObj.measures.height}, radius = ${this.descObj.measures.radius}, vHeight = ${this.descObj.measures.vHeight}`;
    },
  },
  area: {
    get() {
      return this.figArea;
    },
    set(result) {
      this.figArea = result;
    },
  },
  perimeter: {
    get() {
      return this.figPerimeter;
    },
    set(result) {
      this.figPerimeter = result;
    },
  },
});

/**
 * 2D Objects
 */
// Rectangle
function Rectangle(base, height) {
  Figure.apply(this, [base, height]);
  this.descriptionObj = 'Rectangle';
  this.area = (() => this.base * this.height)();
  this.perimeter = (() => (this.base * 2) + (this.height * 2))();
}
Rectangle.prototype = Object.create(Figure);

// Square
function Square(base) {
  Figure.apply(this, [base]);
  this.descriptionObj = 'Square';
  this.area = (() => this.base ** 2)();
  this.perimeter = (() => this.base * 4)();
}
Square.prototype = Object.create(Figure);

// Triangle
function Triangle(base, height) {
  Figure.apply(this, [base, height]);
  this.descriptionObj = 'Triangle';
  this.area = (() => (this.base * this.height) / 2)();
  // this perimeter assumes the height of the triangle is right at the middle of the base
  this.perimeter = (() => {
    const sideLength = Math.sqrt(((this.base / 2) ** 2) + (this.height ** 2));
    return (sideLength * 2) + this.base;
  })();
}
Triangle.prototype = Object.create(Figure);

// Circle
function Circle(radius) {
  Figure.apply(this, [undefined, undefined, radius]);
  this.descriptionObj = 'Circle';
  this.area = (() => Math.PI * (this.radius ** 2))();
  this.perimeter = (() => Math.PI * (this.radius * 2))();
}
Circle.prototype = Object.create(Figure);

/**
 * 3D Objects
 */
function Cube(square) {
  if (square.descriptionObj.type !== 'Square') {
    throw `"Error creating Cube: It expects an object of Type Square but got ${square.descriptionObj.type} instead"`;
  }
  Figure.apply(this, [square.base]);
  this.descriptionObj = 'Cube';
  this.area = square.area * 6;
  this.perimeter = square.perimeter;
}
Cube.prototype = Object.create(Figure);

// Rememeber, from this point on height is length
function PrismRectangle(rectangle, vHeight) {
  if (rectangle.descriptionObj.type !== 'Rectangle') {
    throw `"Error creating PrismRectangle: It expects an object of Type Rectangle but got ${rectangle.descriptionObj.type} instead"`;
  }
  Figure.apply(this, [rectangle.base, rectangle.height, undefined, vHeight]);
  this.descriptionObj = 'PrismRectangle';
  this.area = (() => {
    return (rectangle.area * 2)
      + ((this.base * this.vHeight) * 2)
      + ((this.height * this.vHeight) * 2);
  })();
  this.perimeter = rectangle.perimeter;
}
PrismRectangle.prototype = Object.create(Figure);

// Uniform PrismTriangle
function PrismTriangle(triangle, vHeight) {
  if (triangle.descriptionObj.type !== 'Triangle') {
    throw `"Error creating PrismTriangle: It expects an object of Type Triangle but got ${triangle.descriptionObj.type} instead"`;
  }
  Figure.apply(this, [triangle.base, triangle.height, undefined, vHeight]);
  this.descriptionObj = 'PrismTriangle';
  this.area = (() => {
    const sideBaseArea = this.base * this.vHeight;
    const sideHeightAreaTotal = (this.height * this.vHeight) * 2;
    const sideAreaTotal = sideBaseArea + sideHeightAreaTotal;
    const triangleAreaTotal = triangle.area * 2;
    // console.log(sideBaseArea, sideHeightAreaTotal, sideAreaTotal, triangle.area);
    return sideAreaTotal + triangleAreaTotal;
  })();
  this.perimeter = triangle.perimeter;
}
PrismTriangle.prototype = Object.create(Figure);

// Cylinder
function Cylinder(circle, vHeight) {
  if (circle.descriptionObj.type !== 'Circle') {
    throw `"Error creating Cylinder: It expects an object of Type Circle but got ${circle.descriptionObj.type} instead"`;
  }
  Figure.apply(this, [undefined, undefined, circle.radius, vHeight]);
  this.descriptionObj = 'Cylinder';
  this.area = (() => {
    const circleAreaTotal = circle.area * 2;
    const sideArea = circle.perimeter * vHeight;
    return circleAreaTotal + sideArea;
  })();
  this.perimeter = circle.perimeter;
}
Cylinder.prototype = Object.create(Figure);

module.exports = {
  Square,
  Rectangle,
  Triangle,
  Circle,
  Cube,
  PrismRectangle,
  PrismTriangle,
  Cylinder,
};
