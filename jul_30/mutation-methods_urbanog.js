let sortEspecial;
let obj1 = {a: 5, b: "hola"};

function sort(array, callback) {
    if (Array.isArray(array)) {
        let aux = 0;
        let result=[];
        // array= array.toString().split(",")
        array.forEach((value, idx,) => {
            array.forEach((val, index) => {
                if (callback === undefined) {
                    if (array[index] > array[index + 1]) {
                        aux = array[index]+"";
                        array.splice(index, 1, array[index + 1]);
                        array.splice(index + 1, 1, aux);

                    }
                } else {
                    array.forEach(()=>{
                        array.forEach((val,index)=>{
                            if (callback(array[index],array[index+1])){
                                aux = array[index];
                                array.splice(index, 1, array[index + 1]);
                                array.splice(index + 1, 1, aux);
                            }
                        })
                    });
                }
            })
        });
        for (let i = 0; i <array.length ; i++) {
            result[i]=array[i]*1
        }
        return result;
    } else {
        return "Solo arreglos";
    }
}
console.log(sort([6, 4, 21, 2]));
// console.log(sort([2, 5, 8, 9, 1], (a,b) => {
//     return(a>b)
// }));
//[2, 5, 8, 9, 1]

module.exports={sort};