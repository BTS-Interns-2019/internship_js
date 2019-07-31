function sort(arr, myFuncion){ 
    let ch
    do{
         ch= 0
 for(let i=0;i<arr.length-1;i++){
     let vi,vd,m;
     if(myFuncion){
      m = myFuncion(arr[i],arr[i+1]) //-1 1 0
      //vd = myFuncion(arr[i+1])
     }else{
        vi = arr[i].toString(); 
        vd = arr[i+1].toString(); 
     }
     if(vi>vd||m==1){
         ch++ 
         let aux = arr[i] 
         arr.copyWithin(i,i+1,i+2)
         arr[i+1]=aux
     }
 }
}while(ch!=0);
 return arr;
}

function generateSeed(array){
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function encrypt(baseAlphabet,seed,message){
    let obj = {};
    let ns=""
 for(let i in baseAlphabet){
     obj[baseAlphabet[i]]=seed[i];
 }
 for(let i in message){
     let letra = message.charAt(i)
     if(obj[letra]){
     ns+=obj[letra]
     }else{
         ns+=letra;
     }
 }
 return ns;
}

function descrypt(baseAlphabet,seed,message){
    let obj = {};
    let ns=""
 for(let i in baseAlphabet){
     obj[seed[i]]=baseAlphabet[i];
 }
 for(let i in message){
     let letra = message.charAt(i)
     if(obj[letra]){
     ns+=obj[letra]
     }else{
         ns+=letra;
     }
 }
 return ns;
}

let al = ['a','b','c','d','e','f','r','s','t','u']
let aori = [];
aori = aori.concat(al)
let s = generateSeed(al)
console.log('seed: '+s);
let e = encrypt(aori,s,"free beer")
console.log('encrypt:'+ e);
let d = descrypt(aori,s,e);
console.log('desencrpt',d) 

module.exports={sort,generateSeed,encrypt,descrypt};