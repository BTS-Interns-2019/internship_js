const {login,onlyEven,google,evenIndex} = require("./cp_exercises_miguel.js"); 

//PRUEBAS
//PRUEBA DE LOGIN
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
    let queries = [
        {
            name:"find",
            description:"Retorna el primer elemento de un arreglo que cumpla con cierta condicion",
            params:[
                {
                    callback:[
                        {
                            name:"element", 
                            description:"Valor actual",
                            type:"necesario"
                        },{
                            name:"index",
                            description:"Indice del valor actual",
                            type:"opcional"
                        },{
                            name:"array",
                            description:"Arreglo que esta manejando el metodo",
                            type:"opcional"
                        }
                    ]
                },{
                    name:"thisArg",
                    description:"Parametro de invocacion del callback",
                    type:"opcional"
                }
            ],
            returning: "Valor del primer elemento en el arreglo que satisfaga con la condicion de la funcion, de otro modo undefined"
        },{
            name:"findIndex",
            description:"Retorna el indice del primer elemento de un arreglo que cumpla con cierta condicion",
            params:[
                {
                    callback:[
                        {
                            name:"element", 
                            description:"Valor actual",
                            type:"necesario"
                        },{
                            name:"index",
                            description:"Indice del valor actual",
                            type:"opcional"
                        },{
                            name:"array",
                            description:"Arreglo que esta manejando el metodo",
                            type:"opcional"
                        }
                    ]
                },{
                    name:"thisArg",
                    description:"Parametro de invocacion del callback",
                    type:"opcional"
                }
            ],
            returning: "Entero de la posicion del arreglo donde se encuentra el elemento, si no lo encuentra imprime -1"
        },{
            name:"every",
            description:"Retorna verdadero si todos los elementos de un arreglo cumplen con cierta condicion",
            params:[
                {
                    callback:[
                        {
                            name:"element", 
                            description:"Valor actual",
                            type:"necesario"
                        },{
                            name:"index",
                            description:"Indice del valor actual",
                            type:"opcional"
                        },{
                            name:"array",
                            description:"Arreglo que esta manejando el metodo",
                            type:"opcional"
                        }
                    ]
                },{
                    name:"thisArg",
                    description:"Parametro de invocacion del callback",
                    type:"opcional"
                }
            ],
            returning: "Booleano"
        },{
            name:"some",
            description:"Retorna verdadero si alguno de los elementos de un arreglo cumplen con cierta condicion",
            params:[
                {
                    callback:[
                        {
                            name:"element", 
                            description:"Valor actual",
                            type:"necesario"
                        },{
                            name:"index",
                            description:"Indice del valor actual",
                            type:"opcional"
                        },{
                            name:"array",
                            description:"Arreglo que esta manejando el metodo",
                            type:"opcional"
                        }
                    ]
                },{
                    name:"thisArg",
                    description:"Parametro de invocacion del callback",
                    type:"opcional"
                }
            ],
            returning: "Booleano"
        },{
            name:"values",
            description:"Retorna los valores de cada elemento",
            returning: "Arreglo iterador"
        },{
            name:"entries",
            description:"Retorna un objeto iterador con la clave y el valor de cada elemento",
            returning: "Arreglo iterador"
        },{
            name:"keys",
            description:"Retorna las claves de cada elemento",
            returning: "Arreglo iteador"
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
//PRUEBA DE ONLYEVEN
test("Prueba de pares onlyeven", function(){
    expect(onlyEven([32,8,12,62,46,70,54,88])).toEqual([32,8,12,62,46,70,54,88]);
});
test("Prueba de nones onlyeven", function(){
    expect(onlyEven([1,51,33,49,13,25,63,99])).toEqual(false);
});
test("Prueba combinada onlyeven", function(){
    expect(onlyEven([64,55,32,74,21,76,18,65])).toEqual(false);
});
test("Prueba cadena pares onlyeven", function(){
    expect(onlyEven(['18','54','80','46','4','32','84','22','50','24'])).toEqual(['18','54','80','46','4','32','84','22','50','24']);
});
test("Prueba cadena combinada pares onlyeven", function(){
    expect(onlyEven([74,'6','52',82,'60',36,10])).toEqual([74,'6','52',82,'60',36,10]);
});
test("Prueba undefined onlyeven", function(){
    expect(onlyEven([20,12,undefined,54,60,48,80])).toEqual(false);
});
test("Prueba arreglo vacio onlyeven", function(){
    expect(onlyEven([])).toEqual(false);
});
test("Prueba vacia onlyeven", function(){
    expect(onlyEven()).toEqual(false);
});
//PRUEBA DE GOOGLE
test("Prueba verdadera google", function(){
    result = {
        name:"findIndex",
        description:"Retorna el indice del primer elemento de un arreglo que cumpla con cierta condicion",
        params:[
            {
                callback:[
                    {
                        name:"element", 
                        description:"Valor actual",
                        type:"necesario"
                    },{
                        name:"index",
                        description:"Indice del valor actual",
                        type:"opcional"
                    },{
                        name:"array",
                        description:"Arreglo que esta manejando el metodo",
                        type:"opcional"
                    }
                ]
            },{
                name:"thisArg",
                description:"Parametro de invocacion del callback",
                type:"opcional"
            }
        ],
        returning: "Entero de la posicion del arreglo donde se encuentra el elemento, si no lo encuentra imprime -1"
    };
    expect(google(queries,"findIndex")).toEqual(result);
});
test("Prueba falsa google", function(){
    expect(google(queries,"url")).toEqual([]);
});
test("Prueba sin cadena google", function(){
    expect(google(queries,"")).toEqual([]);
});
test("Prueba arreglo vacio google", function(){
    expect(google([],"values")).toEqual([]);
});
test("Prueba vacia google", function(){
    expect(google()).toEqual([]);
});
//PRUEBA DE EVENINDEX
test("Prueba todos pares evenindex", function(){
    expect(evenIndex([72,64,10,58,34,2,14])).toEqual([0,1,2,3,4,5,6]);
});
test("Prueba todos nones evenindex", function(){
    expect(evenIndex([11,55,7,23,89,41,75])).toEqual([]);
});
test("Prueba basica 1 evenindex", function(){
    expect(evenIndex([78,33,59,45,99,87,6])).toEqual([0,6]);
});
test("Prueba basica 2 evenindex", function(){
    expect(evenIndex([33,58,64,85,90,13,1,100])).toEqual([1,2,4,7]);
});
test("Prueba cadenas evenindex", function(){
    expect(evenIndex(['66','11','33','44','99','88','22','55'])).toEqual([0,3,5,6]);
});
test("Prueba undefined evenindex", function(){
    expect(evenIndex([1,2,3,undefined,4,5,6,8])).toEqual([1,4,6,7]);
});
test("Prueba arreglo vacio evenindex", function(){
    expect(evenIndex([])).toEqual([]);
});
test("Prueba vacia evenindex", function(){
    expect(evenIndex()).toEqual([]);
});