//Emmanuel Rubio Navarro
function isBoardReady(botes){
    let tab= Array(9);
    tab.fill(0);
    tab.forEach((x,i) => {
        tab[i]=Array(11);
        tab[i].fill(0);
    });
    for (let i = 0; i < botes.length; i++) {
        const pos = botes[i]; //posision de un bode
        let a=getPos(pos[0]); //coordenada de inicio
        let b=getPos(pos[1]); //coordenada de fin
        or=orientacion(a,b); //1 mismo numero, 2 misma letra, 0 diagonal
        if(or==0)return false;
        for (let j = 0; j < or.length; j++) {
            const or2=or[j];            
            if (tab[or2[0]][or2[1]])return false;
            else if(or2[0]>0){
                if (tab[or2[0]-1][or2[1]])return false;
            }else if(or2[1]>0){
                if (tab[or2[0]][or2[1]-1])return false;
            }else if(or2[0]<9){
                if (tab[or2[0]+1][or2[1]])return false;
            }else if(or2[1]<11){
                if (tab[or2[0]][or2[1]+1])return false;
            }else if(or2[0]>0 && or2[1]>0){
                if (tab[or2[0]-1][or2[1]-1])return false;
            }else if(or2[0]<9 && or2[1]<11){
                if (tab[or2[0]+1][or2[1]+1])return false;
            }            
        }
        for (let j = 0; j < or.length; j++) {
            const or2=or[j];            
            tab[or2[0]][or2[1]]=1;  
        }      
    }
    return true;
}
/*console.log(isBoardReady([['B8', 'C8']]))
console.log(isBoardReady(
    [
        ['B8', 'C8'],
        ['F4', 'F4'],
        ['2B', 'D2'],
        ['H5', 'H1'],
        ['J8', 'J6'],
      ]
));//*/
function getPos(a){
    letras=["A","B","C","D","E","F","G","H","I","J","K"]
    let sa=a.split("");
    let b=[];    
    if(Number.isInteger(parseInt(sa[0]))){
        b[0]=parseInt(sa[0])-1;
        b[1]=letras.indexOf(sa[1]);
    }else{
        b[0]=parseInt(sa[1])-1;
        b[1]=letras.indexOf(sa[0]);
    }
    return b;
}
function orientacion(x,y){
    const arr=[];
    if(x[0]==y[0]){//mismo numero
        for (let i = 0; i <= Math.abs(x[1]-y[1]); i++) {
            let menor;
            if(x[1]<y[1])menor=x[1];
            else menor=y[1];
            arr.push([x[0],i+menor]) //inicia desde el numero y la letra desde la menor hasta la mayor            
        }
        return arr;
    }
    else if(x[1]==y[1]){//misma letra
        for (let i = 0; i <= Math.abs(x[0]-y[0]); i++) {
            let menor;
            if(x[0]<y[0])menor=x[0];
            else menor=y[0];
            arr.push([i+menor,x[1]])
        }
        return arr;
    }
    else return 0; //diagonal
}
module.exports=isBoardReady;