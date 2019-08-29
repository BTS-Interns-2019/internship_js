const Figure = require('./geometry_davids.js');
const Square = require('./geometry_davids.js');
const Rectangle = require('./geometry_davids.js');
const Triangle = require('./geometry_davids.js');
const Circle = require('./geometry_davids.js');
const Cube = require('./geometry_davids.js');
const PrismRectangle = require('./geometry_davids.js');
const PrismTriangle = require('./geometry_davids.js');
const Cilinder = require('./geometry_davids.js');

describe('figures', () =>{
  const aSquare = new Square(2);
  const bRectangle = new Rectangle(2, 4);
  const cTriangle = new Triangle(1, 1);
  const dCircle = new Circle(1);
  const eCube = new Cube(10);
  const fPrismRectangle = new PrismRectangle(1, 2, 3);
  const gPrismtTriangle = new PrismTriangle(1, 1, 3);
  const hCilinder = new Cilinder(1, 3);  

  test('aSquare instanceof Figure', () => {
    expect(aSquare instanceof Figure).toEqual(true);
  });

  test('bRectangle instanceof Rectangle', () => {
    expect(bRectangle instanceof Rectangle).toEqual(true);
  });

  test('cTriangle instanceof Triangle', () => {
    expect(cTriangle instanceof Triangle).toEqual(true);
  });

  test('dCircle instanceof Circle', () => {
    expect(dCircle instanceof Circle).toEqual(true);
  });

  test('eCube instanceof Cube', () => {
    expect(eCube instanceof Cube).toEqual(true);
  });

  test('fPrismRectangle instanceof Figure', () => {
    expect(fPrismRectangle instanceof Figure).toEqual(true);
  });

  test('gPrismtTriangle instanceof Triangle', () => {
    expect(gPrismtTriangle instanceof Triangle).toEqual(true);
  });

  test('hCilinder instanceof Figure', () => {
    expect(hCilinder instanceof Figure).toEqual(true);
  });

});