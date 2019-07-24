let obj1 = {a : 1, b : 2};
let obj2 = {b : 4 , c : 3};


//Assign

function assign(o1, o2){
    for (const key in o2) {
        if(o2.hasOwnProperty(key)) {
            o1[key] = o2[key];
        }
    }
    return o1;
}
console.log(assign(obj1, obj2));


//DefineProperties

