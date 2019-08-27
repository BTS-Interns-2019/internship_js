const Person = require ('./person_nestor.js');


test("nestor campos, change lastName for lira", () => {
    const firstName = "nestor"
    const lastName = "campos"
    const input = new Person(firstName, lastName)
    expect (input.fullName).toEqual (`${firstName} ${lastName}`);
    input.lastName = "lira"
    expect (input.fullName).toEqual (`${firstName} lira`);
})

test("juan perez, change fullName for john smith with whitespace", () => {
    const firstName = 'Juan'
    const lastName = 'Perez'
    const input = new Person(firstName, lastName)
    expect (input.fullName).toEqual (`${firstName} ${lastName}`);
    input.lastName = "Pancho"
    expect (input.fullName).toEqual (`${firstName} Pancho`);
    input.fullName = "     John      Smith    ";
    expect (input.fullName).toEqual ("John Smith");

})

test("ana romero, change name for laura, francisca, rosa", () => {
    const firstName = "ana";
    const lastName = "romero";
    const input = new Person(firstName, lastName)
    expect (input.fullName).toEqual (`${firstName} ${lastName}`);
    input.name= "laura";
    expect (input.fullName).toEqual (`laura ${lastName}`);
    input.name= "francisca";
    expect (input.fullName).toEqual (`francisca ${lastName}`);
    input.name= "rosa";
    expect (input.fullName).toEqual (`rosa ${lastName}`);

})

test("typeof object", () => {
    const firstName = "nestor"
    const lastName = "campos"
    const input = new Person(firstName, lastName)
    expect (typeof input).toEqual ('object');
})