var suit = ["spades", "diamonds", "clubs", "hearts"];
var number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function getDeck(suit, number){
    var arr = [];
    for (let i = 0; i < suit.length; i++) {
        for (let x = 0; x < number.length; x++) {
            if(!isNaN(number[x])){
                arr.push({number: +number[x], suit: suit[i]});
            }else {
                arr.push({number: number[x], suit: suit[i]});
            }
        }
    }
    return arr;
}
var deck = getDeck(suit,number)

//-----------------
function shuffle(deck){
    let arr = [];
    for(let i = 0; i < deck.length; i++){
        var num =  Math.floor(Math.random() * deck.length);
        if(arr.indexOf(deck[num]) == -1){
            arr.push(deck[num]);
        }else{
            i--
        }
    }
    return arr;
}
var shuffleDeck = shuffle(deck);

//-----------------------------
function myHand(array) {
    var cartas = {
        hand: "",
        cards:[]
    }
    for (let i = 0; i < 5; i++) {
        cartas.cards.push(array[i]);
        
    }
    return cartas;
}
console.log(myHand(shuffleDeck));
            // return {
            //     hand:"Two pair",
            //     cards:[
            //         {number:4, suit:"hearts" },
            //         {number:3, suit:"hearts" },
            //         {number:4, suit:"diamonds" },
            //         {number:3, suit:"spades" },
            //         {number:5, suit:"clubs" }
            //         ]
            //     }