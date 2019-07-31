var deck = new Array ();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getdeck (suits, numbers){
  // var deck = new Array();
	for(var i in suits)
	{
		for(var j in numbers)
		{
			var card = {Number: numbers[j], Suit: suits[i]};
			deck.push(card);
		}
	}
	return JSON.stringify(deck, null);
}

function shuffle (){
    let getdeck = [];
    for(let i = 0; i < deck.length; i++){
        var num =  Math.floor(Math.random() * deck.length);
        if(getdeck.indexOf(deck[num]) == -1){
            getdeck.push(deck[num]);
        }else{
            i--
        }
    }

 return JSON.stringify(getdeck, null);

}

function myhand (){
    let hand = [];
    for (i = 0; i < 5; i++){
       // var num =  Math.floor(Math.random() * deck.length);
         hand.push(deck[i]);
    }
    return JSON.stringify(hand, null);
}

console.log(getdeck(suits, numbers));
let getdck = getdeck(suits,numbers);
console.log(shuffle());
let get = shuffle ()
console.log(myhand ());




