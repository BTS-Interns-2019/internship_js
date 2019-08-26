const prisma = require('./prism_cristianp.js');

  p = new prisma(1, 1, 1);
test('prisma perimetro 1,1,1', function(){
    expect(p.perimeter()).toBe(4);
});

test('prisma area 1,1,1', function(){
    expect(p.area()).toBe(1);
});

test('prisma volumen 1,1,1', function(){
    expect(p.volumen()).toBe(1);
});

a = new prisma(2, 22, 12);

test('prisma permetro 2, 22, 12', function(){
    expect(a.perimeter()).toBe(28);
});

test('prisma area 2, 22, 12', function(){
    expect(a.area()).toBe(24);
});

test('prisma volumen 2, 22, 12', function(){
    expect(a.volumen()).toBe(528);
});

d = new prisma(2, 1,1);

test('prisma permetro 2,1,1', function(){
    expect(d.perimeter()).toBe(6);
});

test('prisma area 2,1,1', function(){
    expect(d.area()).toBe(2);
});

test('prisma volumen 2,1,1', function(){
    expect(d.volumen()).toBe(2);
});