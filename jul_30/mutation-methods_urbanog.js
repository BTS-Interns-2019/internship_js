let sortEspecial;
function sort(array, callback) {
    if (Array.isArray(array)) {
        if (callback === undefined) {
            let aux = 0;
            // array.forEach(() => {
            //     array.forEach((val,index) => {
            //         if (array[index] > array[index + 1]) {
            //             aux = array[index];
            //             array[index] = array[index + 1];
            //             array[index + 1] = aux;
            //
            //         }
            //     })
            // });
            return array;
        }else {
            let result;
          result= array.forEach(callback(array[i],array[i+1]));
        }
        return result;
    } else {
        return "Ingrese un arreglo";
    }
}
console.log(sort([2,5,8,9,1]), (a,b) =>{console.log(a*b)})
