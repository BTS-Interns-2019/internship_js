const {Ninja,Samurai} = require('./warriors_sergior.js');

test('Vamos a crear a japosai como Ninja', () => {
    var japosai = new Ninja();
    var Batusai = new Samurai();
    expect(japosai.healthPoints).toBe(100);
    expect(Batusai.healthPoints).toBe(100);
  });

  test('Vamos a atacar a japosai como Ninja', () => {
    var japosai = new Ninja('chumichanga');
    var Batusai = new Samurai('tacoLgando');
    
    Batusai.breathing(japosai);
    Batusai.breathing(japosai);
    Batusai.breathing(japosai);
    expect(japosai.healthPoints).toBe(45);
  });


  test('Vamos a matar un Ninja', () => {
    var Goku = new Ninja('chumichanga');
    var Batusai = new Samurai('tacoLgando');
    
    Batusai.breathing(Goku);
    Batusai.breathing(Goku);
    Batusai.breathing(Goku);
    Batusai.breathing(Goku);
    Batusai.attack(Goku);
    Batusai.attack(Goku);
    Batusai.attack(Goku);
    expect(Goku.isDead).toBe(true);
  });

  test('Vamos a matar un Ninja', () => {
    var elJhona = new Ninja('milArrugas');
    var negroWhatspp = new Samurai('elMaCanon');
    negroWhatspp.breathing(elJhona);
    negroWhatspp.breathing(elJhona);
    negroWhatspp.attack(elJhona);
    elJhona.attack(negroWhatspp);
    elJhona.attack(negroWhatspp);
    elJhona.jutsu(negroWhatspp);
    expect(elJhona.healthPoints).toBe(60);
    expect(negroWhatspp.healthPoints).toBe(40);
  });