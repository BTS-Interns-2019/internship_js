//var deck = new Array ();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getdeck (suits, numbers){
   var decks = new Array();
	for(var i = 0; i < suits.length; i++)
	{
		for(var j = 0; j < numbers.length; j++)
		{
			var card = {Number: numbers[j], Suit: suits[i]};
			decks.push(card);
		}
	}
	return decks;
}

function shuffle (deck){
    let getdeck = [];
    for(let i = 0; i < deck.length; i++){
        var num =  Math.floor(Math.random() * deck.length);
        if(getdeck.indexOf(deck[num]) == -1){
            getdeck.push(deck[num]);
        }else{
            i--
        }
    }

 return getdeck;
}

function myhand (get){
    let hand = [];
    for (i = 0; i < 5; i++){
       // var num =  Math.floor(Math.random() * deck.length);
         hand.push(get[i]);
    }
    return JSON.stringify(hand, null);
}

console.log(getdeck(suits, numbers));
var deck = getdeck(suits,numbers);
console.log(shuffle(deck));
var get = shuffle (deck);
console.log(myhand (get));




