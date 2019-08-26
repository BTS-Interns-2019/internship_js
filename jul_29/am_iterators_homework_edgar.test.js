test("amor a ROMA", () => {
expect (charcounter("amor a ROMA")).toEqual ({a: 3, m: 2, o: 2, r: 2});
})

test("paranGARICUtirimicuaro", () => {
expect (charcounter("paranGARICUtirimicuaro")).toEqual ({"a":4,"c":2,"g":1,"i":4,"m":1,"n":1,"o":1,"p":1,"r":4,"t":1,"u":2});
})

test("ESTAmos feliCES de Que Estes AQUI", () => {
expect (charcounter("ESTAmos feliCES de Que Estes AQUI")).toEqual ({"a":2,"c":1,"d":1,"e":7,"f":1,"i":2,"l":1,"m":1,"o":1,"q":2,"s":5,"t":2,"u":2});
})


const charcounter = require ('./am_iterators_homework_edgar.js');