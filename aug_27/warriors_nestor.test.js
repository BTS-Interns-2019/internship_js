const { Ninja, Samurai } = require ('./warriors_nestor.js');

const gaiden = new Ninja();
const naruto = new Ninja();
const tanjiro = new Samurai();
const batusai = new Samurai();

test("gaiden heal by 10", () => {
    expect (gaiden.heal(10)).toEqual (110);
})

test("gaiden heal unit by 20", () => {
    gaiden.healUnit(20)
    expect (gaiden.healthPoints).toEqual (130);
    expect (naruto.healthPoints).toEqual (120);
})

test("batusai use breathing to gaiden", () => {
    expect (batusai.breathing(gaiden)).toEqual (false);
    expect (gaiden.healthPoints).toEqual (125);
    expect (gaiden.isDead).toEqual (false);
})

test("Naruto attack Tanjiro", () => {
    expect (naruto.attack(tanjiro)).toEqual (false);
    expect (tanjiro.healthPoints).toEqual (100);
    expect (tanjiro.shieldPoints).toEqual (0);
})

test("Tanjiro use breathing gaiden", () => {
    expect (tanjiro.breathing(gaiden)).toEqual (false);
    expect (gaiden.healthPoints).toEqual (100);
    expect (gaiden.isDead).toEqual (false);
})

test("gaiden use jutsu batusai", () => {
    expect (gaiden.jutsu(batusai)).toEqual (false);
    expect (batusai.healthPoints).toEqual (80);
    expect (batusai.isDead).toEqual (false);
})

test("naruto use jutsu batusai", () => {
    expect (naruto.jutsu(batusai)).toEqual (false);
    expect (batusai.healthPoints).toEqual (40);
    expect (batusai.isDead).toEqual (false);
})

test("gaiden use jutsu batusai", () => {
    naruto.jutsu(batusai);
    expect (batusai.healthPoints).toEqual (0);
})

test("batusai dead", () => {
    expect (batusai.isDead).toEqual (true);
})

test("naruto use jutsu batusai dead", () => {
    expect (naruto.jutsu(batusai)).toEqual ("Enemy is dead");
})

test("tanjiro heal unit by 10", () => {
    tanjiro.healUnit(10)
    expect (tanjiro.healthPoints).toEqual (110);
    expect (batusai.healthPoints).toEqual (0);
})