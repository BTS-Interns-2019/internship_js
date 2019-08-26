numbers=[0n, 1n];   //arreglo para gurdar los fibonacci de n numeros
/**
 * Recibe un numero y devuelve el numero de la secuencia de fibonacci corerspondiente a esa posición
 * @param {number} nth //numero del que se decea el fibonacci
 */
function fibonacci (nth) {
    if(numbers[nth]!=null){ //si ya está calculado lo devuelve
        return numbers[nth];
    }else {                 //si no, lo calcula a partir de los últimos 2 calculados
        numbers[nth]=(fibonacci(nth-2)+fibonacci(nth-1));
        return numbers[nth];
    }
}

module.exports=fibonacci;