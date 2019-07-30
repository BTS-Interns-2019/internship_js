const {login,onlyEven,google,evenArray} = require("./cp_exercises_miguel.js"); 

//PRUEBAS
beforeEach(()=>{
    let users = [
        {
            name: "usuario1",
            password: "usuario1"
        },{
            name: "usuario2",
            password: "usuario2"
        },{
            name: "usuario3",
            password: "usuario3"
        },{
            name: "usuario",
            password: "contraseña"
        },{
            name: "yo",
            password: "notu"
        }
    ];
});

test("Prueba basica verdadera login", function(){
    expect(login(users,'usuario','contraseña')).toBe(true);
});
test("Prueba basica falsa login", function(){
    expect(login(users,'paco','el chato')).toBe(false);
});
test("Prueba usuario indefinido login", function(){
    expect(login(users, undefined,'contraseña')).toBe(false);
});
test("Prueba contraseña indefinida login", function(){
    expect(login(users, 'usuario',undefined)).toBe(false);
});
test("Prueba ambos indefinidos login", function(){
    expect(login(users, undefined, undefined)).toBe(false);
});
test("Prueba sin base login", function(){
    expect(login(undefined, 'usuario','contraseña')).toBe(false);
});
test("Prueba base vacia login", function(){
    expect(login([],'usuario','contraseña')).toBe(false);
});
test("Prueba base no es arreglo login", function(){
    expect(login(12,'usuario','contraseña')).toBe(false);
});
test("Prueba base no es arreglo 2 login", function(){
    expect(login('12','usuario','contraseña')).toBe(false);
});
test("Prueba usuario y contraseña correctos pero no se relacionan entre si login", function(){
    expect(login(users,'usuario1','contraseña')).toBe(false);
});
test("Prueba sin nada login", function(){
    expect(login()).toBe(false);
});