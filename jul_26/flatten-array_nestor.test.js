var res = [];    
function flattenArray(data){
    // console.log(data.length == 0 && typeof data == "object");
    if(data.length == 0 && typeof data == "object"){
        return data
    }else {
        for(var x of data){
           
            
            if(Array.isArray(x) ){
                flattenArray(x);
            }else {
                res.push(x);
            }        
        }
    }
    return res
    
}

// var foo = {a: 32, b: 21}
// console.log(foo.length);

// console.log(flattenArray([]));
console.log(flattenArray([1, 2,["a", "b", {foo: "sergio"}, "c"], 3, 4]));
// console.log(flattenArray([1, 2,[{foo: "bar"}, ["b"]], 3, 4]));
