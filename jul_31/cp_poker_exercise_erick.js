/** # Poker time

fileName: cp_exercise2_YO-NAME.js

## Create The Deck

```js
"spades", "diamonds", "clubs", "hearts";

["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
```

Create a function that return a deck of ordered cards

```js
function getDeck()
{
    // ... you code
	return deck;
}
```

create a function that shuffles them.

```js
function shuffle(array) // use reference to modify the deck //
{

}
```

you will decode which is the bigger hand that you have.
https://www.cardplayer.com/rules-of-poker/hand-rankings

```js
return {
    hand:"Two pair",
    cards:[
        {number:4, suit:"hearts" },
        {number:3, suit:"hearts" },
        {number:4, suit:"diamonds" },
        {number:3, suit:"spades" },
        {number:5, suit:"clubs" }
        ]
    }
```

```js
function myHand(array) {

return object
}


``` */

const getDeck = () =>{
    const vals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    const suits = ["spades", "diamonds", "clubs", "hearts"]
    let deck =[]
    for(let i = 0; i < suits.length; i++){
        for(let t = 0; t < vals.length; t++){
            deck.push({name: vals[t], suit: suits[i]})
        }
    }
    return deck
}
// console.log(getDeck())

const shuffles = deck => deck.sort( () =>  Math.random () - 0.5) 

// console.log(shuffles(getDeck()))

var plays = [
{hand: "Royal flush",
     cards:[
         {name: "A", suit: "diamonds"},
         {name: "K", suit: "diamonds"},
         {name: "Q", suit: "diamonds"},
         {name: "J", suit: "diamonds"},
         {name: "10", suit: "diamonds"},
     ]},
     {hand: "Straight flush",
      cards:[
        {name: "8", suit: "clubs"},
        {name: "7", suit: "clubs"},
        {name: "6", suit: "clubs"},
        {name: "5", suit: "clubs"},
        {name: "4", suit: "clubs"},
      ]},
      {hand: "Four of a kind",
      cards:[
        {name: "J", suit: "clubs"},
        {name: "J", suit: "diamonds"},
        {name: "J", suit: "spades"},
        {name: "J", suit: "hearts"},
        {name: "7", suit: "clubs"},
      ]},
      {hand: "Full house",
      cards:[
        {name: "10", suit: "clubs"},
        {name: "10", suit: "diamonds"},
        {name: "10", suit: "spades"},
        {name: "9", suit: "hearts"},
        {name: "9", suit: "clubs"},
      ]},
    ]

    /** ---------- my hand -------------- */
  function myHand(deck){
  let hand = []
  for(let i = 0; i < 5; i++){
      let draw = deck.pop()
      hand.push(draw)
    }
    return hand
  }
  const hand = myHand(shuffles(getDeck()))
  // console.log(hand)
/** ----------------------------------------- */

const madeUpHand = [ 
  { name: 'A', suit: 'spades' },
  { name: '10', suit: 'spades' },
  { name: 'J', suit: 'spades' },
  { name: 'K', suit: 'spades' },
  { name: 'Q', suit: 'spades' } ]

function myPlay(hand){
    let counter = 0
    for(let i = 0; i < hand.length; i++){
      for(let x = 1+i; x < hand.length; x++){
        if(hand[i].name===hand[x].name){
          counter++
        }
      } 
    }
    
    const play = {hand:"Pair"}
    switch(counter){
      case 1:
        play.hand = "Pair"
        play.cards = hand
        return play
      break;
      case 3:
        play.hand = "Three of a kind"
        play.cards = hand
        return play
      break;
      case 2:
        play.hand = "Two pairs"
        play.cards = hand
        return play
      break; 
      case 4:
        play.hand = "Full house"
        play.cards = hand
        return play
      break;
      default:
        return validation(hand)
        // console.log("You Loose!!!!")
      break;
      }

      function validation(hand){
        const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        const royal = ["10", "J", "Q", "K", "A"]
        const palo = ["diamonds", "spades", "clubs", "hearts"]
        let counter2 = 0
        for(let p = 0; p < palo.length; p++){
          for(let r = 0; r < royal.length; r++){
            if(hand.some((v,i,a) => v.name === royal[r] && v.suit === palo[p])){
              play.hand = "Royal flush"
              play.cards = hand
              counter2++
            }
          }
        }
        return play
      } 
  }

// console.log(myPlay(hand))
console.log(myPlay(madeUpHand))

module.exports = {
  getDeck,
  myPlay,
  myHand
}



      
