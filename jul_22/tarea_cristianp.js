// 3 break
for(var i = 0; i <=5; i++){
    if(i ==5)
        break;
    console.log(i);
}
var a = 1;
switch(a)
{
    case 1:
        console.log("caso 1 break");
        break;
    case 2:
        console.log("No entra caso 2 break");
}
etiqueta:
for(b = 0; b<=10; b++)
{
    for(var d=0; d <= 10; d++)
    {
        console.log("c = " + d);
        console.log("b = " + b);
        break etiqueta;
    }
}

// 3 continue
var e = 0;
while(e < 10)
{
    e++;
    if(e ==5)
    {
        console.log("El numero 5 a sido pillado");
        continue;
    }
    console.log(e);
}

for(var f =0; f<=50; f++)
{
    if((f%2)==0)
    {
        console.log("Numero par = " + f);
    }
    continue;
    console.log(f)
}
var c = "Quitando la primera letra de las vocales";
var l = c.split("");
var r = "";

for(i in l) {
  if(l[i] == 'a') {
    continue;
  }
  else {
    r += l[i];
  }
}
console.log(r);


// 3 if else
var a = parseInt("algo");
var b = 5;
var c = "quinientosmill";
if(isNaN(a)){
    console.log(a + " No es un numero");
}else{
    console.log(a + " Es un numero");
}
if(b > 3){
    console.log("5 es mayor que 3");
}else{
    console.log("5 no es mayor que tres");
}
if(c.length > 5){
    console.log("Cadena larga");
}else{
    console.log("cadena corta");
}

// 3 switch
var d = 1;
var e = "a";
var f = ".";
switch(d){
    case 1: console.log("Switch con numero 1");break;
    case 2: console.log("Switch con numero 2");break;
    default:console.log("Switch con default");break;
}
switch(e){
    case "a": console.log("Switch con letra a");break;
    case "b": console.log("Switch con letra b");break;
    default: console.log("Switch con default");break;
}
switch(f)
{
    case ".": console.log("Switch con puntuacion . ");break;
    case ",": console.log("Switch con puntuacion ,");break;
    default: console.log("Switch con default");break;
}

// 3 try...cathc (2 throw)
//1
try {
    funcionInexistente();
}catch(e) {
    console.error(e.message);
    // salida: no existe funcion
}
//2
try{
    var edad = "asd";
    if(edad > 18){
        console.log("entra a la disco");
    }else{
        throw "Digitos incorrectos";
    }
}catch(e){
    console.log(e);
}
//3
try{
    throw new Error('Se jodio');
}catch(e){
    console.error('try ', e.message);
}



// 3 let
//1
let q = 5;
console.log(q);
if(true){
    let q = 10;
    console.log(q);
}
console.log("let dentro de bloque no afecta a let fuera " + q);
//2
function lety(va){
    let q = va+5;
    return q;
}
console.log(q);
console.log(lety(q));
console.log("no cambia " + q);
//3
var ostia = "adios";
 
if ( ostia ) {
    let ostia = "holamundo";
 
    console.info( ostia ); // 'holamundo'
}
 
console.info( ostia ); // adios

// 3 const
const k = "algo";
const p = 15;
const pl = "cristian";
console.info( k ); // Hello World
console.info( typeof p ); // string
console.info( ({}).toString.call( pl ) ); // [object String]

// 3 function
//1
console.log(primera());
function primera(){
    var re = 5+5;
    return re;
}
//2
console.log(segunda(10, 65));
function segunda(uno, dos){
    return uno + dos;
}
//3
var hg = (function(){
    console.log("Funcion anonima");
})();

// 3 do while
//1
var sd = 1;
do{
    console.log(sd);
    sd++;
}while(sd<5)

//2
var er = "a";
do{
    console.log(er);
    if(er=="a")
    {
        er="b";
        continue;
    }
    if(er == "b")
    {
        er="x";
        continue;
    }
}while(er != "x")

// 3 for
//1
var e = "";
for(var i=1;i<=10;i++)
{
    e += 5 + " * " + i + " = " + (5*i) + "\n"
}
console.log(e);
//2
var arr = [1,2,3,4,5,6,7,8,9];
for(var kj = 0; kj< arr.length;kj++)
{
    console.log("Posiciones de arreglo " + arr[kj]);
}
//3
for(var fg = 10; fg >=0;fg--)
{
    console.log("Decremento " + fg);
}


// 3 for in
//1
var tg = [5,6,7,8,9,10];
for (l in tg)
{
    console.log("Posiciones de arrglo " + l);
}
//2
for (g in tg)
{
    tg[g] = 500;
    console.log("Cambio de numero " + tg[g]);
}
//3
var rf = ["asd", "gd", "asdgf", "tyju"];
var uy = "";
for(r in rf)
{
    uy += rf[r];
}
console.log("concatenacion con for in " + uy);

// 3 for of
//1
var qe = [1,2,8,4,2,6,7,8,25];
for(q of qe)
{
    console.log("Numeros dentro del arreglo " + q);
}

//2
var tt=0;
for (q of qe)
{
    tt+=q;
}
console.log("Suma de contenido " + tt);

//3
var nom = ["cris", "hum", "pla", "ang"];
var con = "";
for(n of nom)
{
    con += n + "\n";
}
console.log("Concatenacion con for of " + con);

// 3 while
//1
var as = 1;
var cont = 0;
while(as <5)
{
    cont++;
    as++;
}
console.log("Numero de vueltas while " + cont);

//2
var op = 1;
var ast = "";
while(op <= 10)
{
    op++;
    for(var ds = op; ds > -1;ds--)
    {
        ast += "*";
    }
    ast+="\n"
}
console.log(ast);
//3
var carros = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var t = "";

while (carros[i]) {
  t += carros[i] + "\n";
  i++;
}
console.log("While con arreglo " +t);