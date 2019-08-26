const prism = require('./Prism');

p = new prism(1,1,1);

p3 = new prism(2,1,1);

test('values asigned 1',()=>{
    expect(p.long).toBe(1)
    expect(p.height).toBe(1)
    expect(p.width).toBe(1)
});

test('values asigned 1',()=>{
    expect(p3.long).toBe(2)
    expect(p3.height).toBe(1)
    expect(p3.width).toBe(1)
});

test('perimeter tests 1 & 2',()=>{
    expect(p.perimeter()).toBe(4)
    expect(p3.perimeter()).toBe(6)
});

test('area tests 1 & 2',()=>{
    expect(p.area()).toBe(1)
    expect(p3.area()).toBe(2)
});

test('volume tests 1 & 2',()=>{
    expect(p.volume()).toBe(1)
    expect(p3.volume()).toBe(2)
});

