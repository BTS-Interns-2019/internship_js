const Person = require("./person_cristianp.js");

const p = new Person('Juan', 'Perez');
test("First test, new object Juan Perez", ()=>{
    expect(p.fullName).toBe("Juan Perez");
})


test("Second, set name to Royer", ()=>{
    p.name = "Royer";
    expect(p.fullName).toBe("Royer Perez");
})


test("Third, set lastName to Jonson", ()=>{
    p.lastName = "Jonson";
    expect(p.fullName).toBe("Royer Jonson");
})

test("Fourth, only name to Royer", ()=>{
    expect(p.name).toBe("Royer");
})

test("Fifth, name to Alba", ()=>{
    p.name = "Alba";
    expect(p.name).toBe("Alba");
})

test("Sixth, set fullName to Cristian Plascencia", ()=>{
    p.fullName = "Cristian Plascencia";
    expect(p.fullName).toBe("Cristian Plascencia");
})

test("Seventh, only name --Cristian", ()=>{
    expect(p.name).toBe("Cristian");
})

test("Eighth, only lastName Plascencia", ()=>{
    expect(p.lastName).toBe("Plascencia");
})

test("Ninth, set fullName Nestor Rabin", ()=>{
    p.fullName = "Nestor Rabin";
    expect(p.fullName).toBe("Nestor Rabin");
})

test("Tenth, set name Serch", ()=>{
    p.name = "Serch";
    expect(p.fullName).toBe("Serch Rabin");
})

test("Eleventh, set lastName River", ()=>{
    p.lastName = "River";
    expect(p.fullName).toBe("Serch River");
})

test("Twelfth, only name Serch", ()=>{
    expect(p.name).toBe("Serch");
})

test("Thirteenth, only lastName River", ()=>{
    expect(p.lastName).toBe("River");
})