function smallest(number) {
  if(number === undefined)return [];
  let str;
  if(typeof number === "string"){
    if(number == "")return [];
    str=number;
  }else{
    str=number.toFixed();
  }
  let smallest = parseInt(str);
  let begin = 0, end = 0;
  for(let i=0;i<str.length;i++){
    for(let f=0;f<str.length;f++){
      if(i!=f){
        //console.log("i = "+i+" f = "+f);
        //console.log("Valor = "+str);
        let div = str.split("");
        let aux1 = div[i];
        //console.log("aux1 = "+aux1);
        //console.log("div = "+div.join());
        let aux2 = div.concat();
        aux2.splice(i,1);//Quita elemento
        //console.log("aux2 = "+aux2.join());
        let aux = aux2.concat();
        aux.splice(f,0,aux1);//Coloca elemento
        //console.log("aux = "+aux);
        aux = aux.join("");
        //console.log("aux = "+aux);
        let n = parseInt(aux);
        //console.log("NUMERO = "+n);
        //console.log(smallest+">"+n);
        if(n<smallest){
          smallest=n;
          begin = i;
          end = f;
        }
      }
    }
  }
  return [smallest,begin,end];
  //Regresar menor indice tomado e indice colocado [126235, 2, 0];
}

/*console.log(smallest(261235));//126235
console.log(smallest(83425825));
console.log(smallest(911111));*/

module.exports = smallest;