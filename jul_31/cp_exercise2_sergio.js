

let diferentes = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let tipos = ["spades", "diamonds", "clubs", "hearts"]



function getDeck(suit, number){
    let cartas = [];
    for (let i = 0; i < suit.length; i++) {
        for (let x = 0; x < number.length; x++) {
            if(!isNaN(number[x])){
                cartas.push({number: +number[x], suit: suit[i]});
            }else {
                cartas.push({number: number[x], suit: suit[i]});
                }
            }
        }
        
      //  console.log(JSON.stringify(cartas, null));
        return cartas;

    
}

function shuffle(cartas) {
    var i = cartas.length, temp, irandom;
  
    while (0 !== i) {
  
      irandom = Math.floor(Math.random() * i);
      i -= 1;
  
      temp = cartas[i];
      cartas[i] = cartas[irandom];
      cartas[irandom] = temp;
    }
    //console.log(JSON.stringify(cartas, null));
    return cartas;
    
  }

let cartas = getDeck(tipos,diferentes);
let barajeada = shuffle(cartas);


/// MyHand
function myHand(barajeada) {
    let revision = [];
    let intro = barajeada.splice('');
    let mano = {
        hand:"",
        cards:[]
    };

    for (let i = 0; i < intro.length; i++) {
        mano['cards'].push(intro[i]);
        revision.push(intro[i]);
    }

//Ordenar acendente



    


    
let checkIguales = function(params) {
    let primera =params[0]['suit']
    for (let i = 0; i < params.length; i++) {
        if (params[i]['suit'] != primera) {
            return false;
        } 
    }
}


let checkOrden = function(params){
    let verdad = true;
    for (let i = 0; i < params.length-1; i++) {
        if( diferentes.indexOf(params['number'])  == diferentes.indexOf(params['number'])){
        continue;
        }else{
            verdad = false;
        }
    }
    return verdad;
}   


let igualesTodo = checkIguales(mano.cards);
let ordenTodo = checkOrden(mano.cards)

console.log(igualesTodo(mano.cards));




    
    return mano;

}

console.log(myHand(barajeada.splice(1,5)));


