const prisms = require ('./prisms_nestor.js');

const input = new prisms(2,1,1);
const output = [6,2,2];
test("prisms(2,1,1), perimetro", () => {
    expect (input.perimetro()).toEqual (output[0]);
})
test("prisms(2,1,1), area", () => {
    expect (input.area()).toEqual (output[1]);
})
test("prisms(2,1,1), volumen", () => {
    expect (input.volumen()).toEqual (output[2]);
})
test("prisms(2,1,1), typeof", () => {
    expect (typeof input).toEqual ("object");
})

const input2 = new prisms(1,1,1);
const output2 = [4,1,1];
test("prisms(1,1,1), perimetro", () => {
    expect (input2.perimetro()).toEqual (output2[0]);
})
test("prisms(1,1,1), area", () => {
    expect (input2.area()).toEqual (output2[1]);
})
test("prisms(1,1,1), volumen", () => {
    expect (input2.volumen()).toEqual (output2[2]);
})
test("prisms1,1,1), typeof", () => {
    expect (typeof input2).toEqual ("object");
})
