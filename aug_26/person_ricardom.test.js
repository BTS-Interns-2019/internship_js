const Person = require('./person_ricardom');


let p = new Person('Ricardo', 'Martin');

test('create object',()=>{
    expect(p.name).toBe('Ricardo');
    expect(p.lastname).toBe('Martin');
    expect(p.fullname).toBe('Ricardo Martin');
});



test('values asigned name',()=>{
    p.name = 'Rigo';
    expect(p.name).toBe('Rigo');
    expect(p.lastname).toBe('Martin');
    expect(p.fullname).toBe('Rigo Martin');
});

test('values asigned fullname',()=>{
    p.fullname = 'ricardo ajalas';
    expect(p.name).toBe('ricardo');
    expect(p.lastname).toBe('ajalas');
    expect(p.fullname).toBe('ricardo ajalas');
});

test('values asigned lastname',()=>{
    p.lastname = 'Martin';
    expect(p.name).toBe('ricardo');
    expect(p.lastname).toBe('Martin');
    expect(p.fullname).toBe('ricardo Martin');
});