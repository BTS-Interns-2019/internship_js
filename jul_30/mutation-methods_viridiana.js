var originalArray = [6,4,21,2];
 
function sort(originalArray, callback) {
    var n, i, k, aux;
    n = originalArray.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (originalArray[i] > originalArray[i + 1]) {
                aux = originalArray[i];
                originalArray[i] = originalArray[i + 1];
                originalArray[i + 1] = aux;
               
            }
        }
    }
    return originalArray;
}

console.log(sort(originalArray))