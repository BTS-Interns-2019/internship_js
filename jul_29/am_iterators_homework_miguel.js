//No ciclos, cualquier otro caracter se ignora
module.exports = charCounter;
function charCounter(cadena){
    let palabra = cadena.toLowerCase();
    const caracteres = new RegExp('^[A-Z]+$', 'i');
    arreglo = recorrer(palabra,0,[],caracteres);
    let arrord = arreglo.sort();
    let res = crearObj(arrord,0,{});
    return res;
}

function recorrer(cadena,i,arreglo,estandar){
    if(estandar.test(cadena[i])==true){
        arreglo.push(cadena[i]);
    }
    if(i==cadena.length-1){
        return arreglo;
    }else{
        return recorrer(cadena,++i,arreglo,estandar);
    }
}

function crearObj(arreglo,i,objeto){
    if(i>=arreglo.length){
        return objeto;
    }else{
        if(arreglo.indexOf(arreglo[i])==arreglo.lastIndexOf(arreglo[i])){
            objeto=insertarValor(objeto,arreglo[i],1);
            return crearObj(arreglo,++i,objeto);
        }else{
            let cantidad = arreglo.lastIndexOf(arreglo[i])-(arreglo.indexOf(arreglo[i])-1);
            objeto=insertarValor(objeto,arreglo[i],cantidad);
            return crearObj(arreglo,i+=cantidad,objeto);
        }
    }
}

function insertarValor(objeto,caracter,valor){
    switch(caracter){
        case 'a':
            return Object.assign(objeto, {a: valor});
        case 'b':
            return Object.assign(objeto, {b: valor});
        case 'c':
            return Object.assign(objeto, {c: valor});
        case 'd':
            return Object.assign(objeto, {d: valor});
        case 'e':
            return Object.assign(objeto, {e: valor});
        case 'f':
            return Object.assign(objeto, {f: valor});
        case 'g':
            return Object.assign(objeto, {g: valor});
        case 'h':
            return Object.assign(objeto, {h: valor});
        case 'i':
            return Object.assign(objeto, {i: valor});
        case 'j':
            return Object.assign(objeto, {j: valor});
        case 'k':
            return Object.assign(objeto, {k: valor});
        case 'l':
            return Object.assign(objeto, {l: valor});
        case 'm':
            return Object.assign(objeto, {m: valor});
        case 'n':
            return Object.assign(objeto, {n: valor});
        case 'o':
            return Object.assign(objeto, {o: valor});
        case 'p':
            return Object.assign(objeto, {p: valor});
        case 'q':
            return Object.assign(objeto, {q: valor});
        case 'r':
            return Object.assign(objeto, {r: valor});
        case 's':
            return Object.assign(objeto, {s: valor});
        case 't':
            return Object.assign(objeto, {t: valor});
        case 'u':
            return Object.assign(objeto, {u: valor});
        case 'v':
            return Object.assign(objeto, {v: valor});
        case 'w':
            return Object.assign(objeto, {w: valor});
        case 'x':
            return Object.assign(objeto, {x: valor});
        case 'y':
            return Object.assign(objeto, {y: valor});
        case 'z':
            return Object.assign(objeto, {z: valor});
        default:
            break;
    }
}

console.log(charCounter("Welcome to this test!"));//{h: 1,i: 1,e: 2,v: 1,r: 1,y: 2,b: 1,o: 1,d: 1,}