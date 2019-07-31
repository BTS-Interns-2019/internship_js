const {
    getDeck,
    shuffle,
    myHand
} = require('./cp_exercise2_luisg')

test('deck y shuffle length', () => {
    let deck = getDeck();
    expect(deck.length).toBe(52);
    let shuf = shuffle(deck)
    expect(shuf.length).toBe(52);
})

test('my hand Royal flush', () => {
    expect(myHand([{ number: 'K', suit: 'spades' },
    { number: 'A', suit: 'spades' },
    { number: 10, suit: 'spades' },
    { number: 'J', suit: 'spades' },
    { number: 'Q', suit: 'spades' }
    ])).toStrictEqual({
        hand: 'Royal Flush',
        cards:
            [{ number: 'K', suit: 'spades' },
            { number: 'A', suit: 'spades' },
            { number: 10, suit: 'spades' },
            { number: 'J', suit: 'spades' },
            { number: 'Q', suit: 'spades' }
            ]
    });

})

test('my hand Straight flush', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 5, suit: 'spades' },
    { number: 6, suit: 'spades' },
    { number: 7, suit: 'spades' },
    { number: 8, suit: 'spades' }
    ])).toStrictEqual({
        hand: 'Straight Flush',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 5, suit: 'spades' },
            { number: 6, suit: 'spades' },
            { number: 7, suit: 'spades' },
            { number: 8, suit: 'spades' }
            ]
    });

})

test('my hand Four of a kind ', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 4, suit: 'diamonds' },
    { number: 4, suit: 'hearts' },
    { number: 4, suit: 'clubs' },
    { number: 8, suit: 'spades' }
    ])).toStrictEqual({
        hand: 'Four of a kind',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 4, suit: 'diamonds' },
            { number: 4, suit: 'hearts' },
            { number: 4, suit: 'clubs' },
            { number: 8, suit: 'spades' }
            ]
    });

})

test('my hand Full house ', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 4, suit: 'diamonds' },
    { number: 4, suit: 'hearts' },
    { number: 8, suit: 'clubs' },
    { number: 8, suit: 'spades' }
    ])).toStrictEqual({
        hand: 'Full House',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 4, suit: 'diamonds' },
            { number: 4, suit: 'hearts' },
            { number: 8, suit: 'clubs' },
            { number: 8, suit: 'spades' }
            ]
    });

})

test('my hand Flush ', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 2, suit: 'spades' },
    { number: 9, suit: 'spades' },
    { number: 5, suit: 'spades' },
    { number: 7, suit: 'spades' }
    ])).toStrictEqual({
        hand: 'Flush',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 2, suit: 'spades' },
            { number: 9, suit: 'spades' },
            { number: 5, suit: 'spades' },
            { number: 7, suit: 'spades' }
            ]
    });

})

test('my hand Straight', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 5, suit: 'hearts' },
    { number: 6, suit: 'diamonds' },
    { number: 7, suit: 'spades' },
    { number: 8, suit: 'clubs' }
    ])).toStrictEqual({
        hand: 'Straight',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 5, suit: 'hearts' },
            { number: 6, suit: 'diamonds' },
            { number: 7, suit: 'spades' },
            { number: 8, suit: 'clubs' }
            ]
    });

})

test('my hand three of a kind', () => {
    expect(myHand([{ number: 'K', suit: 'spades' },
    { number: '8', suit: 'hearts' },
    { number: '6', suit: 'clubs' },
    { number: 'K', suit: 'diamonds' },
    { number: 'K', suit: 'hearts' },
    { number: '10', suit: 'clubs' },
    { number: 'Q', suit: 'clubs' },
    { number: '4', suit: 'spades' },
    { number: '3', suit: 'hearts' },
    { number: 'A', suit: 'clubs' },
    { number: '5', suit: 'hearts' },
    { number: '3', suit: 'clubs' },
    { number: '7', suit: 'clubs' },
    { number: '10', suit: 'hearts' },
    { number: 'A', suit: 'hearts' },
    { number: '6', suit: 'diamonds' },
    { number: '6', suit: 'hearts' },
    { number: '2', suit: 'hearts' },
    { number: 'J', suit: 'clubs' },
    { number: '9', suit: 'spades' },
    { number: '9', suit: 'diamonds' },
    { number: 'Q', suit: 'diamonds' },
    { number: '3', suit: 'spades' },
    { number: 'J', suit: 'diamonds' },
    { number: '4', suit: 'diamonds' },
    { number: 'A', suit: 'diamonds' },
    { number: '8', suit: 'spades' },
    { number: '3', suit: 'diamonds' },
    { number: '9', suit: 'clubs' },
    { number: 'Q', suit: 'hearts' },
    { number: '2', suit: 'clubs' },
    { number: '5', suit: 'diamonds' },
    { number: '7', suit: 'diamonds' },
    { number: '2', suit: 'diamonds' },
    { number: '2', suit: 'spades' },
    { number: '9', suit: 'hearts' },
    { number: '5', suit: 'clubs' },
    { number: 'Q', suit: 'spades' },
    { number: '4', suit: 'clubs' },
    { number: '10', suit: 'diamonds' },
    { number: '8', suit: 'clubs' },
    { number: '10', suit: 'spades' },
    { number: '5', suit: 'spades' },
    { number: 'K', suit: 'clubs' },
    { number: 'J', suit: 'spades' },
    { number: 'A', suit: 'spades' },
    { number: 'J', suit: 'hearts' },
    { number: '4', suit: 'hearts' },
    { number: '8', suit: 'diamonds' },
    { number: '7', suit: 'spades' },
    { number: '7', suit: 'hearts' },
    { number: '6', suit: 'spades' }])).toStrictEqual({
        hand: 'Three of a kind',
        cards:
            [{ number: 'K', suit: 'spades' },
            { number: '8', suit: 'hearts' },
            { number: '6', suit: 'clubs' },
            { number: 'K', suit: 'diamonds' },
            { number: 'K', suit: 'hearts' }]
    });

})

test('my hand Two pairs', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 3, suit: 'hearts' },
    { number: 4, suit: 'diamonds' },
    { number: 3, suit: 'spades' },
    { number: 2, suit: 'clubs' }
    ])).toStrictEqual({
        hand: 'Two pairs',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 3, suit: 'hearts' },
            { number: 4, suit: 'diamonds' },
            { number: 3, suit: 'spades' },
            { number: 2, suit: 'clubs' }
            ]
    });

})

test('my hand Pair', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 3, suit: 'hearts' },
    { number: 4, suit: 'diamonds' },
    { number: 5, suit: 'spades' },
    { number: 2, suit: 'clubs' }
    ])).toStrictEqual({
        hand: 'Pair',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 3, suit: 'hearts' },
            { number: 4, suit: 'diamonds' },
            { number: 5, suit: 'spades' },
            { number: 2, suit: 'clubs' }
            ]
    });

})

test('my hand High Card', () => {
    expect(myHand([{ number: 4, suit: 'spades' },
    { number: 3, suit: 'hearts' },
    { number: 8, suit: 'diamonds' },
    { number: 5, suit: 'spades' },
    { number: 2, suit: 'clubs' }
    ])).toStrictEqual({
        hand: 'High Card',
        cards:
            [{ number: 4, suit: 'spades' },
            { number: 3, suit: 'hearts' },
            { number: 8, suit: 'diamonds' },
            { number: 5, suit: 'spades' },
            { number: 2, suit: 'clubs' }
            ]
    });

})