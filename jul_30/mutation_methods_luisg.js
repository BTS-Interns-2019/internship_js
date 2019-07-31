function sort(arr, myFuncion){ 
    
    let ch
    do{
         ch= 0
 for(let i=0;i<arr.length;i++){
     let vi,vd;
     if(myFuncion){
      vi = myFuncion(arr[i])
      vd = myFuncion(arr[i+1])
     }else{
        vi = arr[i]; 
        vd = arr[i+1]; 
     }
     if(vi>vd){
         ch++ 
         let aux = arr[i] 
         arr.copyWithin(i,i+1,i+2)
         arr[i+1]=aux
     }
 }
}while(ch!=0);
 return arr;
}

function generateSeed(arr){
}

function encrypt(baseAlphabet,seed,message){

}

function descrypt(baseAlphabet,seed,message){

}

module.exports=sort;