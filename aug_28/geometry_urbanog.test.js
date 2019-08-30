const {
  Rectangle, Square, Triangle, Circle, prismRectangule, Cube, Cilinder, PrismTriangle,
} = require('./geometry_urbanog');

describe('Test for geometry', () => {
  const cuad = new Square(10);
  const rect = new Rectangle(10, 5);
  const tri = new Triangle(10, 5);
  const circ = new Circle(5);
  test('cuad is prototype of square', () => {
    expect(Square.prototype.isPrototypeOf(cuad)).toBe(true);
  });
  test('Perimeter of triangle', () => {
    expect(rect.perimeter).toBe(30);
  });
  test('cuad is prototype of square', () => {
    expect(tri.area).toBe(25);
  });
  test('descriptionOpbject must ba an object', () => {
    expect(typeof circ.descriptionObject).toBe('object');
  });
});
