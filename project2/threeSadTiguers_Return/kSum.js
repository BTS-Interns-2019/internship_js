function kSum(str1, str2){
    // check if two elements in the string are numbers
    if ( str1.match(/[^0-9]/g) || str2.match(/[^0-9]/g)) {
        return "Ingresa únicamente caracteres numéricos"
    } 
    // lenght of two strings
    // we will use them to add zeros to the smaller amount at the beginning and thus be able to add
        let lstr1 = str1.length;
        let lstr2 = str2.length;
    // pasStar is the method that add zeros at the beginning of the string
        if (lstr1 > lstr2) {
            str2 = str2.padStart(lstr1, '0')
        } 
        
        if (lstr1 < lstr2) {
            str1 = str1.padStart(lstr2, '0')
        }
    // convert the string into an array so you can add them
        let arr1 = str1.split("");
        let arr2 = str2.split("");
        let sumaTotal = new Array(lstr1);
        let contador = 0; 
    // we make the sum of each element of array, we start with the last element until we reach the beginning of the array
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
    // elements in the zero position are left at the end
        suma1 = Number(arr1[0]) + Number(arr2[0]) + contador
        suma1 = String(suma1)
        sumaTotal[0] = suma1

    // delete zero at the beginning of the string
        while (sumaTotal[0] == '0') {
            sumaTotal.shift()
        }

        return sumaTotal.join("") 
} 

module.exports = kSum;