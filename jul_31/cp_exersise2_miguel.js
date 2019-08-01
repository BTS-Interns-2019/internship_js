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
    /*console.log("\n");
    console.log(array);
    console.log("\n");*/
    /* Las posibilidades son
        -Royal flush A,K,Q,J,10 del mismo suit
        -Straight flush 5 cartas en secuencia del mismo suit.
        -Four of a kind 4 iguales.
        -Full house 3 iguales y 2 iguales.
        -Flush 5 del mismo suit.
        -Straight 5 cartas en secuencia.
        -Three of a kind 3 inguales.
        -Two pair 2 iguales y 2 iguales.
        -Pair 2 iguales.
        -High card si ninguna de las anteriores se cumple tomara la carta con el valor mas alto
    */
    let array2 = array.concat();
    let posibilidad = "";
    let res;
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
    sortedarrays = array2.sort(function(obj1, obj2){
        if(obj1.suit=="spades")aux1=1;
        else if(obj1.suit=="diamonds")aux1=2;
        else if(obj1.suit=="clubs")aux1=3;
        else if(obj1.suit=="hearts")aux1=4;
        if(obj2.suit=="spades")aux2=1;
        else if(obj2.suit=="diamonds")aux2=2;
        else if(obj2.suit=="clubs")aux2=3;
        else if(obj2.suit=="hearts")aux2=4;
        return aux1 - aux2;
    });
    //console.log("sorted array number = ");
    //console.log(sortedarrayn);
    //console.log("sorted array suites = ");
    //console.log(sortedarrays);
    /* -Four of a kind 4 iguales - iguales length = 3 y igual1 number == igual2 number == igual3 number
        -Full house 3 iguales y 2 iguales - iguales length = 3 y igual1 number == igual2 number o igual1 number == igual3 number o igual2 number == igual3 number
        -Three of a kind 3 inguales - iguales length = 2 y igual1 number == igual2 number
        -Two pair 2 iguales y 2 iguales - iguales length = 2 y igual1 number != igual2 number
        -Pair 2 iguales - iguales length = 1 */
    let iguales = sortedarrayn.filter(function(uno,i,pos){//Igual en number
        //console.log(pos);
        //console.log("in");
        //console.log(uno);
        let aux=[];
        if(i<pos.length-1){
            //console.log("a");
            if(uno.number==pos[i+1].number){
                //console.log("b");
                aux.push(uno);
                return aux;
            }
        }
    });
    let sortedarrayn2 = sortedarrayn.concat();
    //console.log("sorted array number 2 = ");
    //console.log(sortedarrayn2);
    /* Royal flush Straight flush y Flush necesitan 4 igualdades */
    let mismosuit = sortedarrays.filter(function(uno,i,pos){
        let aux=[];
        if(i<pos.length-1){
            if(uno.suit==pos[i+1].suit){
                aux.push(uno);
                return aux;
            }
        }
    });
    /* Royal flush Straight flush y Straight nececitan 4 igualdades */
    let secuencia = sortedarrayn2.filter(function(uno,i,pos){
        let aux=[];
        if(i<pos.length-1){
            if(uno.number=='A')aux1=1;
            else if(uno.number=='J')aux1=11;
            else if(uno.number=='Q')aux1=12;
            else if(uno.number=='K')aux1=13;
            else{aux1=parseInt(uno.number);}
            if(pos[i+1].number=='A')aux2=1;
            else if(pos[i+1].number=='J')aux2=11;
            else if(pos[i+1].number=='Q')aux2=12;
            else if(pos[i+1].number=='K')aux2=13;
            else{aux2=parseInt(pos[i+1].number);}
            if(aux1==aux2-1){
                aux.push(uno);
                return aux;
            }else if(aux1 == 1 && aux2 == 10){
                aux.push(uno);
                return aux;
            }
        }
    });
    ////console.log("iguales = ");
    ////console.log(iguales);
    ////console.log("mismo suit = ");
    ////console.log(mismosuit);
    ////console.log("secuencia = ");
    ////console.log(secuencia);
    if(secuencia.length == 4 && mismosuit.length == 4){
        //Caso Royal flush
        if(sortedarrayn[0].number=='A'&&sortedarrayn[1].number==10&&sortedarrayn[2].number=='J'&&sortedarrayn[3].number=='Q'&&sortedarrayn[4].number=='K'){
            //console.log("Royal flush");
            posibilidad = "Royal flush";
        }else{//Caso Straight flush
            //console.log("Straight flush");
            posibilidad = "Straight flush";
        }
    }else if(iguales.length == 3){
        //Caso Four of a kind 
        if(iguales[0].number==iguales[1].number && iguales[0].number==iguales[2].number && iguales[1].number==iguales[2].number){
            //console.log("Four of a kind");
            posibilidad = "Four of a kind";
        }//Caso Full house 
        else if(iguales[0].number==iguales[1].number || iguales[0].number==iguales[2].number || iguales[1].number==iguales[2].number){
            //console.log("Full house");
            posibilidad = "Full house";
        }
    }else if(mismosuit.length == 4){//Caso Flush 
        //console.log("Flush");
        posibilidad = "Flush";
    }else if(secuencia.length == 4){//Caso Straight 
        //console.log("Straight");
        posibilidad = "Straight";
    }else if(iguales.length == 2){
        if(iguales[0].number == iguales[1].number){//Caso Three of a kind 
            //console.log("Three of a kind");
            posibilidad = "Three of a kind";
        }else{//Caso Two pair 
            //console.log("Two pair");
            posibilidad = "Two pair";
        }
    }else if(iguales.length == 1){//Caso Pair 
        //console.log("Pair");
        posibilidad = "Pair";
    }else if(iguales.length<1 && mismosuit.length<4 && secuencia.length<4){//Caso High card 
        //console.log("High card");
        posibilidad = "High card";
    }else{//Imposible
        console.log("Imposible");
    }
    res={hand:posibilidad,cards:array};
    return res;
    //return iguales;
}

