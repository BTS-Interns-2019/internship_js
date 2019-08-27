const Person = require('./person_marlont');

test('Normal Input', function(){
    let p = new Person('Marlon', 'Torres');
    expect(p.name).toBe('Marlon');
    expect(p.lastName).toBe('Torres');
    expect(p.fullName).toBe('Marlon Torres');
}) 

test('Change name', function(){
    let p2 = new Person('Marlon', 'Torres');
    expect(p2.name).toBe('Marlon');
    expect(p2.lastName).toBe('Torres');
    expect(p2.fullName).toBe('Marlon Torres');
    
    p2.name = 'Jorge';
    expect(p2.name).toBe('Jorge');
    expect(p2.fullName).toBe('Jorge Torres');
}) 

test('Change lastName', function(){
    let p3 = new Person('Marlon', 'Torres');
    expect(p3.name).toBe('Marlon');
    expect(p3.lastName).toBe('Torres');
    expect(p3.fullName).toBe('Marlon Torres');
    
    p3.lastName = 'Huerta';
    expect(p3.lastName).toBe('Huerta');
    expect(p3.fullName).toBe('Marlon Huerta');
})

test('Change fullName', function(){
    let p4 = new Person('Marlon', 'Torres');
    expect(p4.name).toBe('Marlon');
    expect(p4.lastName).toBe('Torres');
    expect(p4.fullName).toBe('Marlon Torres');
    
    p4.fullName = 'Marlem Solorzano';
    expect(p4.fullName).toBe('Marlem Solorzano');
    expect(p4.name).toBe('Marlem');
    expect(p4.lastName).toBe('Solorzano');
})

test('Undefined Input', function(){
    let p5 = new Person();
    expect(p5.name).toBe(' ');
    expect(p5.lastName).toBe(' ');
    expect(p5.fullName).toBe('   ');
})

test('Undefined fullName', function(){
    let p6 = new Person('Marlem','Aboytes');
    expect(p6.name).toBe('Marlem');
    expect(p6.lastName).toBe('Aboytes');
    expect(p6.fullName).toBe('Marlem Aboytes');

    p6.fullName = '';
    expect(p6.name).toBe('');
    expect(p6.lastName).toBe(' ');
    expect(p6.fullName).toBe('  ');
})

test('Change to Undefined lastName', function(){
    let p7 = new Person('Marlem','Aboytes');
    expect(p7.name).toBe('Marlem');
    expect(p7.lastName).toBe('Aboytes');
    expect(p7.fullName).toBe('Marlem Aboytes');

    p7.lastName = '';
    expect(p7.lastName).toBe('');
    expect(p7.fullName).toBe('Marlem ');
})

test('Undefined Input can be Changed', function(){
    let p8 = new Person();
    expect(p8.name).toBe(' ');
    expect(p8.lastName).toBe(' ');
    expect(p8.fullName).toBe('   ');

    p8.name = 'Miriam';
    p8.lastName = 'Torres';

    expect(p8.name).toBe('Miriam');
    expect(p8.lastName).toBe('Torres');
    expect(p8.fullName).toBe('Miriam Torres');
})


