let persona= {
    name:"Joselito",
    lastName:"Martinez",
    age:25
}

let persona2P={
    name: "Juan",
    heght: 150,
    country:"Peru",
    language:"Spanish"
};
//Assign
function assign(obj,obj2) {
    for (k in obj,obj2){
        obj[k]=obj2[k];
    }
    return obj
}
// console.log(assign(persona,persona2P));
function defineProp(obj, ...params) {

}

function entries(obj) {
    let storage=[];
    for (k in obj){

        console.log(new Array (k+": "+obj[k]));
    }
}
console.log(entries(persona));


//isSealed()
function isSellado(obj) {
for (k in obj){
    
}
}


//.keys()
function keys(obj){
    if (Object.propertyIsEnumerable(obj)==0){
        return Array.from(Object.getOwnPropertyNames(obj));
    }else {
        return Array.from();
    }
}
// console.log(keys(persona));
//Values
function values(obj) {
    let storage="";
    for (let i in obj){
        storage+=" "+(obj[i]).toString()
    }
    return storage.trim().split(" ")
}
// console.log(values(persona))
