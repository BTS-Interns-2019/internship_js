const tablero = new Array(8);
for (let i = 0; i < tablero.length; i++) {
    tablero[i] = new Array(8);
}
for (let i = 0; i < tablero.length; i++) {
    for (let a = 0; a < tablero[i].length; a++) {
        tablero[i][a] = 0;
    }
}

/*function Piece(location, color, placename){
    this.location = location;
    this.color = color;
    this.placeName=placename;
}*/
function Rock(locacion, color){
    
}
const letras = ['A','B','C','D','F','G','H'];
function Pawn(location,color){
    this.location = {
        loc:location,
        set(llegar){
            const separando = llegar.split('');
            const locacion = Array(2);
            locacion[1] = separando[1];
            var cont = 0;
            for(let a = 0; a < 7 ; a++){
                console.log(letras[a]);
                if(letras[a] == locacion[0]){
                    cont = a;
                    break;
                }
            }
            
            tablero[cont][locacion[1]] = this.color + this.placeName; 
        },
        get(){
            return location;
        }
        
    };
    this.color = color;
    this.placeName = "P";
    this.validMove = function(target){
        if(this.color == "w"){
            if ((this.location[0] === this.taget[0]) && (this.location[1] - this.taget[1] == -1)) {
                return true
            }
        }else {
            if((this.location[0] === this.taget[0]) && (this.location[1] - this.taget[1] == 1)){
                return true
            }
        }
    }
}

// Pawn.prototype = Object.create(Piece);
const peon = new Pawn("B2",'w');
peon.location.set("B2");

console.log(JSON.stringify(tablero));
