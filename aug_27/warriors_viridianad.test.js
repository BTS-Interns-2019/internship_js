
const {Ninja, Samurai} = require('./warriors_viridianad.js');


describe('Nijas vs Samurais', () =>{
    const ninja2 = new Ninja();
    const ninja1 = new Ninja();
    const Samurai1= new Samurai();

    test('ninja2 heal', () => {
        expect(ninja2.heal(50)).toEqual(150);
    });
    test('ninja2 healthPoints', () => {
        expect(ninja2.healthPoints).toEqual(150);
    });
    test('ninja1 healhPoints', () => {
        expect(ninja1.healthPoints).toEqual(100);
    });

    test('ninja1attack to Samurai1', () => {
        expect(ninja1.jutsu(Samurai1)).toEqual(false);
    });

  
})