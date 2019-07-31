function getDeck(){
    var tipos = ["spades", "diamonds", "clubs", "hearts"]
    var valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var deck = [];
    tipos.forEach(l => {
        valores.forEach(m => {
            var element = {};
            deck.push(element);
            element.number = m;
            element.suit = l;
        });
    });
    return deck;
}
//console.log(getDeck());

function shuffle(deck){
    deck.sort(()=>Math.random() -0.5 );
    return deck;
}

    deck = getDeck()
// console.log(deck);
    deck = shuffle(deck)
 //console.log(deck);


function myHand(array) {
    object = {}
    cartas = array.slice(0,5);
    object.cards = cartas
     console.log(cartas);

        cartas.forEach(element => {
            console.log(element);
            for (const key in element) {
                if (element.hasOwnProperty(key)) {
                    const elemento = element[key];
                    console.log(elemento);
                    
                    
                }
            }
            
        });


     return object;    
}

myHand(deck)

