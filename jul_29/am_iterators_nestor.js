var arr = [1, 2, 3, 4,5];
function forEach(callback, array){
  for (const int of array) {
   console.log(callback(int));
  }
}
// console.log(forEach("ss", arr));
console.log(forEach((i) => { return i+ i }, arr));


var filtro = [0, -1, 1, "hola", NaN, undefined, false, null, ""]
function filter(callback, array){
  var arreglo = [];
  for (const int of array) {
    if(!!int)
      arreglo.push(int);        
  }
  return callback(arreglo);
}
console.log(filter(i=>{if(i != true ) return i}, filtro));

function map(callback, array){
  var arreglo = [];
  for (const int of array) {
    arreglo.push(callback(int));
  }
  return callback(arreglo);
}
console.log(map((i)=> 10 + i, arr));

function reduce(callback, array){
  var res = 0;
  for (const int of array) {
    res += int;
  }
  return callback(res)
}
console.log(reduce((i)=> i * 2, arr));

module.exports={
  forEach,
  filter,
  map,
  reduce,
};
 