
function sort(arr) {
    var n, i, k, aux;
    n = arr.length;  
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (arr[i] > arr[i + 1]) {
                aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
 return arr    
}


var arreglo = [4, 2, 5, 1, 3]

// console.log(arreglo.sort())
// sort();
console.log(sort(arreglo))

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

module.exports = sort;