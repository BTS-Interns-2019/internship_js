/**
 * //Recibe dos strings con dos series de digitos y retorna otro string con la suma de estas series de digitos
 * @param {string} strNum1 primer cadena de digitos
 * @param {string} strNum2 segunda cadena de digitos
 * @returns {string}        suma de las cadenas de digitos
 */
function kSum (strNum1, strNum2) {
    //obtener el string mas corto y el más largo e invertirlos para empezar a
    //comparar desde los extremos derechos de ambos arreglos
    const mayorMenor = greater(strNum1, strNum2);    
    mayor=mayorMenor[0].split("").reverse();
    menor=mayorMenor[1].split("").reverse();
    //arreglo para guardar la suma inicializado con numeros "0"s del tamaño del
    //numero más largo más uno, por si el restulatdo es un digito más grande
    let suma = new Array(mayor.length+1);
    suma.fill(0);
    //hace la suma hasta el digito "n"th donde "n" es la longitud del numero más corto
    for (let i = 0; i < menor.length; i++) {
        suma[i] += parseInt(menor[i]) + parseInt(mayor[i]);
        if (suma[i]>=10){
            suma[i+1]+=1;
            suma[i]=suma[i]%10;
        }    
    }
    //agrega el resto de digitos del numero más largo a la suma
    for (let i = menor.length; i < mayor.length; i++) {
        suma[i]+=parseInt(mayor[i]);
        if (suma[i]>=10){
            suma[i+1]+=1;
            suma[i]=suma[i]%10;
        }   
    }
    //si el resultado de la suma tiene el mismo número de digitos que numero más grande
    //se elimina el espacio agregado a la suma
    if(suma[suma.length-1]===0)suma.splice(suma.length-1,1);
    //invierte la suma a su estado original, la une en un string y la retorna
    return suma.reverse().join(""); 
}

/**
 * Recive dos strings y devuelve un arreglo con el de mayor longitud
 *  en la posicion 0 y y el de menor en la posicion 1
 * @param {string} a 
 * @param {string} b 
 * @return {array}  arreglo con el string con más caracteres en la posición 0 y otro en la 1
 */
function greater(a, b){
    if(a.length>b.length) return[a,b];
    return [b,a];
}
console.log(kSum('99','1'));

console.log(kSum("999","1"));


module.exports=kSum;