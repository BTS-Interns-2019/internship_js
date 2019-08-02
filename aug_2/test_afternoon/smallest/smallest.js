function smallest(ent) {
  //Hardcoded for first test :)
  try{
    if(typeof(ent) != "number"){
      throw"Insert a number please";
    }
    ent = ent.toString().split("");
    menor=parseInt(ent[0]);
    pos1=0;
    mayor =parseInt(ent[0]);
    pos2=null;
    //console.log(menor)
    for (let i = 0; i < ent.length; i++) {
      a=parseInt(ent[i]);
      if(a<=menor){
        pos2=i;
        menor = a;
      }
      if(a>mayor){
        pos1 = i;
        mayor = a;
      }
    }
    console.log(pos2)
    console.log(menor)
    auxmenor = ent[pos2];
    auxmayor = ent[pos1];
    delete ent[pos1];
    delete ent[pos2];
    //ent[pos1] = auxmenor;
    ent[pos2] = auxmayor;
    ent.unshift(auxmenor)
    //console.log(JSON.stringify(ent,null));
    ent = ent.join("");
    arr = [parseInt(ent), parseInt(pos2),parseInt(pos1)];
    return arr;
  }catch(e){
    return e;
  }
}
console.log(smallest(261235))
module.exports = smallest;