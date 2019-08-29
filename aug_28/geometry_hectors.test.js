const { Square, Rectangle, Triangle, Circle, Cube, PrismRectangle, PrismTriangle, Cylinder } = require('./geometry_hectors');

const square = new Square(4);
const rect = new Rectangle(3, 7);
const tri = new Triangle(2, 5);
const circle = new Circle(6);
const cube = new Cube(square);
const pRect = new PrismRectangle(rect, 15);
const pTri = new PrismTriangle(tri, 15);
const cyl = new Cylinder(circle, 14);
const figArray = [square, rect, tri, circle, cube, pRect, pTri, cyl];
const areaArray = [16, 21, 5, 113.09, 96, 342, 190, 753.98];
const perimeterArray = [16, 20, 12.19, 37.69, 16, 20, 12.19, 37.69];

describe('Description Object tests', () => {
  figArray.forEach((figure) => {
    describe(`Figure ${figure.descriptionObj.type}`, () => {
      test(`Figure ${figure.descriptionObj.type} can return a descriptionObj as an object`, () => {
        expect(typeof figure.descriptionObj).toBe('object');
      });

      test(`Figure ${figure.descriptionObj.type} can return a description as a string`, () => {
        expect(typeof figure.description).toBe('string');
      });
    });
  });
});

describe('Measure tests', () => {
  figArray.forEach((figure) => {
    describe(`Figure ${figure.descriptionObj.type}`, () => {
      test(`Figure ${figure.descriptionObj.type} can return measures as an object`, () => {
        expect(typeof figure.descriptionObj.measures).toBe('object');
      });

      test(`Figure ${figure.descriptionObj.type} has the correct measures depending on its type`, () => {
        switch(figure.descriptionObj.type) {
          case 'Square':
          case 'Cube':
            expect(figure.descriptionObj.measures.base).not.toBeUndefined();
            break;
          case 'Rectangle':
          case 'Triangle':
            expect(figure.descriptionObj.measures.base).not.toBeUndefined();
            expect(figure.descriptionObj.measures.height).not.toBeUndefined();
            break;
          case 'Circle':
            expect(figure.descriptionObj.measures.radius).not.toBeUndefined();
            break;
          case 'PrismRectangle':
          case 'PrismTriangle':
            expect(figure.descriptionObj.measures.base).not.toBeUndefined();
            expect(figure.descriptionObj.measures.height).not.toBeUndefined();
            expect(figure.descriptionObj.measures.vHeight).not.toBeUndefined();
            break;
          case 'Cylinder':
            expect(figure.descriptionObj.measures.radius).not.toBeUndefined();
            expect(figure.descriptionObj.measures.vHeight).not.toBeUndefined();
            break;
        }
      });
    });
  });
});

describe('Thrown errors', () => {
  test(`Figure Cube returns an error based on the wrong 2D figure`, () => {
    expect(() => new Cube(circle)).toThrow();
  });

  test('Figure PrismRectangle returns an error based on the wrong 2D figure', () => {
    expect(() => new PrismRectangle(circle)).toThrow();
  });

  test('Figure PrismTriangle returns an error based on the wrong 2D figure', () => {
    expect(() => new PrismTriangle(circle)).toThrow();
  });

  test('Figure Cylinder returns an error based on the wrong 2D figure', () => {
    expect(() => new Cylinder(square)).toThrow();
  });
});

describe('Check correct areas and perimeters', () => {
  figArray.forEach((figure, index) => {
    describe(`Figure ${figure.descriptionObj.type}`, () => {
      test(`Figure ${figure.descriptionObj.type} has correct area`, () => {
        expect(figure.area).toBeCloseTo(areaArray[index], 1);
      });

      test(`Figure ${figure.descriptionObj.type} has correct perimeter`, () => {
        expect(figure.perimeter).toBeCloseTo(perimeterArray[index], 1);
      });
    });
  });
})
