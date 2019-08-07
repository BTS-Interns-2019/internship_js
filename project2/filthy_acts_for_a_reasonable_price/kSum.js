function kSum(strNum1, strNum2) {
    if ( strNum1.match(/[^0-9]/g) || strNum2.match(/[^0-9]/g))
      return [strNum1, strNum2];

    l1 = strNum1.length; // Longitud de la cadena strNum1
    l2 = strNum2.length; // Longitud de la cadena strNum2

    if (l1 < l2) {
        strNum1 = strNum1.padStart(l2,"0"); // Añade ceros al inicio de la cadena strNum1 hasta tener la misma longitud que la cadena strNum2
    } else if (l2 < l1) {
        strNum2 = strNum2.padStart(l1,"0"); // Añade ceros al inicio de la cadena strNum2 hasta tener la misma longitud que la cadena strNum1
    }

    strNum1 = strNum1.split(''); // Crea un arreglo donde cada elemento es un dígito de la cadena strNum1
    strNum2 = strNum2.split(''); // Crea un arreglo donde cada elemento es un dígito de la cadena strNum2

    suma = new Array(l1); // Crea un arreglo vacio de la misma longitud que los arreglos strNum1 y strNum2
    contador = 0; // Contador que se va a usar para llevar la cuenta cuando la suma de dos dígitos es mayor a 9

    for (i = l1-1; i >= 1; i--) {
        presuma =  Number(strNum1[i]) + Number(strNum2[i]) + contador; // presuma almacena la suma de los digitos de cada cadena más el contador 
        presuma = String(presuma); // Covierte la variable presuma en tipo cadena 

        if (presuma.length > 1) {  // Si presuma es mayor a 9, almacena el dígito derecho de presuma en el arreglo suma y contador "lleva" 1
            suma[i] = presuma[1]; 
            contador = 1;
        } else {
            suma [i] = presuma[0]; // Si presuma es menor a 9, almacena el único dígito de presuma en el arreglo suma y contador "lleva" 0
            contador = 0;
        }
    }
    presuma = Number(strNum1[0]) + Number(strNum2[0]) + contador; // Se almacena la suma de los últimos dos dígitos de cada cadena más el contador 
    presuma = String(presuma);
    suma[0] = presuma 

    suma = suma.join('') // Convierte el arreglo suma en un cadena
    return suma
}

module.exports = kSum;