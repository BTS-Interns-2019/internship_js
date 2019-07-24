zip = '';
// function unzipString(zip) {
    
//     return unzip
// }

array = zip.split('');
if (array.length == 0) {
    unzip = "''";
} else {
    unzip = '';
    for (i = 0; i < array.length; i++) {
        if (Number(array[i])) {
            for (j = i+1; j < array.length; j++) {
                if (Number(array[j])) {
                    break;
                } else {
                    n = Number(array[i]);
                    unzip += array[j].repeat(n);
                }            
            }
        } else {

            unzip += array[i]        
        }
        console.log(unzip);
    }
}

console.log(unzip);
