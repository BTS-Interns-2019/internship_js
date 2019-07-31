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



function shuffles(arr){
    for(let i=0; i<52; i++){
        baraja1=(Math.floor(Math.random()*52))

    }
   return baraja1;

}
console.log(shuffles())
