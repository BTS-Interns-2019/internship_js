function flattenArray(array) {
    let container = [];
    let store;
    let bar;
    try {
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                if (Array.isArray(array[i])) {
                    bar= flattenArray(array[i]);
                    
                    for (const iterator of bar) {
                        container.push(iterator);
                        console.log(iterator);
                    }
                }else{
                    if (array[i]=== {}) {
                        container[i]== array[i]
                    }else{
                        container.push(array[i]);
                    }
                    console.log(container);
                    
                }
                
            }
        } else {
            throw new Error("Solo arreglos");

        }
    } catch (error) {
        console.log(error)
    }
    return container;
    // console.log("Cont",container);
}



let exampleArray = [2, 3, 8, {a:50, b:10}, 6];
let bar = "dsa";
console.log(flattenArray(exampleArray));
