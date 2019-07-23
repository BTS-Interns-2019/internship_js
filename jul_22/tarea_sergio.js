var info = [1,2,3,4,5];

// 3 break

// break 1
function break1(info){
    let a = 0;
    for (let i = 0; i < info.length; i++) {
        if(info[i] === 4){
        a = info[i];
        console.log(a +" respuesta break 1");
        break;
        }
        a+= info[i];
    }
    
    return a;
}

// break2
function break2(info){
    let total = 0;
    let j = 0;
    while ( j < info.length){
        total += info[j];
        if(total > 5){
            console.log(total +" respuesta break 2");
            break;
        }
        j++;
        
    }
    return total;
}


//break3
function break3 (dato){
        let datoDoWile = dato;
        let banDoWile = false;
        do{
            if(datoDoWile < 43 ){     
                banDoWile = true;
                console.log(datoDoWile + " respuesta break 3");
                
                break;
            }
            datoDoWile--;
        }while(!banDoWile);
        return datoDoWile;
}


// INICIA  continue

//continue 1
function continue1(info){
    let a = 0;
    for (let i = 0; i < info.length; i++) {
        if(info[i] === 4){
        a = info[i];
        continue;
        }
        a+= info[i];
    }
    return a;
}

//continue 2
function continue2(info){
    let total = 0;
    let j = 0;
    while ( j < info.length){
        total += info[j];
        if(total > 5){
            continue;
        }
        j++;
        
    }
    return total;
}

//continue 3
function continue3 (dato){
    let datoDoWile = dato;
    let banDoWile = false;
    do{
        if(datoDoWile < 43 ){     
            banDoWile = true;
            continue;
        }
        datoDoWile--;
    }while(!banDoWile);
    return datoDoWile;
}



//Inicia if...else
// If....else1

if( Array.isArray(info) ){
    console.log("si es");
}else{
    console.log("Nel no se es");
    
}

// IF....else 2

if ( info[2] > 3 ){
    console.log("es mayor");
}else{
    console.log("es menor");
    
}

// IF.....else 3

if( info.length > 9 ){
    console.log("es mayor a nueve el length");
    
}else{
    console.log("es menos a nueve el length");
    
}


// INICIA SWITCH

//SWITCH 1
switch (info[3]) {
    case 1:
        console.log("es un numero");
        
        break;
    case 2:
        console.log("es un numero 2");
        
        break;
    case 3:
        console.log("es un numero 3");
        
        break;
    case 4:
        console.log("respuesta switch 1");
        console.log("es un numero 4");
        
        break;

    default:
        console.log("solo dios sabe");
        
        break;
}

//SWITCH 2
switch (info.length) {
    case 1:
        console.log("el largo es un numero 1");
        
        break;
    case 2:
        console.log("el largo es un numero 2");
        
        break;
    case 3:
        console.log("el largo es un numero 3");
        
        break;
    case 4:
        console.log("el largo es un numero 4");
        
        break;
    case 5:
        console.log("respuesta switch");
        console.log("el largo es un numero 5");
                
        break;
    default:
        console.log("solo dios sabe");
        
        break;
}

//SWITCH 3
switch ("correcto") {
    case "corre":
        console.log("el largo es un numero 1");
        
        break;
    case "correc":
        console.log("el largo es un numero 2");
        
        break;
    case "correct":
        console.log("el largo es un numero 3");
        
        break;
    case "orrecto":
        console.log("el largo es un numero 4");
        
        break;
    case "correcto":
        console.log("respuesta switch 3");
        console.log("es el correcto");
                
        break;
    default:
        console.log("solo dios sabe");
        
        break;
}


// INICIA try---catch

//try ----catch 1
function try1(info){
    try {
        if(!Array.isArray(info)){
            throw new Error ("debe ser Array");
        }
    } catch (e) {
        console.log(e);
    }

}

//try ----- catch 2
function try2(info){
    try {
        if(typeof info != 'string'){
            throw new Error ("debe ser String");
        }
    } catch (e) {
        console.log(e);
    }

}

//try -------- catch 3

function try3(info){
    try {
        if(info < 99){
            throw new Error ("debe ser 100 o mas");
        }
    } catch (e) {
        console.log(e);
    }

}

// INICIA LET

// let1
let rata = function (x){
    let roer = "rata: ";
    return roer+x;
    
};
console.log(rata("muerde"));

//let 2
let objeto32 = new Object;
console.log(objeto32);


