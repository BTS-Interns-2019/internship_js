Figure = function() {
  this.tipo = undefined,
  this.medidas = undefined
};

Figure.prototype = {
  get descriptionObj() {
    return {
    type: this.tipo,
    measure: this.medidas
    }
  },
  get description() {
    return `${this.tipo} of measures = ${Object.entries(this.medidas)}`;
  }
}

Square = function(base) {
  Figure.call(this);
  this.tipo = 'Square';
  this.medidas = {
    base: base
  };
  this.base = base;
}

Square.prototype = Object.create(Figure.prototype, {
  perimeter: {
    get () {
      return this.base*4;
    }
  },
  area: {
    get () {
      return this.base*this.base;
    }
  }
});

Rectangle = function(base, height) {
  Figure.call(this);
  this.tipo = 'Rectangle';
  this.medidas = {
    base: base,
    height: height
  };
  this.base = base;
  this.height = height;
}

Rectangle.prototype = Object.create(Figure.prototype, {
  perimeter: {
    get () {
      return this.base*2 + this.height*2;
    }
  },
  area: {
    get () {
      return this.base*this.height;
    }
  }
});

Triangle = function(base, height) {
  Figure.call(this);
  this.tipo = 'Triangle';
  this.medidas = {
    base: base,
    height: height
  };
  this.base = base;
  this.height = height;
}

Triangle.prototype = Object.create(Figure.prototype, {
  perimeter: {
    get () {
      return this.base + (Math.sqrt( (this.base/2)*(this.base/2) + this.height*this.height ))*2;
    }
  },
  area: {
    get () {
      return (this.base*this.height)/2;
    }
  }
});

Circle = function(radius) {
  Figure.call(this);
  this.tipo = 'Circle';
  this.medidas = {
    radius: radius
  };
  this.radius = radius;
}

Circle.prototype = Object.create(Figure.prototype, {
  perimeter: {
    get () {
      return 2*Math.PI*this.radius;
    }
  },
  area: {
    get () {
      return Math.PI*this.radius*this.radius;
    }
  }
});

Cube = function(base) {
  Square.call(this);
  this.tipo = 'Cube';
  this.medidas = {
    base: base
  };
  this.base = base;
}
Cube.prototype = Object.create(Square.prototype, {
  area: {
    get () {
      return (this.base*this.base)*6;
    }
  }
});

PrismRectangle = function(base, height, vHeight) {
  Rectangle.call(this);
  this.tipo = 'PrismRectangle';
  this.medidas = {
    base: base,
    height: height,
    vHeight: vHeight
  };
  this.base = base;
  this.height = height;
  this.vHeight = vHeight;
}
PrismRectangle.prototype = Object.create(Rectangle.prototype, {
  area: {
    get () {
      return (this.base*this.height)*2 + (this.base*this.vHeight)*2 + (this.height*this.vHeight)*2 ;
    }
  }
});

PrismTriangle = function(base, height, vHeight) {
  Triangle.call(this);
  this.tipo = 'PrismTriangle';
  this.medidas = {
    base: base,
    height: height,
    vHeight: vHeight
  };
  this.base = base;
  this.height = height;
  this.vHeight = vHeight;
}
PrismTriangle.prototype = Object.create(Triangle.prototype, {
  area: {
    get () {
      return this.base*this.vHeight +  ( (Math.sqrt( (this.base/2)*(this.base/2) + this.height*this.height))*this.vHeight )*2 ;
    }
  }
});

Cilinder = function(radius, vHeight) {
  Circle.call(this);
  this.tipo = 'Cilinder';
  this.medidas = {
    radius: radius,
    vHeight: vHeight
  };
  this.radius = radius;
  this.vHeight = vHeight;
}
Cilinder.prototype = Object.create(Circle.prototype, {
  area: {
    get () {
      return (Math.PI*this.radius*this.radius)*2 + (2*Math.PI*this.radius)*this.vHeight;
    }
  }
});

module.exports = Figure;
module.exports = Square;
module.exports = Rectangle;
module.exports = Triangle;
module.exports = Circle;
module.exports = Cube;
module.exports = PrismRectangle;
module.exports = PrismTriangle;
module.exports = Cilinder;