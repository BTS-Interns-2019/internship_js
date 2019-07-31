// console.log(Math.round(Math.random()*52));

naipes = ["spades", "diamonds", "clubs", "hearts"];
numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

deck = getDeck(naipes, numeros);
deck = shuffle(deck);
// console.log(deck);
// console.log();
mano = myHand(deck);
console.log(mano);

function getDeck(naipes, numeros) {
    var  deck = [];
    for (let naipe of naipes) {
        for (let numero of numeros) {
            deck.push({number: numero, suit: naipe});
        }
    }
    return deck;
}

function shuffle(array){
    return array.sort(function() {
        return Math.random() - 0.5
    });
}

function myHand(array) {
    var  cartas = [];
    var  objeto = new Object();

    for (i = 0; i < 5; i++) {
        cartas[i] = array.pop();
    }
    objeto.hand = ""
    objeto.cards = cartas;
    mano = 1;

    // if () {
    //     mano = 1;
    
    // } else {
    //     mano = 10;
    // }

    switch (mano) {
        case 1:
            objeto.hand = "Royal Flush"
            break;
        case 2:
            objeto.hand = "Straight Flush"
            break;
        case 3:
            objeto.hand = "Four of a Kind"
            break;  
        case 4:
            objeto.hand = "Full House"
            break;
        case 5:
            objeto.hand = "Flush"
            break;
        case 6:
            objeto.hand = "Straight"
            break;
        case 7:
            objeto.hand = "Three of a Kind"
            break;
        case 8:
            objeto.hand = "Two Pair "
            break;
        case 9:
            objeto.hand = "Pair"
            break;
        default:
            objeto.hand = "High Card"
            break;
    }
    return objeto;
}