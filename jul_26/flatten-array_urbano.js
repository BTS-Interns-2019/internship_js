function flattenArray(array) {
    let container = [];
    try {
        for (k in array) {
            if (Array.isArray(array[k])) {
                
                flattenArray(array[k])
                
                console.log(container);
            } else {
                
                container.push(array[k]);
                // flattenArray(array[k]);
               
                console.log("con",container);
            }
            
            console.log(container);
        }
    } catch (error) {
        console.log(error)
    }
    // console.log("Cont",container);
}



let exampleArray = [2, 3, 8, [50, 10], 6];
let bar = "dsa";
console.log(flattenArray(exampleArray));