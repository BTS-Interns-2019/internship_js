const Persona = require("./warriors_miguelv.js");

const Hanzo = new Ninja();
const Chiyome = new Ninja();

const Nobunaga = new Samurai();
const Masamune = new Samurai();

test("Test 1",()=>{
    Hanzo.heal(10);
    expect(Hanzo.healthPoints).toBe(110);
})