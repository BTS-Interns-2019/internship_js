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

    cartas2 = cartas.slice();
    cartas3 = cartas.slice();
    for (i = 0; i < 5; i++){
        if (cartas[i].number == 'A') {
            cartas2[i] = 14;
        } else if (cartas[i].number == 'K') {
            cartas2[i] = 13;
        } else if (cartas[i].number == 'Q') {
            cartas2[i] = 12;
        } else if (cartas[i].number == 'J') {
            cartas2[i] = 11;
        } else {
            cartas2[i] = Number(cartas[i].number)
        }

        cartas3[i] = cartas[i].suit;
    }
    cartas2.sort((a,b)=>a-b);

    let set1 = new Set(cartas2);
    let set2 = new Set(cartas3);
    iterable1 = Array.from(set1);
    iterable2 = Array.from(set2);
    sum1 = iterable1.slice();
    sum2 = iterable2.slice();
    sum1.fill(0);
    sum2.fill(0);
    for (i = 0; i < iterable1.length; i++) {
        for (j = 0; j < cartas2.length; j++) {
            if (iterable1[i] == cartas2[j] ) {
                sum1[i]++;            
            }   
            if (iterable2[i] == cartas3[j] ) {
                sum2[i]++;            
            }

        }    
    }
    max = Math.max(...sum1);
    l1 = sum1.length;
    l2 = sum2.length;

    // 1 [1,1,1,1,1] [5]        l2 == 5 && A >>
    // 2 [1,1,1,1,1] [5]        l2 == 5 && >>
    // 3 [1,4] l1 == 2 && max == 4
    // 4 [2,3] l1 == 2 && max == 3
    // 5 [1,1,1,1,1] [5]        l2 == 5 && 
    // 6 [1,1,1,1,1]            l1 == 5 && l2 != 5 && >>
    // 7 [1,1,3] l1 == 3 && max == 3
    // 8 [1,2,2] l1 == 3 && max == 2
    // 9 [1,1,1,2] l1 == 4 && max == 2

    if (l1 == 2 && max == 4) {
        mano = 3;    
    } else if (l1 == 2 && max == 3) {
        mano = 4;
    } else if (l1 == 3 && max == 3) {
        mano = 7;
    } else if (l1 == 3 && max == 2) {
        mano = 8;
    } else if (l1 == 4) {
        mano = 9;    
    } else {
        mano = 10;
    }

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