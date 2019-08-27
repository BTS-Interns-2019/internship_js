const Person = require ('./person_luisg.js')

let p = new Person('Juan', 'Perez');
test("prueba", function () {
    expect(p.name).toStrictEqual('Juan');
    expect(p.lastName).toStrictEqual('Perez');
    expect(p.fullName).toStrictEqual('Juan Perez');
    p.name = "Pancho";
    expect(p.name).toStrictEqual('Pancho');
    expect(p.lastName).toStrictEqual('Perez');
    expect(p.fullName).toStrictEqual('Pancho Perez');
    p.fullName = "John Smith";
    expect(p.name).toStrictEqual('John');
    expect(p.lastName).toStrictEqual('Smith');
    expect(p.fullName).toStrictEqual('John Smith');
}); 

const p1 = new Person('Luis','Gallegos')
test("prueba", function () {
    expect(p1.fullName).toStrictEqual('Luis Gallegos');
    p1.fullName = 'Carlos Gallegos Rodriguez';
    expect(p1.lastName).toStrictEqual('Gallegos Rodriguez');
});