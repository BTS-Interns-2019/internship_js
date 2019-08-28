const {Ninja, Samurai} = require('./warriors_estefaniac.js');


describe('Nijas vs Samurais', () =>{
    const ninjaSplinter = new Ninja();
    const ninjaMichelangelo = new Ninja();
    const samTanjiro = new Samurai();
    const samJack = new Samurai();

    test('ninjaSplinter heal', () => {
        expect(ninjaSplinter.heal(50)).toEqual(150);
    });
    test('ninjaSplinter healthPoints', () => {
        expect(ninjaSplinter.healthPoints).toEqual(150);
    });
    test('ninjaMichelangelo healhPoints', () => {
        expect(ninjaMichelangelo.healthPoints).toEqual(100);
    });
    test('ninjaMichelangelo attack to samJack', () => {
        expect(ninjaMichelangelo.jutsu(samJack)).toEqual(false);
    });
    test('samTanjiro healthPoints', () => {
        expect(samTanjiro.healthPoints).toEqual(100);
    });
    test('samJack isDead', () => {
        expect(samJack.isDead).toEqual(false);
    });
    test('samJack attack to ninjaSplinter', () => {
        expect(samJack.breathing(ninjaSplinter)).toEqual(false);
    });
    test('ninjaSplinter healthPoints', () => {
        expect(ninjaSplinter.healthPoints).toEqual(145);
    });
    test('ninjaSplinter isDead', () => {
        expect(ninjaSplinter.isDead).toEqual(false);
    });
});

