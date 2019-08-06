/*function sort (cad){
   cad.forEach (() => {
       cad.forEach((val, i) => {
           if (cad[i] > cad[i + 1]){
               aux = cad[i];
               cad.copyWithin(i,i+1,i+2); 
               cad.fill(aux,i+1,i+2);          
           }
       })
   });
  return JSON.stringify(cad, null);
}

//console.log(sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//console.log(sort(['g','u','r','e','y','o','q','a','c','x','z','r','t','b','h','k','p','p','i','h','g','f','d','d',]));

function sort1 (cad){
   cad=cad.toString().split(",");
    console.log(cad.length)
   cad.forEach (() => {
       cad.forEach((val, i) => {
           if (cad[i] > cad[i + 1]){
               aux = cad[i];
               cad.copyWithin(i,i+1,i+2); 
               cad.fill(aux,i+1,i+2);          
           }
       })
   });
  return JSON.stringify(cad, null);
}*/

console.log(sort([6,4,21,2]))

console.log([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213].sort())

function sort(cad, callback) {
    if (Array.isArray(cad)) {
        let aux = 0;
        let result=[];
        cad.forEach(() => {
            cad.forEach((val, i) => {
                if (callback === undefined) {
                    if (cad[i] > cad[i + 1]) {
                        aux = cad[i]+ "";
                        cad.copyWithin(i,i+1,i+2); 
                        cad.fill(aux,i+1,i+2);

                    }
                } else {
                    cad.forEach(()=>{
                        cad.forEach((val,i)=>{
                            if (callback(cad[i],cad[i+1])){
                                aux = cad[i];
                                cad.copyWithin(i,i+1,i+2); 
                                cad.fill(aux,i+1,i+2);
                            }
                        })
                    });
                }
            })
        });
        for (let i = 0; i <cad.length ; i++) {
            result[i]=(cad[i]*1).toString;
        }
        return result;
    } else {
        return "Solo arreglos";
    }
}
/*
let cad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let cad1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let seed = generatedseed(cad1);
message = "hola a todos";
console.log(JSON.stringify(cad,null))
console.log(JSON.stringify(seed, null))
console.log(encrypt(cad,seed,message))
let encryptmess = encrypt(cad,seed,message)
console.log(decrypt(cad,seed,encryptmess))

function generatedseed ( gen ){
    var i = gen.length,
        randomnumber,
        temp;
    while(i){
     randomnumber = Math.random() * i-- | 0;
     temp = gen[i];
     gen[i] = gen[randomnumber];
     gen[randomnumber] = temp
    } 
    return gen;
   }

function encrypt (cad,seed,message){
    message = message.split("")
    for (let i = 0; i < message.length; i++){
        if (cad.includes(message[i])){
            message[i] = seed[cad.indexOf(message[i])]
        }
    }
   message = message.toString().replace(/,/gi,"");
    return message;
}

function decrypt (cad,seed,encrypted){
    encrypted = encrypted.split("")
    for (let i = 0; i < encrypted.length; i++){
         if (seed.includes(encrypted[i])){
             encrypted[i] = cad[seed.indexOf(encrypted[i])]
         }
     }
     encrypted = encrypted.toStringeplace(/,/gi,"");
     
     return encrypted;
}
*/
module.exports = sort;