const Person = require("./person_miguelv.js");

var p = new Person('Juan','Perez');

test("Test 1, Initial constructor",()=>{
    expect(p.fullName).toBe("Juan Perez");
})
test("Test 2, Change attribute name",()=>{
    p.name = "Pancho";
    expect(p.fullName).toBe("Pancho Perez");
})
test("Test 2, Change attribute last name",()=>{
    p.lastName = "Planchas";
    expect(p.fullName).toBe("Pancho Planchas");
})
test("Test 4, Change attribute and consult values",()=>{
    p.fullName = "John Smith";
    expect(p.name).toBe("John");
    expect(p.lastName).toBe("Smith");
})