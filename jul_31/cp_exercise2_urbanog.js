let suites = ["spades", "diamonds", "clubs", "hearts"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

function getDeck(cards, suites) {

    for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            let objCard = {
                suite: "",
                card: ""
            };
            objCard.card = cards[j];
            objCard.suite = suites[i];
            deck.push(objCard);


            // console.log(deck[i])
        }
    }
return deck;
}

console.log(getDeck(cards, suites));
for (let i = 0; i < deck.length; i++) {
    console.log(deck[i])
}
function suffle(array) {
    
}

