function getDeck(){
    const types=["spades", "diamonds", "clubs", "hearts"];
    const numbers=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let deck=[];
    types.forEach(type => {
        numbers.forEach (number => deck.push({'number':number, 'suit':type}))
    });
    return deck;
}
let deck=getDeck();
//console.log(l(deck));

function shufflee(arr){
    const x = (arr.length*2)-1;
    let arr2=new Array(x+1);
    arr.forEach(val => {
        y=Math.random()*(x);
        arr2.splice(y, 0, val);        
    });    
    return arr2.filter(Boolean);
}
let deckS=shufflee(deck);

function myHand(arr) {
     //console.log(isRoyalFlush(arr))
     isStraight(arr)
//return object
}
//myHand(deck.slice(0,5));
myHand([
  { number: '10', suit: 'clubs' },
  { number: 'J', suit: 'clubs' },
  { number: 'Q', suit: 'clubs' },
  { number: 'K', suit: 'clubs' },
  { number: 'A', suit: 'clubs' }
]);

function isRoyalFlush(arr){
    if(!isFlush(arr))return false
    if(!isRoyal(arr))return false
    return true
}
function isStrightFlush(arr){

}
function isFourOfAKind(arr){

}
function isFullHouse(arr){

}
function isThreeOfAKind(arr){

}
function isTwoPair(arr){

}
function isPair(arr){

}

function isStraight(arr){
    console.log(arr.map(x=>x.number).sort())//.every((x,i)=>x))
}

function isFlush(arr){
    if(arr.every(x=>x.suit===arr[0].suit))return true //misma suit
    return false
}
function isRoyal(arr){
    nums=['10','A','J','K','Q']
    if(arr.map(x=>x.number).sort().every((x,i)=>x==nums[i]))return true //seguida de 10 a A
    return false
}