function getDeck(){
    var type = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var deck=[]
        for(var i = 0; i < type.length; i++)
        {
            for(var x = 0; x < values.length; x++)
            {
                var card = {Value: values[x], Type: type[i]};
                deck.push(card);
            }
        }
        
        
        return deck;
    }
console.log(getDeck())



function shuffles(deck){
        return deck.sort(card=>Math.random()-0.5)

}

console.log(shuffles(getDeck()))

function myHand(arr){

    //Royal flush
    const hands=['royalFlush']
    for (let i=0; i<hands.length; i++){
        
    }




    arr.sort((a,b)=>{
        let indA=card.indexOf(a.number)
        let indB=card.indexOf(b.number)
        return +a.number -+b.number;
    })
    if(myHand.every(car=>card.suit===arr[0].suit)){

    }
    return object;
    
}