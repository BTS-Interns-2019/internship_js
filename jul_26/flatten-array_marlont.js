function flattenArray(input){
    var newArray = [];
    var arrayan = [];
    for(var i=0; i<input.length; i++){
        if(Array.isArray(input[i])){
            arrayan = [];
            arrayan = flattenArray(input[i]);        
        } else {
            if(arrayan.length > 0){
                for(var j=0; j<arrayan.length; j++ ){
                    newArray.push(arrayan[j]);
                }
            }
            newArray.push(input[i]);
            console.log(newArray);
        }
   }
   return newArray;
}