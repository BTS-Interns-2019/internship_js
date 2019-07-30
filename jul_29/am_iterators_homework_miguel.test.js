//3 tests
const charCounter = require('./am_iterators_homework_miguel.js');

//PRUEBAS
test("Prueba - Welcome to this test!",function(){
    let result1 = {c:1,e:3,h:1,i:1,l:1,m:1,o:2,s:2,t:4,w:1};
    expect(charCounter('Welcome to this test!')).toStrictEqual(result1);
});
test("Prueba - sorewaomaeda!!!!!",function(){
    let result2 = {a:3,d:1,e:2,m:1,o:2,r:1,s:1,w:1};
    expect(charCounter('sorewaomaeda!!!!!')).toStrictEqual(result2);
});
test("Prueba - Este mensaje se autodestruira dentro de tres, dos, uno, ...",function(){
    let result3 = {a:3,d:4,e:9,i:1,j:1,m:1,n:3,o:4,r:4,s:6,t:5,u:3}
    expect(charCounter('Este mensaje se autodestruira dentro de tres, dos, uno, ...')).toStrictEqual(result3);
});