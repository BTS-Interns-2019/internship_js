
const prism = require('./prism_luisg.js')
const prism1 = new prism(1,1,1)
test("Prisma 1,1,1", function () {
    expect(prism1.area()).toBe(1);
    expect(prism1.perimeter()).toBe(4);
    expect(prism1.volume()).toBe(1);
})
const prism2 = new prism(3,5,7)
test("Prisma 2,1,1", function () {
    expect(prism2.area()).toBe(15);
    expect(prism2.perimeter()).toBe(16);
    expect(prism2.volume()).toBe(105);
})
const prism3 = new prism(2,1,1)
test("Prisma 2,1,1", function () {
    expect(prism3.area()).toBe(2);
    expect(prism3.perimeter()).toBe(6);
    expect(prism3.volume()).toBe(2);
})