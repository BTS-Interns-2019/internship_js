function charCounter(str){
   var array = str.split("");
   var counter = new Object();
   var busco = 0;
   array.forEach(function(element){
      if(counter.hasOwnProperty(element)){
        var lista = Object.entries(counter);
        for(var i=0; i<lista.length; i++){
           if(element === lista[i][0]){
              busco = lista[i][1];
              console.log(lista[i][1]);
           }
        }
        Object.defineProperty(counter, element, {
            value : busco++,
            writable: true,
            enumerable: true,
            configurable: true
        });
      } else {
        Object.defineProperty(counter, element, {
            value : 1,
            writable: true,
            enumerable: true,
            configurable: true
        });
      }
   });
   console.log(counter);
   return counter;
}