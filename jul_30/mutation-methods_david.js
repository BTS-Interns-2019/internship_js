// array = [2,3,5,6,1,4];
array = [2,4,5,1,6,3];
// array = [1,2,3,4,5,6];

function sort(array) {
    n = array.length;
    k = n;
    for (i = 0; i < n; i++) {
        for (j = 0; j < k; j++) {
            if(array[j]>array[j+1]) {
                a = array.slice(j,j+1);
                array.copyWithin(j, j+1, j+2);
                array.splice(j+1,1,Number(a));
            }
        } 
        k --;    
    }
    return array;
}
console.log(sort(array));

