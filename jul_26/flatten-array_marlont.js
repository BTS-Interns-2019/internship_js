function flattenArray(input){
    var newArray = [];
    if(!Array.isArray(input)){
        throw new Error("argument is not an array");
    }
    for(var i=0; i<input.length; i++){
        if(Array.isArray(input[i])){
            newArray = [...newArray, ...flattenArray(input[i])];        
        } else {
            newArray.push(input[i]);
            console.log(newArray);
        }
   }
   return newArray;
}