let poker_cards =["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let poker_suit =["spades","diamonds","clubs","hearts"];

function getDeck(suit,cards){
    let res = []; 
    for(let i=0;i<suit.length;i++){
        for(let j=0;j<cards.length;j++){
            let aux = {number:cards[j],suit:suit[i]};
            res.push(aux)
        }
    }
    return res;
}
function shuffle(array){
    let aux=array.concat();
    let res=[];
    for(let i=0;i<array.length;i++){
        let randindex = Math.floor((Math.random() * (aux.length)));
        res.push(aux[randindex]);
        aux.splice(randindex,1);
    }
    return res;
}
function myHand(array){
    console.log("\n");
    console.log(array);
    console.log("\n");
    let posibilidad = [];
    let numbers = [];
    let suit= [];
    let sortedarrayn = [];
    let sortedarrays = [];
    sortedarrayn = array.sort(function(obj1, obj2){
        if(obj1.number=='A')aux1=1;
        else if(obj1.number=='J')aux1=11;
        else if(obj1.number=='Q')aux1=12;
        else if(obj1.number=='K')aux1=13;
        else{aux1=parseInt(obj1.number);}
        if(obj2.number=='A')aux2=1;
        else if(obj2.number=='J')aux2=11;
        else if(obj2.number=='Q')aux2=12;
        else if(obj2.number=='K')aux2=13;
        else{aux2=parseInt(obj2.number);}
        return aux1 - aux2;
    });
    let iguales = sortedarrayn.filter(function(uno,i,pos){
        //console.log("in");
        //console.log(uno);
        if(i<pos.length-1){
            //console.log("a");
            if(pos[i].number==pos[i+1].number){
                //console.log("b");
                let aux=pos[i].concat(pos[i+1]);
                return aux;
            }
        }
    })
    /*for(let i=0;i<array.length;i++){
        numbers.push(array[i].number);
        suit.push(array[i].suit);
    }
    console.log(numbers);*/
    //let aux = numbers.sort();
    /*for(let i=0;i<numbers.length;i++){
        console.log("aux ="+aux);
        if(aux.join().indexOf(numbers[i])==aux.join().lastIndexOf(numbers[i])){
            //Si no con numero igual tiene iguales
        }else{
            console.log("-f-"+aux.join().indexOf(numbers[i]));
            console.log("-l-"+aux.join().lastIndexOf(numbers[i]));
            let div1 = aux.splice(aux.join().lastIndexOf(numbers[i]),1);
            if(div1.join().indexOf(numbers[i])==div1.join().lastIndexOf(numbers[i])){
                //Si es par
                posibilidad.push("pair");
                aux = div1.concat();
            }else{
                let div2 = div1.splice(div1.join().lastIndexOf(numbers[i]),1);
                if(div2.join().indexOf(numbers[i])==div2.join().lastIndexOf(numbers[i])){
                    //Si es trio
                    posibilidad.push("three");
                    aux = div2.concat();
                }else{
                    //Si son cuatro
                    posibilidad.push("four of a kind");
                    let div3 = div2.splice(div2.join().lastIndexOf(numbers[i]),1);
                    aux = div3.concat();
                }
            }
        }
    }*/
    
    return iguales;
}

//console.log(getDeck(poker_suit,poker_cards));
//console.log(shuffle(getDeck(poker_suit,poker_cards)));
console.log(myHand([{number:'8',suit:'clubs'},{number:'A',suit:'spades'},{number:'4',suit:'hearts'},{number:'4',suit:'clubs'},{number:'10',suit:'diamonds'}]));
//console.log(myHand([{number:'5',suit:'clubs'},{number:'2',suit:'spades'},{number:'2',suit:'hearts'},{number:'5',suit:'hearts'},{number:'5',suit:'diamonds'}]));