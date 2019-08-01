var tipo = ["spades", "diamonds", "clubs", "hearts"];
var carta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck(tipo, carta){
    cartas = [];
    tipo.forEach( (tipo)=> {
        carta.forEach( (card)=> {
            var obj = {Tipo: tipo, Carta: card};
			cartas.push(obj);
        });
    });
    //console.log(cartas);
    return cartas;
   // return JSON.stringify(cartas, null)
}
//console.log(getDeck(tipo, carta));
var Deck = getDeck(tipo, carta);

function shuffle(desor){
    var m= desor.length-1;
    for (var i=m; i>1 ;i--){ 
        alea=Math.floor(i*Math.random()); 
        temp=desor[i]; 
        desor[i]=desor[alea]; 
        desor[alea]=temp; 
    }
    arr = [];
    for (let i = 0; i <= 4; i++) {
        arr.push(desor[i]);
    }
    return JSON.stringify(arr, null)
    return(arr);
    //return deck;
}
console.log(shuffle(Deck));


//Mano
function myHand(arr)
{
    if(!Array.isArray(arr) || ( Array.isArray(arr) && arr.length > 5)
    || ( Array.isArray(arr) && arr.length < 5) ){
        return{
            hand:"wrong input",
            card:arr
        }
    }
//que tengan mismo color
//orden numerico
//basar en orden de las cartas del arreglo
//some
    if(arr.filter( (items, index, arr)=>  )){

    }
    //return arr;
    hands={
        hand:"Royal Flush",
        cards:[
            {Tipo: "spades",Card: "A"},
            {Tipo: "spades",Card: "K"},
            {Tipo: "spades",Card: "Q"},
            {Tipo: "spades",Card: "J"},
            {Tipo: "spades",Card: "10"}
        ]},
        {
            hand:"Strainght Flush",
            cards:[
                {Tipo: "spades",Card: "A"},
                {Tipo: "spades",Card: "K"},
                {Tipo: "spades",Card: "Q"},
                {Tipo: "spades",Card: "J"},
                {Tipo: "spades",Card: "10"}
            ]
        }
    /*console.log(JSON.stringify(arr, null));
    arr.sort((a,b)=>a.Carta.toString().localeCompare(b.Carta.toString()));
    console.log(JSON.stringify(arr, null));
    arr.sort((a,b)=>a.Tipo.toString().localeCompare(b.Tipo.toString()));
    console.log(JSON.stringify(arr, null));//*/

}

console.log(( myHand(shuffle(Deck)) ) );