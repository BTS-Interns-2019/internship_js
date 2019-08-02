function closestAndSmallest(str) {
  let value = [];
  let div = str.split(' ');
  let weight = div.map((actual)=>{
    return actual.split('').reduce((base,numero)=>{
      base = parseInt(base);
      numero = parseInt(numero);
      return base= base+numero;
    });
  });
  let dif;
  let smallest = [];
  //console.log("weight = "+weight);
  for(let i=0;i<weight.length;i++){
    for(let j=0;j<weight.length;j++){
      if(i!=j){
        let aux=weight[i]-weight[j];
        if(dif==undefined && aux>-1){
          //console.log("Inicio");
          dif=aux;
          smallest[0]=weight[i];
          smallest[1]=weight[j];
        }else{
          //console.log(i+" - "+j+" "+dif+"<"+aux);
          if(aux<dif && aux>-1){
            dif=aux;
            smallest[0]=weight[i];
            smallest[1]=weight[j];
          }
        }
      }
    }
  }
  if(smallest[0]>smallest[1]){
    smallest.sort();
  }
  let d=div.concat();
  let w=weight.concat();
  value=smallest.map((actual)=>{
      let j=w.indexOf(actual);
      let r= [actual,j,parseInt(d[j])];
      d.splice(j,1,null);
      w.splice(j,1,null);
    return r;
  })
  return value;
}

module.exports = closestAndSmallest;

//console.log(closestAndSmallest('103 123 4444 99 2000'));//[[2, 4, 2000], [4, 0, 103]] w =[4,6,16,18,2]
console.log(closestAndSmallest('101 200 101'));//[[2, 0, 101], [2, 1, 200]] w =[4,6,16,18,2]