const numbers=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function getDeck(){
    const types=["spades", "diamonds", "clubs", "hearts"];
    let deck=[];
    types.forEach(type => {
        numbers.forEach (number => deck.push({'number':number, 'suit':type}))
    });
    return deck;
}
//let deck=getDeck();
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
//let deckS=shufflee(deck);

function myHand(arr) {
    let object={cards:arr};
    switch (true){
        case isRoyalFlush(arr):
            object.hand="Royal flush"
            break;
        case isStrightFlush(arr):
            object.hand="Stright flush"
            break;
        case isFourOfAKind(arr):
            object.hand="Four of a kind"
            break;
        case isFullHouse(arr):
            object.hand="Full house"
            break;
        case isThreeOfAKind(arr):
            object.hand="Three of a kind"
            break;
        case isTwoPair(arr):
            object.hand="Two pair"
            break;
        default:
            object.hand="High card"
    }    
return object;
}
//otr = myHand(deck.slice(0,5));
/*
otr=myHand([
  { number: '10', suit: 'clubs' },
  { number: 'Q', suit: 'clubs' },
  { number: 'A', suit: 'clubs' },
  { number: 'K', suit: 'clubs' },
  { number: 'J', suit: 'clubs' }
]);*/
//console.log(otr);


function isRoyalFlush(arr){
    if(!isFlush(arr))return false
    if(!isRoyal(arr))return false
    return true
}
function isStrightFlush(arr){
    if(!isFlush(arr))return false
    if(!isStraight(arr))return false
    return true
}
function isFourOfAKind(arr){
    if(Math.max.apply(null,noCards(arr))===4)return true
    return false
}
function isFullHouse(arr){
    if(noCards(arr).reduce((acc,val)=>acc*val)==6)return true
    return false    
}
function isThreeOfAKind(arr){
    if(Math.max.apply(null,noCards(arr))===3)return true
    return false
}
function isTwoPair(arr){
    if(noCards(arr).reduce((acc,val)=>acc*val)==4)return true
    return false  
}
function isPair(arr){
    if(noCards(arr).reduce((acc,val)=>acc*val)==2)return true
    return false  
}

function isStraight(arr){
    if(isRoyal(arr))return true;
    iMenor=numbers.indexOf(arr.map(x=>x.number).sort(order)[0])    
    seguidos=numbers.slice(iMenor,iMenor+5); //numeros seguidos a partir del menor de las cartas
    if(arr.map(x=>x.number).sort(order).every((x,i)=>x==seguidos[i]))return true //seguida de 10 a A
    return false
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
function noCards(arr){ //arreglo con el numero de cartas de cada una
    let arrAll={};
    arr.forEach(val => {
        const pos=val.number.toString()
        if(arrAll[pos]===undefined)arrAll[pos]=1;
        else arrAll[pos]++;
    });
    return Object.entries(arrAll).map(x=>x[1]);
}
function order(a,b){
    return numbers.indexOf(a)-numbers.indexOf(b);
}