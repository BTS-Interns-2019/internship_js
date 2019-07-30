function sort(arre, callback){
    if(Array.isArray(arre))
    {
        if(callback==null){
            arre.forEach(()=>{
                    arre.forEach((valor, i)=>{
                        if(arre[i] > arre[i+1]){
                            aux = arre[i];
                            arre[i] = arre[i+1];
                            arre[i+1]=aux;
                        }
                    })
                })    
            return arre;
        }
    }else{
        return "Favor de ingresar un arreglo";
    }
}

console.log(sort([10,1,2,3,30,4,40,5,5]));