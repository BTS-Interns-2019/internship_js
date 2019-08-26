const prism = require('./prism_marlont');

test('Normal Input', function(){
    let p = new prism(2,2,2);

    expect(p.long).toBe(2);
    expect(p.width).toBe(2);
    expect(p.height).toBe(2);

    expect(p.perimeter()).toBe(8);
    expect(p.area()).toBe(4);
    expect(p.volume()).toBe(8);
}) 

test('Modificacion de un valor', function(){
    let p2 = new prism(2,5,8);

    expect(p2.long).toBe(2);
    expect(p2.width).toBe(5);
    expect(p2.height).toBe(8);

    expect(p2.perimeter()).toBe(14);
    expect(p2.area()).toBe(10);
    expect(p2.volume()).toBe(80);

    p2.long = 4;

    expect(p2.long).toBe(4);
    
    expect(p2.perimeter()).toBe(18);
    expect(p2.area()).toBe(20);
    expect(p2.volume()).toBe(160);
}) 

test('Falta de parametros', function(){
    let p3 = new prism(2,3);

    expect(p3.long).toBe(0);
    expect(p3.width).toBe(0);
    expect(p3.height).toBe(0);

    expect(p3.perimeter()).toBe(0);
    expect(p3.area()).toBe(0);
    expect(p3.volume()).toBe(0);
}) 


