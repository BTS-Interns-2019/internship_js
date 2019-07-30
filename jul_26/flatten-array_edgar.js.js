function flattenArray (cadena){
    var flat =[];
        for (i in cadena){
           if (cadena[i] instanceof Array){
            flat = flat.concat(flattenArray(cadena [i]));                    
      } else { 
      flat.push(cadena[i]); 
    } 
    
}
 return flat; 
}


console.log (flattenArray (array = [1, 2,['a',{lol:'b'}], 3, 4, ['c',['d', 'e', 'f']]]))