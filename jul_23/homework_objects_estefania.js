// Object.assign()
console.log("*****OBJECT.ASSIGN*****")
var o1 = { a: 1 };
var o2 = { b: 2 };

var obj = Object.assign(o1, o2);
console.log(obj);

function assign(o1, o2) {
  o1.b = o2.b
    console.log(o1)
}
assign({ a: 1 }, { b: 2 })

//Object.entries()
console.log("*****OBJECT.ENTRIES*****")
var objetito = {primero: "hola", segundo: "mundo"};
var result = Object.entries(objetito)
console.log(result);

function entries(objetito) {
  var result = [];
  y = 0;
  for (var x in objetito) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objetito.hasOwnProperty(x)) {
          result[y] = x + "," + objetito[x] ;
          y++;
      }
  }
  console.log(result);
}

entries({primero: "hola", segundo: "mundo"})

//Object.keys()
console.log("*****OBJECT.KEYS*****")
var objetito = {primero: "hola", segundo: "mundo"};
var result = Object.keys(objetito)
console.log(result);

function keys(objetito) {
    var result = [];
    y = 0;
    for (var x in objetito) {
        //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
        if (objetito.hasOwnProperty(x)) {
            result[y] = x;
            y++;
        }
    }
    console.log(result);
}

keys({primero: "hola", segundo: "mundo"})


//Object.values()
console.log("*****OBJECT.VALUES*****")
var objetito = {primero: "hola", segundo: "mundo"};
var result = Object.values(objetito)
console.log(result);

function values(objetito) {
  var result = [];
  y = 0;
  for (var x in objetito) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objetito.hasOwnProperty(x)) {
          result[y] = objetito[x];
          y++;
      }
  }
  console.log(result);
}

values({primero: "hola", segundo: "mundo"})
