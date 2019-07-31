//"spades", "diamonds", "clubs", "hearts";

//["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//Create a function that return a deck of ordered cards

function getDeck() {
    let deck = []
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (let suit of suits) {
        for (let number of numbers) {
            deck.push({ number: number, suit: suit })
        }
    }
    // ... you code
    return deck;
}
//create a function that shuffles them.

function shuffle(array) /* use reference to modify the deck */ {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
//you will decode which is the bigger hand that you have. https://www.cardplayer.com/rules-of-poker/hand-rankings

/*return {
    hand:"Two pair",
    cards:[
        {number:4, suit:"hearts" },
        {number:3, suit:"hearts" },
        {number:4, suit:"diamonds" },
        {number:3, suit:"spades" },
        {number:5, suit:"clubs" }
        ]
    }*/
function myHand(array) {
    let cards = [array[0], array[1], array[2], array[3], array[4]]

    function sameSuit(cards) {
        let s = "";
        for (let suit of cards) {
            suit = suit.suit
            if (s == "") {
                s = suit;
            } else {
                if (suit != s) {
                    return false;
                }
            }
        }
        return true;
    }

    function xTimes(cards, number) {
        let x = 0;
        for (let c of cards) {
            if (c.number == number) {
                x++;
            }
        }
        return x;
    }

    function isSequence(cards) {
        let menor = Number.MAX_VALUE
        let valores = [];
        for (let n of cards) {
            switch (n.number) {
                case "J":
                    n = 11;
                    break;
                case "Q":
                    n = 12;
                    break;
                case "K":
                    n = 13;
                    break;
                case "A":
                    n = 1;
                    break;
                default:
                    n = n.number
                    break;
            }
            valores.push(n)
            if (n < menor) {
                menor = n
            }
        }
        let i1 = valores.indexOf(menor + 1)
        let i2 = valores.indexOf(menor + 2)
        let i3 = valores.indexOf(menor + 3)
        let i4 = valores.indexOf(menor + 4)
        return i1 > -1 && i2 > -1 && i3 > -1 && i4 > -1
    }

    function royalFlush(cards) {
        if (sameSuit) {
            let n = []
            for (let number of cards) {
                n.push(number.number)
            }
            let ik = n.indexOf("K")
            let iq = n.indexOf("Q")
            let ij = n.indexOf("J")
            let i10 = n.indexOf(10)
            let ia = n.indexOf("A")
            if (ik > -1 && iq > -1 && ij > -1 && i10 > -1 && ia > -1) {
                return true;
            }
        }
        return false;
    }

    function straightFlush(cards) {
        return sameSuit(cards) && isSequence(cards)
    }

    function fourOfAKind(cards) {
        for (let c of cards) {
            let n = c.number
            if (xTimes(cards, n) == 4) {
                return true
            }
        }
        return false;
    }

    function fullHouse(cards) {
        let r = []
        for (let c of cards) {
            r.push(xTimes(cards, c.number))
        }
        return r.indexOf(2) > -1 && r.indexOf(3) > -1
    }

    function flush(cards) {
        return sameSuit(cards);
    }

    function straight(cards) {
        return isSequence(cards)
    }

    function threeOfAKind(cards) {
        let r = []
        for (let c of cards) {
            r.push(xTimes(cards, c.number))
        }
        return r.indexOf(3) > -1
    }

    function twoPairs(cards) {
        let r = []
        for (let c of cards) {
            r.push(xTimes(cards, c.number))
        }
        let cont = 0;
        while (r.length) {
            if (r.pop() == 2) {
                cont++
            }
        }
        return cont == 4
    }

    function pair(cards) {
        let r = []
        for (let c of cards) {
            r.push(xTimes(cards, c.number))
        }
        let cont = 0;
        while (r.length) {
            if (r.pop() == 2) {
                cont++
            }
        }
        return cont == 2
    }

    function highCard(cards) {
        return true;
    }

    let funs = [royalFlush, straightFlush, fourOfAKind, fullHouse,
        flush, straight, threeOfAKind, twoPairs, pair, highCard]
    let names = ["Royal Flush", "Straight Flush", "Four of a kind",
        "fullHouse", "Flush", "Straight", "Three of a kind", "Two pairs", "Pair", "High Card"]

    function whatHand(funs,names,cards) {
     for(let i=0;i<funs.length;i++){
      if(funs[i](cards))return(names[i])
     }
    }

    let hand = whatHand(funs,names,cards);
    let object = {
        hand: hand,
        cards: cards
    }

    return object
}

module.exports={
    getDeck,
    shuffle,
    myHand
}
let deck = getDeck();
for(let i=0;i<200;i++){
let shuf = shuffle(deck)
let obj = myHand(shuf)
console.log(obj)
}