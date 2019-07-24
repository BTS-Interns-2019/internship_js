/*Object.assign()
Object.defineProperties()
Object.entries()
Object.freeze() // create new freezed object
Object.seal() // create new sealed object
Object.fromEntries()
Object.getOwnPropertiesDescriptors()
Object.isFrozen()
Object.isSealed()
Object.keys()
Object.values()//*/

var target = { a: 1, b: 2};
var source = { b: 4, c: 5, c: 6,d:9  };
/*asignar(target, source);
valores(target);
llaves(target);*/
function asignar(obj1, obj2){
    for ( var key in obj2) {
        obj1[key] = obj2[key];
    }
    console.log(obj1);
}
function llaves(obj){
    var as=[];
    for(ll in obj)
    {
        as.push(ll)
    }
    console.log(as);
}
function valores(obj1){
    var al = [];
    for(a in obj1){
        al.push(obj1[a])
    }
    console.log(al);
}
entris(target)
function entris(obj){
    for (a in obj)
    {
        console.log(new Array(a  + ": " + obj[a] ));
    }
}