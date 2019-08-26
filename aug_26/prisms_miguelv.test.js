const prism = require("./prisms.js");

p1=new prism(1,1,1);
p2=new prism(2,2,6);
p3=new prism(2,1,1);

describe('Test prism 1', ()=>{
    test("P1 Get long",()=>{
        expect(p1.long).toBe(1);
    })
    test("P1 Get height",()=>{
        expect(p1.height).toBe(1);
    })
    test("P1 Get width",()=>{
        expect(p1.width).toBe(1);
    })
    test("P1 Get perimeter",()=>{
        expect(p1.perimeter()).toBe(4);
    })
    test("P1 Get area",()=>{
        expect(p1.area()).toBe(1);
    })
    test("P1 Get volume",()=>{
        expect(p1.volume()).toBe(1);
    })
});
describe('Test prism 2', ()=>{
    test("P2 Get long",()=>{
        expect(p2.long).toBe(2);
    })
    test("P2 Get height",()=>{
        expect(p2.height).toBe(2);
    })
    test("P2 Get width",()=>{
        expect(p2.width).toBe(6);
    })
    test("P2 Get perimeter",()=>{
        expect(p2.perimeter()).toBe(8);
    })
    test("P2 Get area",()=>{
        expect(p2.area()).toBe(4);
    })
    test("P2 Get volume",()=>{
        expect(p2.volume()).toBe(24);
    })
});
describe('Test prism 3', ()=>{
    test("P3 Get long",()=>{
        expect(p3.long).toBe(2);
    })
    test("P3 Get height",()=>{
        expect(p3.height).toBe(1);
    })
    test("P3 Get width",()=>{
        expect(p3.width).toBe(1);
    })
    test("P3 Get perimeter",()=>{
        expect(p3.perimeter()).toBe(6);
    })
    test("P3 Get area",()=>{
        expect(p3.area()).toBe(2);
    })
    test("P3 Get volume",()=>{
        expect(p3.volume()).toBe(2);
    })
});
