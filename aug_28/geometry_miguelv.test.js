const {Rectangle, Square, Triangle, Circle, Cube, PrismRectangle, PrismTriangle, Cilinder}=require("./geometry_miguelv.js");

describe('Test 1, Square values',()=>{
    const square = new Square(10);
    test("Calc perimeter",()=>{
        expect(square.perimeter).toBe(40);
    })
    test("Calc area",()=>{
        expect(square.area).toBe(100);
    })
    test("Description of object",()=>{
        result={
            type: 'Square',
            measures: {
                base: 10
             }
        }
        expect(square.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(square.description).toBe("Square of base = 10");
    })
})
describe('Test 2, Rectangle values',()=>{
    const rectangle = new Rectangle(10,5);
    test("Calc perimeter",()=>{
        expect(rectangle.perimeter).toBe(30);
    })
    test("Calc area",()=>{
        expect(rectangle.area).toBe(50);
    })
    test("Description of object",()=>{
        result={
            type: 'Rectangle',
            measures: {
                base: 10,
                height: 5
             }
        }
        expect(rectangle.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(rectangle.description).toBe("Rectangle of base = 10 and height = 5");
    })
})
describe('Test 3, Triangle values',()=>{
    const triangle = new Triangle(10,5);
    test("Calc perimeter",()=>{
        expect(triangle.perimeter).toBe(26);
    })
    test("Calc area",()=>{
        expect(triangle.area).toBe(25);
    })
    test("Description of object",()=>{
        result={
            type: 'Triangle',
            measures: {
                base: 10,
                height: 5
             }
        }
        expect(triangle.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(triangle.description).toBe("Triangle of base = 10 and height = 5");
    })
})
describe('Test 4, Circle values',()=>{
    const circle = new Circle(10);
    test("Calc perimeter",()=>{
        expect(circle.perimeter).toBe(62);
    })
    test("Calc area",()=>{
        expect(circle.area).toBe(314);
    })
    test("Description of object",()=>{
        result={
            type: 'Circle',
            measures: {
                radius: 10
             }
        }
        expect(circle.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(circle.description).toBe("Circle of radius = 10");
    })
})
describe('Test 5, Cube values',()=>{
    const cube = new Cube(10);
    test("Calc perimeter",()=>{
        expect(cube.perimeter).toBe(120);
    })
    test("Calc area",()=>{
        expect(cube.area).toBe(600);
    })
    test("Description of object",()=>{
        result={
            type: 'Cube',
            measures: {
                base: 10
             }
        }
        expect(cube.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(cube.description).toBe("Cube of base = 10");
    })
})
describe('Test 6, Prism Rectangle values',()=>{
    const rectangle = new Rectangle(2,5)
    const prismrectangle = new PrismRectangle(rectangle,8);
    test("Calc perimeter",()=>{
        expect(prismrectangle.perimeter).toBe(60);
    })
    test("Calc area",()=>{
        expect(prismrectangle.area).toBe(132);
    })
    test("Description of object",()=>{
        result={
            type: 'Prism Rectangle',
            measures: {
                base: 2,
                height: 5,
                width: 8
             }
        }
        expect(prismrectangle.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(prismrectangle.description).toBe("Prism Rectangle of base = 2, height = 5 and width = 8");
    })
})
describe('Test 7, Prism Triangle values',()=>{
    const triangle = new Triangle(6,8)
    const prismtriangle = new PrismTriangle(triangle,8);
    test("Calc perimeter",()=>{
        expect(prismtriangle.perimeter).toBe(72);
    })
    test("Calc area",()=>{
        expect(prismtriangle.area).toBe(240);
    })
    test("Description of object",()=>{
        result={
            type: 'Prism Triangle',
            measures: {
                base: 6,
                height: 8,
                width: 8
             }
        }
        expect(prismtriangle.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(prismtriangle.description).toBe("Prism Triangle of base = 6, height = 8 and width = 8");
    })
})
describe('Test 8, Cilinder values',()=>{
    const circle = new Circle(2)
    const cilinder = new Cilinder(circle,8);
    test("Calc perimeter",()=>{
        expect(cilinder.perimeter).toBe(24);
    })
    test("Calc area",()=>{
        expect(cilinder.area).toBe(125);
    })
    test("Description of object",()=>{
        result={
            type: 'Cylinder',
            measures: {
                radius: 2,
                width: 8
             }
        }
        expect(cilinder.descriptionObj).toEqual(result);
    })
    test("Description",()=>{
        expect(cilinder.description).toBe("Cylinder of radius = 2 and width = 8");
    })
})
describe('Falsy tets',()=>{
    test("Fake triangle",()=>{
        const triangle = new Triangle(10, 11);
        const fakeCube = new Cube(triangle);
        expect(fakeCube).toEqual("Error creating Cube: It expects an object of Type Square but got Triangle instead")
    })
})