//console.log(getDeck(poker_suit,poker_cards));
//console.log(shuffle(getDeck(poker_suit,poker_cards)));
//console.log(myHand([{number:'8',suit:'clubs'},{number:'A',suit:'spades'},{number:'4',suit:'hearts'},{number:'4',suit:'clubs'},{number:'10',suit:'diamonds'}]));
/*console.log(myHand([
    {number:'5',suit:'clubs'},
    {number:'2',suit:'spades'},
    {number:'2',suit:'hearts'},
    {number:'5',suit:'hearts'},
    {number:'5',suit:'diamonds'}
]));*/
/*console.log(myHand([
    {number:'5',suit:'clubs'},
    {number:'2',suit:'spades'},
    {number:'2',suit:'hearts'},
    {number:'3',suit:'hearts'},
    {number:'5',suit:'diamonds'}
]));*/
console.log(myHand([//Royal flush
    {number:'A',suit:'diamonds'},
    {number:'J',suit:'diamonds'},
    {number:'10',suit:'diamonds'},
    {number:'Q',suit:'diamonds'},
    {number:'K',suit:'diamonds'}
]));
console.log(myHand([//Straight flush
    {number:'2',suit:'diamonds'},
    {number:'3',suit:'diamonds'},
    {number:'6',suit:'diamonds'},
    {number:'5',suit:'diamonds'},
    {number:'4',suit:'diamonds'}
]));
console.log(myHand([//Four of kind
    {number:'4',suit:'clubs'},
    {number:'4',suit:'diamonds'},
    {number:'4',suit:'hearts'},
    {number:'10',suit:'spades'},
    {number:'4',suit:'spades'}
]));
console.log(myHand([//Full house
    {number:'5',suit:'clubs'},
    {number:'2',suit:'spades'},
    {number:'2',suit:'hearts'},
    {number:'2',suit:'clubs'},
    {number:'5',suit:'diamonds'}
]));
console.log(myHand([//Flush
    {number:'5',suit:'diamonds'},
    {number:'J',suit:'diamonds'},
    {number:'3',suit:'diamonds'},
    {number:'A',suit:'diamonds'},
    {number:'6',suit:'diamonds'}
]));
console.log(myHand([//Straight
    {number:'6',suit:'spades'},
    {number:'9',suit:'diamonds'},
    {number:'8',suit:'hearts'},
    {number:'10',suit:'clubs'},
    {number:'7',suit:'clubs'}
]));
console.log(myHand([//Three of kind
    {number:'K',suit:'spades'},
    {number:'J',suit:'hearts'},
    {number:'3',suit:'diamonds'},
    {number:'K',suit:'hearts'},
    {number:'K',suit:'clubs'}
]));
console.log(myHand([//Two pairs
    {number:'K',suit:'spades'},
    {number:'J',suit:'hearts'},
    {number:'2',suit:'clubs'},
    {number:'J',suit:'diamonds'},
    {number:'K',suit:'clubs'}
]));
console.log(myHand([//Pair
    {number:'Q',suit:'spades'},
    {number:'7',suit:'hearts'},
    {number:'4',suit:'diamonds'},
    {number:'Q',suit:'hearts'},
    {number:'10',suit:'clubs'}
]));
console.log(myHand([//High card
    {number:'A',suit:'diamonds'},
    {number:'6',suit:'spades'},
    {number:'Q',suit:'hearts'},
    {number:'2',suit:'clubs'},
    {number:'7',suit:'spades'}
]));