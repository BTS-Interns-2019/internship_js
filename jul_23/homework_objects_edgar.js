const objeto = { a: 'azul', b: 'hola', c: '32'};
const objeto2 = {a:'negro', b: 'que', c: '36'};
assign (objeto, objeto2);
function assign (obj, obj2){
 console.log ("objeto 1");
 console.log(obj);   
 console.log ("objeto 2");
 console.log(obj2);
 obj2.a = obj.a;
 obj2.b = obj.b;
 obj2.c = obj.c;
 console.log("objeto 2 con atributos objeto 1: ");
 console.log(obj2);
 obj.a = 'rojo';
 obj.b = 'adios';
 obj.c= '2369';
 console.log("objeto 1 con atributos modificados: ");
 console.log (obj);
 console.log("objeto 2 inmutable: ");
 console.log (obj2);
}

defproperties ();
function defproperties (){
    const objetos = { };
    Object.defineProperty (objetos, 'a', {
        value: 'rojo',
        writable: false,
        enumerable: false,
        configurable: false,
    });

    var bValue = 'adios';
    Object.defineProperty (objetos, 'b', {
        get: function () {return bValue;},
        set: function (newValue) { bValue = newValue;},
        enumerable: false,
        configurable: false,
    });
    console.log ("objetos con descriptores");
    console.log(objetos);
}

entriesobj (objeto);
function entriesobj (obj){
    entry = 1;
    aux1 = [];
    for (prop in obj){
        aux1 +=(`[ ${prop} , ${obj[prop]}]`).toString();
}
console.log (aux1.split(","));
}

valuesobj (objeto2);
var aux= "";
function valuesobj (obj2){
    for (prop in obj2){
     aux += (obj2[prop]).toString() +",";
} 
console.log (aux.split(","));
}
