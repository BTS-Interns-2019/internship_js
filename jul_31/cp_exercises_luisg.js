function avoidingFire(...candles){
 let mayor = Number.MIN_VALUE;
 let rep = 0;
 for(let candle of candles){
     for(let vela of candle){
         if(vela>mayor){
             mayor = vela
             rep = 1
         }else if(vela==mayor){
             rep++;
         }
     }
 }
 return rep;
}

module.exports = avoidingFire;