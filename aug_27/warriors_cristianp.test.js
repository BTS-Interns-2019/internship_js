const {Ninja, Samurai} = require("./warriors_cristianp.js");

const cris = new Ninja("arma");
const nes = new Ninja();
const urb = new Samurai();
const serch = new Samurai();

test("ninja cris heal 10: 110",()=>{
    expect(cris.heal(10)).toBe(110);
});
test("ninjas healUnit 20. healpoints: 130",()=>{
    cris.healUnit(20);
    expect(cris.healthPoints).toBe(130);
});
test("ninja nes healpoints: 110",()=>{
    expect(nes.healthPoints).toBe(120);
});
test("Samurai urb healpoints: 100",()=>{
    expect(urb.healthPoints).toBe(100);
});
test("Samurai use breathing vs ninja cris",()=>{
    urb.breathing(cris);
    expect(cris.shieldPoints).toBe(0);
});
test("cris is dead? false",()=>{
    expect(urb.isDead).toBe(false);
});
test("healthpoints from cris ",()=>{
    expect(cris.healthPoints).toBe(125);
});
test("serch attack cris whith breathing: ",()=>{
    serch.breathing(cris);
    expect(cris.healthPoints).toBe(100);
});
test("fatallity to serch",()=>{
    cris.jutsu(serch);
    cris.jutsu(serch);
    cris.jutsu(serch);
    expect(serch.isDead).toBe(true);
})