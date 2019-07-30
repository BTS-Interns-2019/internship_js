const{
    login,
    onlyEven,
    google,
    whereAreThey
}=require('./cp_exercise_emmanuelr.js');
let arrLogin=[
    ['login vacio', ["",""], false],
    ['usuario existenete y contraseña correcta U:juanito P:1234567890', ['juanito', '1234567890'],true],
    ['usuario no existente', ['juanito #2', 'password2'],false],
    ['usuario correcto con contraseña incorrecta', ['rafa','contraMal'], false],
    ['usuario incorrecto, contraseña correcta', ['raf', 'admin123'], false]
]
arrLogin.forEach(val=>{
    test(val[0], function(){
        expect(login(val[1][0], val[1][1])).toBe(val[2]);
    })
})

let arrEven=[
    ['solo pares',[10,22,106,456,2,4,6,8],[10,22,106,456,2,4,6,8]],
    ['solo inpares',[2345,2341,3,235,345,7,9],false],
    ['un par y luego inpares',[40,2345,2341,3,235,345,7,9],false],
    ['un impar y luego pares',[5,10,22,106,456,2,4,6,8],false]
]

arrEven.forEach(val=>{
    test(val[0], function(){
        expect(onlyEven(val[1])).toEqual(val[2])
    })
})

let arrGoogle=[
    ['probar some','some', {name:"some", description:"Devuelve un valor booleano dependiente de si al menos alguno de los elementos del arreglo retorna true aplicandole el call back", params:[ {name:"callBack", description:"funcion a evaluar en cada iteracion"}, {name:"element", description:"valor tomado del arreglo en esa iteracion"}, {name:"index", description:"indice del element"}, {name:"array", description:"arreglo sobre el que se está iterando"}, ], returning:'boolean'}],
    ['prober find','find', {name:"find", description:"Devuelve el primer valor del arreglo que cumpla la condicional", params:[ {name:"callBack", description:"funcion a evaluar en cada iteracion"}, {name:"element", description:"valor tomado del arreglo en esa iteracion"}, {name:"index", description:"indice del element"}, {name:"array", description:"arreglo sobre el que se está iterando"}, ], returning:'object'}],
    ['probar una palabra que no se encuentra','finder',undefined],
    ['probar palabra vacia','',undefined],
]
arrGoogle.forEach(val=>{
    test(val[0], function(){
        expect(google(val[1])).toEqual(val[2])
    })
})

let arrWhere=[
    ['solo pares',[10,22,106,456,2,4,6,8],[0,1,2,3,4,5,6,7]],
    ['solo inpares',[2345,2341,3,235,345,7,9],[]],
    ['un par y luego inpares',[40,2345,2341,3,235,345,7,9],[0]],
    ['un impar y luego pares',[5,10,22,106,456,2,4,6,8],[1,2,3,4,5,6,7,8]]
]
arrWhere.forEach(val=>{
    test(val[0], function(){
        expect(whereAreThey(val[1])).toEqual(val[2])
    })
})