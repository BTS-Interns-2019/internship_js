const {
    Square,
  Triangle,
  Rectangle,
  Circle,
  Cube,
  PrismRectangle,
  PrismTriangle,
  Cilinder,
  Figure
} = require ( './geometry_erickv.js')

const cuadrado = new Square(10);
const rectangulo = new Rectangle(10, 30);
const triangulo = new Triangle(10, 11);
const circulo = new Circle(25);

const cubo = new Cube(10);
const prismarectangular = new PrismRectangle(10, 30, 20);
const prismatriangular = new PrismTriangle(10, 30, 20);
const cilindro = new Cilinder (25, 40);
Square.prototype = Figure
Rectangle.prototype = Figure
Triangle.prototype = Figure
Circle.prototype = Figure
Cube.prototype = Figure
PrismRectangle.prototype = Figure
PrismTriangle.prototype = Figure
Cilinder.prototype = Figure


describe('Figure Prototype check', () => {
  test('cuadrado prototype = Figure', () => {
    expect(Figure.isPrototypeOf(cuadrado)).toBe(true) 
  });
  test('rectangulo prototype = Figure', () => {
    expect(Figure.isPrototypeOf(rectangulo)).toBe(true)  
  }); 
  test('triangulo prototype = Figure', () => {
    expect(Figure.isPrototypeOf(triangulo)).toBe(true)   
  });
  test('circulo prototype = Figure', () => {
    expect(Figure.isPrototypeOf(circulo)).toBe(true)  
  }); 
  test('cubo prototype = Figure', () => {
    expect(Figure.isPrototypeOf(cubo)).toBe(true)   
  });
  test('prismarectangular prototype = Figure', () => {
    expect(Figure.isPrototypeOf(prismarectangular)).toBe(true)   
  });
  test('prismatriangular prototype = Figure', () => {
    expect(Figure.isPrototypeOf(prismatriangular)).toBe(true)   
  });
  test('ciliondro prototype = Figure', () => {
    expect(Figure.isPrototypeOf(cilindro)).toBe(true) 
  });  
});

describe('Area, perimeter', () => {
  /*--------Square---------- */
  describe('----Square----', () => {
    let cuadroPerimeter = cuadrado.perimeter
    let cuadroArea = cuadrado.area
    test('Square perimeter', () => {
      expect(cuadrado.perimeter).toBe(cuadroPerimeter)
    })
    test('Square area', () => {
      expect(cuadrado.area).toBe(cuadroArea)
    })
  });
  /*---------Rectangle----------- */
  describe('----Rectangle----', () => {
    let rectaPerimeter = rectangulo.perimeter
    let rectaArea = rectangulo.area
    test('Rectangle perimeter', () => {
      expect(rectangulo.perimeter).toBe(rectaPerimeter)
    })
    test('Rectangle area', () => {
      expect(rectangulo.area).toBe(rectaArea)
    })
  });
  /*--------Triangle------- */
  describe('----Triangle----', () => {
    let rectaPerimeter = rectangulo.perimeter
    let rectaArea = rectangulo.area
    test('Square perimeter', () => {
      expect(rectangulo.perimeter).toBe(rectaPerimeter)
    })
    test('Square area', () => {
      expect(rectangulo.area).toBe(rectaArea)
    })
  });
   /*--------Circle------- */
   describe('----Circle----', () => {
    let circuPerimeter = circulo.perimeter
    let circuArea = circulo.area
    test('Square perimeter', () => {
      expect(circulo.perimeter).toBe(circuPerimeter)
    })
    test('Square area', () => {
      expect(circulo.area).toBe(circuArea)
    });
     /*--------Cube------- */
  describe('----Cubo----', () => {
    let cuboPerimeter = cubo.perimeter
    let cuboArea = cubo.area
    test('Square perimeter', () => {
      expect(cubo.perimeter).toBe(cuboPerimeter)
    })
    test('Square area', () => {
      expect(cubo.area).toBe(cuboArea)
    })
  });
   /*--------PrismRectangular------- */
   describe('----PrismRectangular----', () => {
    let prisRecPerimeter = PrismRectangle.perimeter
    let prisRecArea = PrismRectangle.area
    test('Square perimeter', () => {
      expect(PrismRectangle.perimeter).toBe(prisRecPerimeter)
    })
    test('Square area', () => {
      expect(PrismRectangle.area).toBe(prisRecArea)
    });
     /*--------prismaTriangular------- */
  describe('----prismaTriangular----', () => {
    let prisTriPerimeter = prismatriangular.perimeter
    let prisTriArea = prismatriangular.area
    test('Square perimeter', () => {
      expect(prismatriangular.perimeter).toBe(prisTriPerimeter)
    })
    test('Square area', () => {
      expect(prismatriangular.area).toBe(prisTriArea)
    })
  });
   /*--------Cilindeer------- */
   describe('----Cilindeer----', () => {
    let cilinPerimeter = cilindro.perimeter
    let cilinArea = cilindro.area
    test('Square perimeter', () => {
      expect(cilindro.perimeter).toBe(cilinPerimeter)
    })
    test('Square area', () => {
      expect(cilindro.area).toBe(cilinArea)
    })
  });
  });

  });

})