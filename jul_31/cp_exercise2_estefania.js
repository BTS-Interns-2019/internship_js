function getDeck() {
    var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var cartas = ["spades", "diamonds", "clubs", "hearts"];
    var deck = []; 
    for (var i = 0; i < cartas.length; i = i + 1) {
        for (var j = 0; j <= value.length-1; j = j + 1) {
            deck[deck.length] = { name: cartas[i] + " " + value[j], number: value[j], suit: cartas[i] };
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
    if(!Array.isArray(deck) || (Array.isArray(deck) && deck.length > 5)) {
        return {
            hand: "wrong input",
            cards: "cards"
        }
    }
    const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"](){
        if(deck.filter(() =>))
    }
    return deck
} 

deck = (myHand(deck.slice(0,5)));

console.log(deck)