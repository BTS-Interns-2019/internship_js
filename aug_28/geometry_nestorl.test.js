
const {
  Rectangle,
} = require('./geometry_nestorl.js');

describe('Rectangle', () => {
  const rectangle = new Rectangle(5, 10);

  test('it has the right size', () => {
    expect(rectangle.base).toBe(5);
    expect(rectangle.height).toBe(10);
  });

  test('it has area', () => {
    expect(rectangle.area).toBe(50);
  });

  test('it has perimeter', () => {
    expect(rectangle.perimeter).toBe(30);
  });

  test('it has descriptionObj', () => {
    expect(rectangle.descriptionObj).toEqual({
      type: 'Rectangle',
      mesures: {
        base: 5,
        height: 10,
      },
    });
  });

  test('it has description as text', () => {
    expect(rectangle.description).toBe('Rectangle of base = 5 height = 10');
  });

  test('descrition is not defined here', () => {
    expect(Object.prototype.hasOwnProperty.call(rectangle, 'description')).toBe(false);
    expect(Object.prototype.hasOwnProperty.call(Rectangle.prototype, 'description')).toBe(false);
  });
});
