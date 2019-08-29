const {Square, Rectangle, Triangle, Circle, Cube, PrismRectangle, PrismTriangle, Cylinder} = require("./geometry_cristianp.js");

const cuadrado = new Square(10);
const rectangle = new Rectangle(10,5);
const triangle = new Triangle(5,5);
const circle = new Circle(12);
const cubo = new Cube(cuadrado);
const prectangle = new PrismRectangle(rectangle, 8);
const ptriangle = new PrismTriangle(triangle, 2);
const cy = new Cylinder(circle,5);


test("square base 10, area",()=>{
    expect(cuadrado.area).toBe(100);
});
test("square base 10, perimeter",()=>{
    expect(cuadrado.perimeter).toBe(40);
});
test("square base 10, description",()=>{
    expect(cuadrado.description).toBe("square base = 10");
});

test("cube base 10, area",()=>{
    expect(cubo.area).toBe(600);
});
test("cube base 10, perimeter",()=>{
    expect(cubo.perimeter).toBe(120);
});
test("cube base 10, description",()=>{
    expect(cubo.description).toBe("cube base = 10");
});

test("rectangle base 10, height = 5, area",()=>{
    expect(rectangle.area).toBe(50);
});
test("rectangle base 10, height = 5 perimeter",()=>{
    expect(rectangle.perimeter).toBe(30);
});
test("rectangle base 10,  height = 5 description",()=>{
    expect(rectangle.description).toBe("rectangle base = 10, height = 5");
});

test("prismRectangle whith rectangle, vheight = 8  area",()=>{
    expect(prectangle.area).toBe(340);
});
test("prismRectangle whith rectangle, vheight = 8 perimeter",()=>{
    expect(prectangle.perimeter).toBe(92);
});
test("prismRectangle whith rectangle, vheight = 8  description",()=>{
    expect(prectangle.description).toBe("prismrectangle base = 10, height = 5, vHeight = 8");
});

test("triangle base 5, heigth = 5",()=>{
    expect(triangle.area).toBe(12.5);
});
test("triangle base 5, heigth = 5",()=>{
    expect(triangle.perimeter).toBe(16.18033988749895);
});
test("triangle base 5, heigth = 5",()=>{
    expect(triangle.description).toBe("triangle base = 5, height = 5");
});

test("prismtriangle with triangle and vHeight 2",()=>{
    expect(ptriangle.area).toBe(57.3606797749979);
});
test("prismtriangle with triangle and vHeight 2",()=>{
    expect(ptriangle.perimeter).toBe(36);
});
test("prismtriangle with triangle and vHeight 2",()=>{
    expect(ptriangle.description).toBe("prismtriangle base = 5 height = 5 vHeight = 2");
});

test("circle radius 12, area",()=>{
    expect(circle.area).toBe(452.3893421169302);
});
test("circle radius 12 perimeter",()=>{
    expect(circle.perimeter).toBe(75.39822368615503);
});
test("circle radius 12 description",()=>{
    expect(circle.description).toBe("circle radius = 12");
});

test("cylinder with circle and vheght 5, area",()=>{
    expect(cy.area).toBe(1281.7698026646356);
});
test("cylinder with circle and vheght 5 perimeter",()=>{
    expect(cy.perimeter).toBe(6333.450789637023);
});
test("cylinder with circle and vheght 5 description",()=>{
    expect(cy.description).toBe("cylinder radius = 12 vHeight = 5");
});