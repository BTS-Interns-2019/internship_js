function flattenArray(data){
    var res = [];    
    // console.log(data.length == 0 && typeof data == "object");
    if(data.length == 0 && typeof data == "object"){
        return data
    }else {
        for(var x of data){
            if(typeof x == "object"){
                flattenArray(x);
            }else {
                res.push(x);
            }        
        }
    }
    return res
    
}


// console.log(flattenArray([]));
console.log(flattenArray([1, 2,["a", "b", "c"], 3, 4]));
// console.log(flattenArray([1, 2,[{foo: "bar"}, ["b"]], 3, 4]));
