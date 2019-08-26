const {
    getDeck,
    myPlay,
    myHand
} = require ("./cp_poker_exercise_erick")

test("proving Deck creator", () => {
    expect(getDeck()).toStrictEqual(
        [ 
            { name: 'A', suit: 'spades' },
            { name: '2', suit: 'spades' },
            { name: '3', suit: 'spades' },
            { name: '4', suit: 'spades' },
            { name: '5', suit: 'spades' },
            { name: '6', suit: 'spades' },
            { name: '7', suit: 'spades' },
            { name: '8', suit: 'spades' },
            { name: '9', suit: 'spades' },
            { name: '10', suit: 'spades' },
            { name: 'J', suit: 'spades' },
            { name: 'Q', suit: 'spades' },
            { name: 'K', suit: 'spades' },
            { name: 'A', suit: 'diamonds' },
            { name: '2', suit: 'diamonds' },
            { name: '3', suit: 'diamonds' },
            { name: '4', suit: 'diamonds' },
            { name: '5', suit: 'diamonds' },
            { name: '6', suit: 'diamonds' },
            { name: '7', suit: 'diamonds' },
            { name: '8', suit: 'diamonds' },
            { name: '9', suit: 'diamonds' },
            { name: '10', suit: 'diamonds' },
            { name: 'J', suit: 'diamonds' },
            { name: 'Q', suit: 'diamonds' },
            { name: 'K', suit: 'diamonds' },
            { name: 'A', suit: 'clubs' },
            { name: '2', suit: 'clubs' },
            { name: '3', suit: 'clubs' },
            { name: '4', suit: 'clubs' },
            { name: '5', suit: 'clubs' },
            { name: '6', suit: 'clubs' },
            { name: '7', suit: 'clubs' },
            { name: '8', suit: 'clubs' },
            { name: '9', suit: 'clubs' },
            { name: '10', suit: 'clubs' },
            { name: 'J', suit: 'clubs' },
            { name: 'Q', suit: 'clubs' },
            { name: 'K', suit: 'clubs' },
            { name: 'A', suit: 'hearts' },
            { name: '2', suit: 'hearts' },
            { name: '3', suit: 'hearts' },
            { name: '4', suit: 'hearts' },
            { name: '5', suit: 'hearts' },
            { name: '6', suit: 'hearts' },
            { name: '7', suit: 'hearts' },
            { name: '8', suit: 'hearts' },
            { name: '9', suit: 'hearts' },
            { name: '10', suit: 'hearts' },
            { name: 'J', suit: 'hearts' },
            { name: 'Q', suit: 'hearts' },
            { name: 'K', suit: 'hearts' } 
        ]
    )
})

test("test on Pair hand", () => {
    const pairHand = [ 
        { name: 'K', suit: 'spades' },
        { name: '7', suit: 'clubs' },
        { name: '8', suit: 'hearts' },
        { name: 'K', suit: 'diamonds' },
        { name: '4', suit: 'clubs' } ]

    expect(myPlay(pairHand)).toEqual(
        { hand: "Pair",
          cards: [ 
            { name: 'K', suit: 'spades' },
            { name: '7', suit: 'clubs' },
            { name: '8', suit: 'hearts' },
            { name: 'K', suit: 'diamonds' },
            { name: '4', suit: 'clubs' } ]
        }
    )
});

test("test on Two Pair hand", () => {
  const twoPairHand = [ 
  { name: 'J', suit: 'spades' },
  { name: '5', suit: 'clubs' },
  { name: '6', suit: 'diamonds' },
  { name: 'J', suit: 'hearts' },
  { name: '5', suit: 'diamonds' } ]

  expect(myPlay(twoPairHand)).toEqual(
      { hand: "Two pairs",
        cards: [ 
          { name: 'J', suit: 'spades' },
          { name: '5', suit: 'clubs' },
          { name: '6', suit: 'diamonds' },
          { name: 'J', suit: 'hearts' },
          { name: '5', suit: 'diamonds' } ]
      }
  )
});

test("Test on Three of a kind", () => {
    const threeOfAKind = [
      { name: 'Q', suit: 'clubs' },
      { name: '5', suit: 'diamonds' },
      { name: '5', suit: 'spades' },
      { name: '5', suit: 'hearts' },
      { name: '6', suit: 'diamonds' }]
    expect(myPlay(threeOfAKind)).toStrictEqual(
      { hand: 'Three of a kind',
         cards:[ 
          { name: 'Q', suit: 'clubs' },
          { name: '5', suit: 'diamonds' },
          { name: '5', suit: 'spades' },
          { name: '5', suit: 'hearts' },
          { name: '6', suit: 'diamonds' } ] }
    )
});

test("on Full house", () => {
  const fullHouse = 
    [ { name: '6', suit: 'clubs' },
     { name: '5', suit: 'diamonds' },
     { name: '5', suit: 'spades' },
     { name: '5', suit: 'hearts' },
     { name: '6', suit: 'diamonds' } ]
  expect(myPlay(fullHouse)).toStrictEqual(
    { hand: "Full house",
      cards:[
        { name: '6', suit: 'clubs' },
        { name: '5', suit: 'diamonds' },
        { name: '5', suit: 'spades' },
        { name: '5', suit: 'hearts' },
        { name: '6', suit: 'diamonds' }]
    }
  )
});

test("on Full royal", () =>{
  const royalFlush = [ 
    { name: 'A', suit: 'spades' },
    { name: '10', suit: 'spades' },
    { name: 'J', suit: 'spades' },
    { name: 'K', suit: 'spades' },
    { name: 'Q', suit: 'spades' } ]
    expect(myPlay(royalFlush)).toStrictEqual(
      { hand: 'Royal flush',
        cards:[ 
          { name: 'A', suit: 'spades' },
          { name: '10', suit: 'spades' },
          { name: 'J', suit: 'spades' },
          { name: 'K', suit: 'spades' },
          { name: 'Q', suit: 'spades' } ] }
    )
});