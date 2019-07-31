function getDeck() {
    var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var cartas = ["spades", "diamonds", "clubs", "hearts"];
    var deck = []; 
    for (var i = 0; i < cartas.length; i = i + 1) {
        for (var j = 0; j <= value.length-1; j = j + 1) {
            deck[deck.length] = { number: value[j], suit: cartas[i] };
        }
    }
	return deck;
}
deck = (getDeck());


function shuffle(deck) { 
    for (i = 0; i < 52; i++){
	aleator = parseInt(Math.random()*52);
	indice = deck[i];
	deck[i] = deck[aleator];
	deck[aleator] = indice;
    }
    return deck
}
deck = (shuffle(deck));


function myHand(deck) {
    arr2 = deck.slice(0, 5)
    return arr2
    // for(i=0; i<=arr2.length; i++) {
    //     if(arr2.number == arr2.number) {

    //     }
    // }
} 

deck = (myHand(deck));
console.log(deck)
