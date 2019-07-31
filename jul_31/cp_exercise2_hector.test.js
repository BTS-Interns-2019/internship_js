const { getDeck, shuffle, myHand } = require('./cp_exercise2_hector');

/**
 * Happy Path :D
 */
const cases = [
  // Royal Flush
  [
    { number: '10', suit: 'spades'},
    { number: 'J', suit: 'spades'},
    { number: 'Q', suit: 'spades'},
    { number: 'K', suit: 'spades'},
    { number: 'A', suit: 'spades'}
  ],
  // Straight Flush
  [
    { number: '2', suit: 'diamonds'},
    { number: '3', suit: 'diamonds'},
    { number: '4', suit: 'diamonds'},
    { number: '5', suit: 'diamonds'},
    { number: '6', suit: 'diamonds'}
  ],
  // Four of a Kind
  [
    { number: 'K', suit: 'spades'},
    { number: 'K', suit: 'diamonds'},
    { number: 'K', suit: 'clubs'},
    { number: 'K', suit: 'hearts'},
    { number: '5', suit: 'hearts'}
  ],
  // Full House
  [
    { number: '4', suit: 'spades'},
    { number: '4', suit: 'clubs'},
    { number: '4', suit: 'hearts'},
    { number: '9', suit: 'spades'},
    { number: '9', suit: 'clubs'}
  ],
  // Flush
  [
    { number: '2', suit: 'clubs'},
    { number: '5', suit: 'clubs'},
    { number: '7', suit: 'clubs'},
    { number: 'A', suit: 'clubs'},
    { number: 'Q', suit: 'clubs'}
  ],
  // Straight
  [
    { number: '5', suit: 'clubs'},
    { number: '6', suit: 'spades'},
    { number: '7', suit: 'hearts'},
    { number: '8', suit: 'hearts'},
    { number: '9', suit: 'diamonds'}
  ],
  // Three of a Kind
  [
    { number: '7', suit: 'spades'},
    { number: '7', suit: 'diamonds'},
    { number: '7', suit: 'hearts'},
    { number: '6', suit: 'hearts'},
    { number: '2', suit: 'clubs'}
  ],
  // Two Pair
  [
    { number: '7', suit: 'spades'},
    { number: '7', suit: 'hearts'},
    { number: '9', suit: 'spades'},
    { number: '3', suit: 'clubs'},
    { number: '3', suit: 'hearts'}
  ],
  // One Pair
  [
    { number: '4', suit: 'spades'},
    { number: '3', suit: 'hearts'},
    { number: 'J', suit: 'clubs'},
    { number: 'Q', suit: 'hearts'},
    { number: 'J', suit: 'spades'}
  ],
  // High Card
  [
    { number: '10', suit: 'hearts'},
    { number: 'Q', suit: 'clubs'},
    { number: '3', suit: 'spades'},
    { number: '6', suit: 'diamonds'},
    { number: '7', suit: 'hearts'}
  ]
];

const results = [
  'Royal Flush',
  'Straight Flush',
  'Four of a Kind',
  'Full House',
  'Flush',
  'Straight',
  'Three of a Kind',
  'Two Pair',
  'One Pair',
  'High Card'
];

for (let i = 0; i < cases.length; i++) {
  test(`Testing hand ${results[i]}`, () => {
    expect(myHand(cases[i]).hand).toBe(results[i]);
  });
}

/**
 * Sad Path :(
 */
const errorCases = [
  // Not array of cards
  'cards',
  // Wrong number of cards
  [
    { number: '10', suit: 'spades'},
    { number: 'J', suit: 'spades'},
    { number: 'Q', suit: 'spades'},
    { number: 'K', suit: 'spades'}
  ],
  // More than one identical card
  [
    { number: '2', suit: 'diamonds'},
    { number: '2', suit: 'diamonds'},
    { number: '4', suit: 'diamonds'},
    { number: '5', suit: 'diamonds'},
    { number: '6', suit: 'diamonds'}
  ],
  // Unexistent number in a card
  [
    { number: 'T', suit: 'spades'},
    { number: 'K', suit: 'diamonds'},
    { number: 'K', suit: 'clubs'},
    { number: 'K', suit: 'hearts'},
    { number: '5', suit: 'hearts'}
  ],
  // Unexistent suit in a card
  [
    { number: '4', suit: 'spades'},
    { number: '4', suit: 'clubs'},
    { number: '4', suit: 'arrows'},
    { number: '9', suit: 'spades'},
    { number: '9', suit: 'clubs'}
  ]
];

const errorResults = [
  'Hand is not an array of cards',
  'Wrong number of cards in the hand',
  'More than one identical card in the hand',
  'Unexistent number in a card in the hand',
  'Unexistent suit in a card in the hand'
];

for (let i = 0; i < errorCases.length; i++) {
  test(`Testing hand ${errorResults[i]}`, () => {
    expect(myHand(errorCases[i])).toContain(errorResults[i]);
  });
}