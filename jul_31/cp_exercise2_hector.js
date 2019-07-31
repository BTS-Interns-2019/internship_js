const suits = ["spades", "diamonds", "clubs", "hearts"];
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
  const deck = [];

  suits.forEach(suit => {
    cards.forEach(card => {
      deck.push({
        number: card,
        suit: suit,
      });
    });
  });

  return deck;
}

const deck = getDeck();
function shuffle(deck) {
  return deck.sort(() => Math.floor(Math.random() * (3) + (-1)));
}

shuffle(deck);

function myHand(deck) {
  const hand = {
    hand: '',
    cards: [],
  };

  for (let i = 0; i < 5; i++) {
    hand.cards.push(deck[i]);
  }

  const identicalSuits = checkCardsSuits(hand.cards);
  const inNumericalOrder = checkCardsNumericalOrder(hand.cards);
  const isRoyalOrder = checkCardsRoyalOrder(hand.cards, inNumericalOrder);

  // Royal Flush
  if (isRoyalOrder && identicalSuits) {
    hand.hand = 'Royal Flush';
    return hand;
  }

  // Straight Flush
  if (identicalSuits && inNumericalOrder) {
    hand.hand = 'Straight Flush';
    return hand;
  }

  // Flush 
  if (identicalSuits) {
    hand.hand = 'Flush';
    return hand;
  }

  // Straight
  if (inNumericalOrder) {
    hand.hand = 'Straight';
    return hand;
  }

  const pairingCards = checkPairingCards(hand.cards);
  
  // One Pair, Two Pairs, Three of a King, Four of a Kind, Full House
  if (pairingCards) {
    if (pairingCards.length > 1) {
      if (pairingCards.some(cards => cards[1] === 3)) {
        hand.hand = 'Full House';
        return hand;
      }

      hand.hand = 'Two Pairs';
      return hand;
    }

    if (pairingCards[0][1] === 2) {
      hand.hand = 'One Pair';
      return hand;
    } else if (pairingCards[0][1] === 3){
      hand.hand = 'Three of a Kind';
      return hand;
    } else if (pairingCards[0][1] === 4) {
      hand.hand = 'Four of a Kind';
      return hand;
    }
  }

  // High Card
  hand.hand = `High Card`;
  return hand;
}

function checkCardsSuits(hand) {
  switch (hand[0].suit) {
    case 'spades':
      return hand.every(card => card.suit === 'spades');
    case 'diamonds':
      return hand.every(card => card.suit === 'diamonds');
    case 'clubs':
      return hand.every(card => card.suit === 'clubs');
    case 'hearts':
      return hand.every(card => card.suit === 'hearts');
  }
}

function checkCardsNumericalOrder(hand) {
  for (let i = 0; i < hand.length; i++) {
    if (typeof hand[i + 1] !== 'undefined' && hand[i + 1] !== null) {
      if (hand[i].number === 'K' && hand[i + 1].number === 'A') {
        continue;
      }
      if (cards.indexOf(hand[i + 1].number) - cards.indexOf(hand[i].number) !== 1) {
        return false;
      }
    }
  }
  return true;
}

function checkCardsRoyalOrder(hand, inNumericalOrder) {
  return inNumericalOrder && hand[0].number === '10' ? true : false;
}

function checkPairingCards(hand) {
  const handObj = {};

  hand.forEach(card => {
    handObj[card.number] = handObj.hasOwnProperty(card.number) ? handObj[card.number] + 1 : 1;
  });

  const pairings = [];
  for (let card in handObj) {
    if (handObj[card] > 1) {
      pairings.push([card, handObj[card]]);
    }
  }

  return pairings.length > 0 ? pairings : false;
}

console.log(myHand(deck));