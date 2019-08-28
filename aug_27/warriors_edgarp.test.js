const {Ninja, Samurai} = require ('./warriors_edgarp.js');

test ('Test for Ninjas kills Samurai', () => {
    const sakamoko = new Ninja ('katana');
    const kagasawa = new Ninja ('boken');

    const kostal = new Samurai ('katana');
    sakamoko.jutsu(kostal);
    kagasawa.jutsu(kostal);
    sakamoko.jutsu(kostal);
    kagasawa.jutsu(kostal);
    sakamoko.attack(kostal);
    kagasawa.attack(kostal);
    sakamoko.attack(kostal);
    kagasawa.attack(kostal);
    expect(kostal.isDead).toBe(true);
   
});

test ('Test for can not heal a dead', () => {
    const sakamoko = new Ninja ('katana');
    const kagasawa = new Ninja ('boken');

    const kostal = new Samurai ('katana');
    sakamoko.jutsu(kostal);
    kagasawa.jutsu(kostal);
    sakamoko.jutsu(kostal);
    kagasawa.jutsu(kostal);
    sakamoko.attack(kostal);
    kagasawa.attack(kostal);
    sakamoko.attack(kostal);
    kagasawa.attack(kostal);
    kostal.heal(100);
    expect(kostal.healthPoints).toBe(0);
   
});

test ('Test for Samurais kills Ninja', () => {
    const karajito = new Samurai ('katana');
    const sitagacha = new Samurai ('uchigatana');

    const nagasaki = new Ninja ('Metsubishi');
    karajito.breathing(nagasaki);
    sitagacha.breathing(nagasaki);
    karajito.breathing(nagasaki);
    sitagacha.breathing(nagasaki);
    karajito.attack(nagasaki);
    sitagacha.attack(nagasaki);
    karajito.attack(nagasaki);
    sitagacha.attack(nagasaki);
    expect(nagasaki.isDead).toBe(true);
   
});

test ('Test for kimono has more healthPoints than takuche', () => {
    const kimono = new Ninja ('nunchaku');
    const takuche = new Samurai ('nodachi');

    kimono.jutsu(takuche);
    takuche.breathing(kimono);
    kimono.attack(takuche);
    takuche.attack(kimono);
    expect(kimono.healthPoints).toBe(85);
    expect(takuche.healthPoints).toBe(60);
   
});

test ('Test for ninja and samurai gets heal', () => {
    const kasigano = new Ninja ('kama');
    const nikita = new Samurai ('kodachi');

    kasigano.jutsu(nikita);
    nikita.breathing(kasigano);
    kasigano.attack(nikita);
    nikita.attack(kasigano);
    kasigano.heal(20);
    nikita.heal(30)

    expect(kasigano.healthPoints).toBe(105);
    expect(nikita.healthPoints).toBe(90);   
});

test ('Test for ninja and samurai clans gets heal', () => {
    const sakabo = new Ninja ('uchiwa');
    const yata = new Ninja ('tessen');

    const tequito = new Samurai ('wakizashi');
    const tucheke = new Samurai ('naginata');

    sakabo.jutsu(tequito);
    yata.jutsu(tucheke);
    tequito.breathing(sakabo);
    tucheke.breathing(yata);
    sakabo.healUnit(20);
    tucheke.healUnit(30)

    expect(sakabo.healthPoints).toBe(115);
    expect(yata.healthPoints).toBe(115);  
    expect(tequito.healthPoints).toBe(110);
    expect(tucheke.healthPoints).toBe(110); 
});






