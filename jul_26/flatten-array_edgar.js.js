function flattenArray (cadena){
    var flat =[];
    try{
        for (i= 0; i < cadena.length; i++){
           if (array.isArray(cadena(i))){
            flat = flat.concat(flattenArray(cadena(i)));
  } else { flat.push(cadena (i));
    
     throw  "error";
    } 
}
}  catch (error){
            console.log ("Se esperaba un arreglo");
}
return flat;
}


var array = [1,2,['a','b'], 3,4, ['c','d']];
console.log (flattenArray (array));