// let 3
let nombre = new String;
console.log(nombre);


// INICIA const

//const 1
const años = 32;
//años++;
console.log(años);

//const 2
const contratado = true;
//funcion bts(contratado){ sergio = contratado; contratado = false}

//const 3
const carros = {
    color: "azul"
}

// INICIA Funcion

//funcion 1
function sergio (contratado){
    if ( contratado === true){
        return "a huebo weeeee!!!!1"
    }else{
        return "vender tamales"
    }

}

//funcion 2
function blueTRail (sergio){

    if(sergio){
        return "Acciones se disparan al cielo";
    }
    else{
        return "Concencer a sergio"
    }
}

// funcion 3
var desayuno = function taquitos(si){
    let felices = false;
    if (si == true){
        return "todos felices menos sara por q es vegetariana"
    }
}

// INICIA do wile

// do...while 1

let taquitos = 0;
do {
    taquitos++;
    
    //console.log("sergio se come "+taquitos+" taquitos");
    
    taquitos++;
} while (taquitos < 99);

// do....while 2
var nivelDeChotoNormal = 2;
var jhonathanChoto = 100;

do {
    jhonathanChoto--;
    //console.log("jhonathanChoto es "+jhonathanChoto+"% menos choto");
    
} while (jhonathanChoto > nivelDeChotoNormal);

//do....while 3

var refresco = 1;
var llenarRefrigerador = 15;
do {
    llenarRefrigerador -= refresco;
    //console.log(llenarRefrigerador);
    
} while (llenarRefrigerador > 3);


//INICIA for

// For 1
var canasta = 15;
var sergioComeTacos = 0;
for (let i = 0; i < canasta; i++) {
    sergioComeTacos = i;
    if(sergioComeTacos > 10){
        //console.log("pedir mas por que no me voy a llenar");
    break;    
    }
}

//for 2
let taquitosCarne =20;
for (let j = 15; j <= taquitosCarne; taquitosCarne--) {
    //console.log("pido uno de carne");    
}

//for 3

for(let j = 0; j <taquitosCarne;j++){
    //console.log("uno para urbanoss");
    j++;
    //console.log("otro para hector sin Ssshile por que no le gusta y es del norte");
    j++; 
    //console.log("ya me chigue varios en el otro for, pero venga aun caben");
    j++;
    

}


/// INICIA for IN

//for...in 1
let internos = ["sergio","urbanoss","nestor","luis","christian","erick","peregrino","hector","emmanuel","fanny","viri","choto","david","marlon","ricardo","migue"]
for (let key in internos) {
    //console.log(internos[key] +" Contratado");
    
}

//for....in 2
let chumichanGas = 0;
for (let key in internos) {
    if (internos[key]) {
        chumichanGas++;
        
    }
    //console.log("necestitmos " +chumichanGas);
    
}


// for ...in 3
for (let key in internos) {
    
    if(key == 8){
        //console.log(internos[key]+ " Nos va a invitar ancas de rana");
        
    }
}


//INICIA For...of
//for... of  1
for (let iterator of internos) {
    if(iterator == "david"){
        //console.log(iterator + " se queda sin pastel por que no ajusto");
    }
}

// For....of 2
let casaBts = [];
let numeroi = 0;
for (let iterator of internos) {
    casaBts[numeroi] = iterator;
    numeroi++;
    if(casaBts.length > 10){
        break;
    }
    //console.log(casaBts);
    
}

// For....of 3

for (let iterator of casaBts) {
    
    if (iterator.length < 6 ) {
        //console.log(iterator+" contratado");
        
    }
}


// INICIA while

// while 1
let numero2 = 0;
while (casaBts.length > 5) {
    casaBts.pop();
    //console.log(casaBts);
    
}


// while 2
while (numero2 < casaBts.length) {
    casaBts[numero2] = "nose "+numero2;
    numero2++;
}
//console.log(casaBts);

// while 3
let tareaBraulio = false
let hora = 7.00;
while (!tareaBraulio) {
    hora += 0.1;
    //console.log(hora);
    
    if(hora > 12.5){
        console.log(hora);
        
        tareaBraulio = true;
    }
    
}


// PARA EJECUTAR
//console.log(break1(info));
//console.log(break2(info));
//console.log(break3(99));
//console.log(continue1(info));
//console.log(continue2(info));
//console.log(continue3(99));
//console.log(try1("Se evito:  error garrafal + pantalla azul de la muerte"));
//console.log(try2(info));
//console.log(try3(55));





