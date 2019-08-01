function getDeck(){
  var deck = [];
  var suits = ['spades ♠', 'diamonds ♦', 'clubs ♣', 'hearts ♥']
  var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  suits.forEach(function(s){
      numbers.forEach(function(num,index){
          deck.push({number:num, suit:s, order:index});
      })
  })
  return deck;
}

function shuffle(deck){
  for(var i=0; i<deck.length; i++){
    val_rand = Math.random().toFixed(2)*100 % deck.length;
    val_rand = parseInt(val_rand);
    var temp = deck[i];
    deck[i] = deck[val_rand];
    deck[val_rand] = temp;
  }  
  return deck;
}

function myHand(mano){
  var royalFlush = false;
  var sameSuit = true;
  var sequence = true;
  var sameNumber1 = 1;
  var sameNumber2 = 1;

  mano.sort(function(a,b){
        return a.order - b.order;
  });
  console.log(mano);
  //Compruebo royalFlush
  if(mano[0].number === 'A' && mano[1].number === '10' && mano[2].number === 'J' && mano[3].number === 'Q' && mano[4].number === 'K'){
      royalFlush = true;
  }

  //COMPRUEBO SECUENCIA
  for(var i=1; i<mano.length; i++){
    if(mano[i].order !== mano[i-1].order-1){
      sequence = false;
    }
  }

  //Compruebo sameSuit
  for(var i=1; i<mano.length; i++){
    if(mano[i].suit !== mano[i-1].suit){
      sameSuit = false;
    }
  }

  //Compruebo sameNumber
  for(var i=1; i<mano.length; i++){
    if(mano[i].number === mano[i-1].number){
      sameNumber1 ++;
    } else if(sameNumber1 > 1){
      if(mano[i].number === mano[i-1].number){
        sameNumber2 ++;
      }
    }
  }
  var betterHand = "";
  switch(true){
    case royalFlush && sameSuit : {
      betterHand = "Royal Flush";
      break;
    }

    case sequence && sameSuit : {
      betterHand = "Straight Flush";
      break;
    } 

    case sameNumber1 === 4 : {
      betterHand = "Four of a kind";
      break;
    }
    
    case (sameNumber1 === 3 && sameNumber2 === 2) ||
    (sameNumber1 === 2 && sameNumber2 === 3) : {
      betterHand = "Full House";
      break;
    }
    
    case sameSuit === true : {
      betterHand = "Flush";
      break;
    }

    case sequence === true : {
      betterHand = "Straight";
      break;
    }

    case sameNumber1 === 3 : {
      betterHand = "Three of a kind ";
      break;
    }

    case sameNumber1 === 2 && sameNumber2 === 2 : {
      betterHand = "Two Pairs";
      break;
    }

    case sameNumber1 === 2 : {
      betterHand = "Pair";
      break;
    }

    default : {
      betterHand = "High Card";
      break;
    }
  }
  var mano_final = [];

  mano.forEach(function(item){
    mano_final.push({ number: item.number, suit: item.suit}); 
  })
  var obj = {
    hand: betterHand,
    cards:mano_final
  } 
  return obj;
}