function kSum(str1, str2){
    if ( str1.match(/[^0-9]/g) || str2.match(/[^0-9]/g)) {
        return "Ingresa únicamente caracteres numéricos"
    } 
    // longitud de los strings
    //los utilizaremos para agregar ceros a la cantidad menor al inicio y así poder sumar
        let lstr1 = str1.length;
        let lstr2 = str2.length;
    // pasStar es el método que añade ceros al inicio
        if (lstr1 > lstr2) {
            str2 = str2.padStart(lstr1, '0')
        } 
        
        if (lstr1 < lstr2) {
            str1 = str1.padStart(lstr2, '0')
        }
    //convertir los string en arreglo para poder sumarlos
        let arr1 = str1.split("");
        let arr2 = str2.split("");
        let sumaTotal = new Array(lstr1);
        let contador = 0; 
    // haremos la suma de cada elemento del array, comenzaremos del último hasta llegar al primero
        for(i=arr1.length-1; i>=1; i--) {
            suma1 = Number(arr1[i]) + Number(arr2[i]) + contador
            suma1 = String(suma1)
            if(suma1.length > 1) {
                sumaTotal[i] = suma1[1]
                contador = 1;
            } else {
                sumaTotal[i] = suma1
                contador = 0;
            }
        }
    // se deja al final a los elementos en la posición cero
        suma1 = Number(arr1[0]) + Number(arr2[0]) + contador
        suma1 = String(suma1)
        sumaTotal[0] = suma1
        return sumaTotal.join("") 
} 

module.exports = kSum;