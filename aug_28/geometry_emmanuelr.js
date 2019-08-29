const Figure = {
  type: undefined,
  mesures: {},
  area: 0,
  perimeter: 0,
  get descriptionObj() {
    return {
      type: this.type,
      mesures: this.mesures,
    };
  },
  get description() {
    switch (this.type) {
      case 'Rectangle':
        return `Rectangle of base ${this.mesures.base} and height ${this.mesures.height}`;
      case 'Square':
        return `Square of base ${this.mesures.base}`;
      case 'Triangle':
        return `Triangle of base ${this.mesures.base} and height ${this.mesures.height}`;
      case 'Circle':
        return `Circle of radius ${this.mesures.radius}`;
      case 'Prism Rectangle':
        return `Prism Rectangle of base ${this.mesures.base} and height ${this.mesures.height} and volumen height ${this.mesures.vHeight}`;
      case 'Cube':
        return `Cube of base ${this.mesures.base} and volumen height ${this.mesures.vHeight}`;
      case 'Prism Triangle':
        return `Prism Triangle of base ${this.mesures.base} and height ${this.mesures.height} and volumen height ${this.mesures.vHeight}`;
      case 'Cilinder':
        return `Cilinder of radius ${this.mesures.radius} and volumen height ${this.mesures.vHeight}`;
      default:
        return 'Objeto no identificado';
    }
  },
};

// 2D

function Rectangle(base, height) {
  this.type = 'Rectangle';
  this.mesures = {
    base, height,
  };
}

Rectangle.prototype = Object.create(Figure, {
  area: {
    get() {
      return this.mesures.base * this.mesures.height;
    },
  },
  perimeter: {
    get() {
      return (this.mesures.base * 2) + (this.mesures.height * 2);
    },
  },
});
function Square(base) {
  this.type = 'Square';
  this.mesures = {
    base,
  };
}
Square.prototype = Object.create(Figure, {
  area: {
    get() {
      return this.mesures.base ** 2;
    },
  },
  perimeter: {
    get() {
      return this.mesures.base * 4;
    },
  },
});

function Triangle(base, height) {
  this.type = 'Triangle';
  this.mesures = {
    base, height,
  };
}
Triangle.prototype = Object.create(Figure, {
  area: {
    get() {
      return this.mesures.base * this.mesures.height / 2;
    },
  },
  perimeter: {
    get() {
      return this.mesures.base * 3;
    },
  },
});

function Circle(radius) {
  this.type = 'Circle';
  this.mesures = {
    radius,
  };
}
Circle.prototype = Object.create(Figure, {
  area: {
    get() {
      return 3.1416 * (this.mesures.radius ** 2);
    },
  },
  perimeter: {
    get() {
      return 3.1416 * this.mesures.radius * 2;
    },
  },
});

// Error si recive uno objeto erroneo para crear un prisma

function err(type3D, type2D, badType) {
  throw new Error(message = `Error creating ${type3D}: It expects an object of Type ${type2D} but got ${badType} instead`);
}

// 3D

function PrismRectangle(origen, vHeight) {
  if (origen.type !== 'Rectangle') err('Prism Rectangle', 'Rectangle', origen.type);
  this.type = 'Prism Rectangle';
  this.mesures = origen.mesures;
  this.mesures.vHeight = vHeight;
  this.origen = origen;
}

PrismRectangle.prototype = Object.create(Rectangle, {
  area: {
    get() {
      return (this.origen.area * 2) + (this.origen.perimeter * this.mesures.vHeight);
    },
  },
  perimeter: {
    get() {
      return (this.mesures.base * 2) + (this.mesures.height * 2);
    },
  },
});

function Cube(origen, vHeight) {
  if (origen.type !== 'Square') err('Cube', 'Square', origen.type);
  this.type = 'Cube';
  this.mesures = origen.mesures;
  this.mesures.vHeight = vHeight;
  this.origen = origen;
}

Cube.prototype = Object.create(Square, {
  area: {
    get() {
      return (this.origen.area * 2) + (this.origen.perimeter * this.mesures.vHeight);
    },
  },
  perimeter: {
    get() {
      return this.mesures.base * 4;
    },
  },
});

function PrismTriangle(origen, vHeight) {
  if (origen.type !== 'Triangle') err('Prism Triangle', 'Triangle', origen.type);
  this.type = 'Prism Triangle';
  this.mesures = origen.mesures;
  this.mesures.vHeight = vHeight;
  this.origen = origen;
}

PrismTriangle.prototype = Object.create(Triangle, {
  area: {
    get() {
      return (this.origen.area * 2) + (this.origen.perimeter * this.mesures.vHeight);
    },
  },
  perimeter: {
    get() {
      return this.mesures.base * 3;
    },
  },
});

function Cilinder(origen, vHeight) {
  if (origen.type !== 'Circle') err('Cilinder', 'Circle', origen.type);
  this.type = 'Cilinder';
  this.mesures = origen.mesures;
  this.mesures.vHeight = vHeight;
  this.origen = origen;
}

Cilinder.prototype = Object.create(Circle, {
  area: {
    get() {
      return (this.origen.area * 2) + (this.origen.perimeter * this.mesures.vHeight);
    },
  },
  perimeter: {
    get() {
      return 3.1416 * this.mesures.radius * 2;
    },
  },
});

module.exports = {
  Rectangle, Square, Triangle, Circle, PrismRectangle, Cube, PrismTriangle, Cilinder,
};
