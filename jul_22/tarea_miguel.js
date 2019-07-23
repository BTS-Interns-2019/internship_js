try{
    function comparar ( a, b ){ return a - b; }
    function perimetro (h, w){ return (2*h + 2*w); }
    function area (h, w){ return h*w; }
}catch(e){
    console.error(1);
}

try{
    var num = 0;
    var num2 = 0;
    var cont = 0;
    var cont2 = 0;
    var fig = 0;
    var odd = []; 
    var pair = [];
    var prime = [];
    var noprime = [];
    var minodd = [];
    var minpair = [];
    var minprime = [];
    var minnoprime = [];
    var posx = 0;
    var posy = 0;
    var i = 0;
    var r = 0;
    var areas = [];
    var perimetros = [];
}catch(e){
    console.error(2);
}

try{
    const hnombres = ["Juan", "Luis", "Diego", "Pedro", "Ramon", "Francisco", "Jose", "Marcos", "Andres", "Daniel"];
    const mnombres = ["Maria", "Lucia", "Elizabeth", "Monica", "Mariana", "Estela", "Paulina", "Rebeca", "Sofia", "Gabriela"]
    const altura = [15,-1,3,18,11,5,6,1,9,12];
    const base = [0,8,5,9,11,4,3,1,15];
    const cuenta = [1,2,1,4,2,5,4,3,6,3,7,2,8,7,11,2,0,8,5,9,13];
    for(let i=0;i<=20;i++){
        if(i===0)continue;
        if(i%2===0){
            pair.push(i);
        }else{
            odd.push(i);
        }
    }
    for(let i in odd){
        if((odd[i]%3===0 && odd[i]!==3) || (odd[i]%5===0 && odd[i]!==5) || odd[i]===1){
            noprime.push(odd[i]);
        }else{
            prime.push(odd[i]);
        }
    }
    for(let i in pair){
        if(pair[i]==2){
            prime.push(pair[i]);
        }else{
            noprime.push(pair[i]);
        }
    }
    
    prime = prime.sort(comparar);
    noprime = noprime.sort(comparar);
    console.log(`Los nones son ${odd}`);
    console.log(`Los pares son ${pair}`);
    console.log(`Los primos son ${prime}`);
    console.log(`Los no primos son ${noprime}`);
    
    for(let i = 0;i<odd.length;i++){
        if(minodd.length===5)break;
        minodd.push(odd[i]);
    }
    for(let i = 0;i<pair.length;i++){
        if(minpair.length===5)break;
        minpair.push(pair[i]);
    }
    for(let i in prime){
        if(minprime.length===5)break;
        minprime.push(prime[i]);
    }
    for(let i in noprime){
        if(minnoprime.length===5)break;
        minnoprime.push(noprime[i]);
    }
    console.log(`5 nones son ${minodd}`);
    console.log(`5 pares son ${minpair}`);
    console.log(`5 primos son ${minprime}`);
    console.log(`5 no primos son ${minnoprime}`);
    
    for(let nombre of hnombres){
        console.log(nombre);
    }
    for(let nombre of mnombres ){
        console.log(nombre);
    }
    for(const nombre of hnombres.concat(mnombres)){
        console.log(`Hola ${nombre}`);
    }
    for(num; num < hnombres.length;num++){
        let nombre = hnombres[num];
        if(nombre == 'Pedro' || nombre == 'Francisco' || nombre == 'Andres'){
            continue;
        }else{
            console.log(`Adios ${nombre}`);
        }
    }
    for(num; num2 < mnombres.length;num2++){
        let nombre = mnombres[num2];
        if(nombre == 'Lucia' || nombre == 'Elizabeth' || nombre == 'Sofia'){
            continue;
        }else{
            console.log(`Adios ${nombre}`);
        }
    }
    while(posx<base.length){
        //console.log("--"+base[posx]);
        posy=0;
        switch(true){
            case base[posx]<=0:
                base[posx]=base[posx+1];
                break;
            default:
                while(posy<altura.length){
                    //console.log(altura[posy]);
                    switch(true){
                        case altura[posy]<=0:
                            console.log("Imposible de calcular");
                            break;
                        default:
                            let p = perimetro(base[posx],altura[posy]);
                            let a = area(base[posx],altura[posy]);
                            fig ++;
                            console.log(`Figura ${fig}: Area   ${a}. Perimetro   ${p}`);
                            areas.push(a);
                            perimetros.push(p);
                            break;
                    }
                    posy++;
                }
                break;
        }
        posx++;
    }
    console.log("AREAS");
    do{
        let a= areas[cont];
        console.log(`Fig ${cont}: ${a} m2.`);
        cont++;
    }while(cont<areas.length);
    console.log("PERIMETROS");
    do{
        let p= perimetros[cont2];
        console.log(`Fig ${cont2}: ${p} m.`);
        cont2++;
    }while(cont2<perimetros.length);
    while(r<cuenta.length){
        console.log(cuenta[r]);
        r++;
    }
    do{
        let numero = cuenta[i];
        switch(numero){
            case 1:
                console.log("uno");
                break;
            case 2:
                console.log("dos");
                break;
            case 3:
                console.log("tres");
                break;
            case 4:
                console.log("cuatro");
                break;
            case 5:
                console.log("cinco");
                break;
            case 6:
                console.log("seis");
                break;
            case 7:
                console.log("siete");
                break;
            case 8:
                console.log("ocho");
                break;
            case 9:
                console.log("nueve");
                break;
            default:
                console.log("El valor es menor a uno y mayor a nueve");
                break;
        }
        i++;
    }while(i<cuenta.length)
}catch(e){
    console.error(3);
}
