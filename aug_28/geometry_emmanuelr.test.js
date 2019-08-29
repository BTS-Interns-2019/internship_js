const {
  Rectangle, Square, Triangle, Circle, PrismRectangle, Cube, PrismTriangle, Cilinder,
} = require('./geometry_emmanuelr');

test('area, perimetro, descripcion y descripcionObj de objetos 2d', () => {
  const rectangle = new Rectangle(3, 4);
  const square = new Square(5);
  const triangle = new Triangle(2, 6);
  const circle = new Circle(5);
  expect(rectangle.area).toBe(12);
  expect(rectangle.perimeter).toBe(14);
  expect(rectangle.description).toBe('Rectangle of base 3 and height 4');
  expect(rectangle.descriptionObj).toEqual({'mesures': {'base': 3, 'height': 4}, 'type': 'Rectangle'});
  expect(square.area).toBe(25);
  expect(square.perimeter).toBe(20);
  expect(square.description).toBe('Square of base 5');
  expect(square.descriptionObj).toEqual({'mesures': {'base': 5}, 'type': 'Square'});
  expect(triangle.area).toBe(6);
  expect(triangle.perimeter).toBe(6);
  expect(triangle.description).toBe('Triangle of base 2 and height 6');
  expect(triangle.descriptionObj).toEqual({'mesures': {'base': 2, 'height': 6}, 'type': 'Triangle'});
  expect(circle.area).toBe(78.53999999999999);
  expect(circle.perimeter).toBe(31.416);
  expect(circle.description).toBe('Circle of radius 5');
  expect(circle.descriptionObj).toEqual({'mesures': {'radius': 5,}, 'type': 'Circle'});
});

test('Objeto 3d creado con 2d erroneo', () => {
  const rectangle = new Rectangle(3, 4);
  let error;
  try { const prismRectangle = new Cilinder(rectangle, 2); } catch (e) { error = e.message; }
  expect(error).toBe('Error creating Cilinder: It expects an object of Type Circle but got Rectangle instead');
});

test('Objeto 3d creado correctamente', () => {
  const square = new Square(5);
  const cube = new Cube(square, 5);
  expect(cube.area).toBe(150);
  expect(cube.perimeter).toBe(20);
});
