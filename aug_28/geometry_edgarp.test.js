const { Square, Rectangle, Triangle, Circle, Cube, PrismRectangle, PrismTriangle, Cylinder } = require('./geometry_edgarp.js');

test ('Test for rectangle', () => {
    const rectangle = new Rectangle (10, 15);
    expect(rectangle.area).toBe(150);
    expect(rectangle.perimeter).toBe(50);
    expect(rectangle.descriptionObj.type).toEqual('rectangle');
    expect(rectangle.base).toBe(10);
    expect(rectangle.height).toBe(15);
});

test ('Test for square', () => {
    const square = new Square (20);
    expect(square.area).toBe(400);
    expect(square.perimeter).toBe(80);
    expect(square.descriptionObj.type).toEqual('square');
    expect(square.base).toBe(20);
});

test ('Test for triangle', () => {
    const triangle = new Triangle (10, 15);
    expect(triangle.area).toBe(75);
    expect(triangle.perimeter).toBe(41.622776601683796);
    expect(triangle.descriptionObj.type).toEqual('triangle');
    expect(triangle.base).toBe(10);
    expect(triangle.height).toBe(15);
});

test ('Test for circle', () => {
    const circle = new Circle (10);
    expect(circle.area).toBe(314.1592653589793);
    expect(circle.perimeter).toBe(62.83185307179586);
    expect(circle.descriptionObj.type).toEqual('circle');
    expect(circle.radius).toBe(10);
});

test ('Test for cube', () => {
    const square = new Square (20);
    const cube = new Cube (square);
    expect(cube.area).toBe(2400);
    expect(cube.perimeter).toBe(240);
    expect(cube.descriptionObj.type).toEqual('cube');
});

test ('Test for PrismRectangle', () => {
    const rectangle = new Rectangle (10, 15);
    const prismrectangle = new PrismRectangle (rectangle, 8);
    expect(prismrectangle.area).toBe(700);
    expect(prismrectangle.perimeter).toBe(132);
    expect(prismrectangle.descriptionObj.type).toEqual('prismrectangle');
});

test ('Test for Prismtriangle', () => {
    const triangle = new Triangle (10, 15);
    const prismtriangle = new PrismTriangle (triangle, 6);
    expect(prismtriangle.area).toBe(399.7366596101027);
    expect(prismtriangle.perimeter).toBe(98);
    expect(prismtriangle.descriptionObj.type).toEqual('prismtriangle');
});

test ('Test for Cylinder', () => {
    const circle = new Circle (10);
    const cylinder = new Cylinder (circle, 6);
    expect(cylinder.area).toBe(1005.3096491487338);
    expect(cylinder.perimeter).toBe(5026.548245743669);
    expect(cylinder.descriptionObj.type).toEqual('cylinder');
});