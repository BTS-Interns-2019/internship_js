class Universe {
    constructor(size) {
        this.size = size
        this.existence = Array.from({length: this.size}, () =>
            Array.from({length: this.size}, () =>{} /*Math.random() > 0.5 ? 1 : 0*/)
    )
}
    copiar(otherExistence) {
        this.existence = JSON.parse(
            JSON.stringify(otherExistence)
        )
    }

    evolucion() {
        var tempUniverse = new Universe(this.size);
        this.existence.forEach( (row, rowIndex) =>{
            row.forEach( (cell, colIndex) => {
                var numerDestino = this.numeroDestion(rowIndex,colIndex);
                tempUniverse.existence[rowIndex][colIndex] = this.Destino(numerDestino,cell);
            })
        })
        this.copiar(tempUniverse.existence)
    }

    numeroDestion(x, y) {
        var vecinos = 0
        for(var i = x-1 ; i <= x+1; i++){
            for(var j = y-1; j <= y+1; j++){
                if( i >= 0 && i < this.size && j >= 0 && j < this.size && !(i == x && j == y) && this.existence[i][j] == 1) {
                    vecinos++;
                }
            }
        }
        return vecinos
    }

    Destino(numberOfDestiny, cell) {
        if(numberOfDestiny < 2 || numberOfDestiny > 3) {
            return 0;
        } else if(numberOfDestiny == 3) {
            return 1;
        } else {
            return cell;
        }
    }
}

var canvas = document.getElementById("GOL");
var universe = new Universe(canvas.width);
var canvasCtx = document.querySelector("#GOL").getContext("2d");
var cuadritos = [];
cuadricula()
function cuadricula(){
    var columnas = [];
    var filas = [];
    canvasCtx.strokeStile = "black";
    canvasCtx.lineWidth = 1;
    for(i = 10; i<canvas.width; i+=10){
        canvasCtx.beginPath();
        canvasCtx.moveTo(i,0);
        canvasCtx.lineTo(i, canvas.height);
        canvasCtx.stroke();
        columnas.push(i);
    }
    for(i = 10; i<canvas.height; i+=10){
        canvasCtx.beginPath();
        canvasCtx.moveTo(0,i);
        canvasCtx.lineTo(canvas.width,i);
        canvasCtx.stroke();
        filas.push(i);
    }
    columnas.push(0);
    filas.push(0);
    for(x = 0; x< columnas.length; x++){
        for(y = 0; y< filas.length;y++){
            cuadritos.push([columnas[x],filas[y], 10,10]);
        }
    }
}
canvas.onclick = function(e){
    var canvaspos = canvas.getBoundingClientRect();
        // alert(canvaspos.left +" " + canvaspos.top);
        // alert(Math.floor((e.clientX-canvaspos.left)/10) +  " " + Math.floor((e.clientY-canvaspos.top)/10));
        universe.existence[Math.floor((e.clientX-canvaspos.left)/10)][Math.floor((e.clientY-canvaspos.top)/10)] = 1;
        pintarUniverse();
}

var solocanvas = () => {
    canvasCtx.fillStyle ="#FFFFFF";
    canvasCtx.fillRect(0,0,1000,1000);
    cuadricula();
}

var pintarUniverse = () => {
    canvasCtx.fillStyle ="#000"
    universe.existence.forEach( (row, rowIndex) =>
        row.forEach( (cell, colIndex) => {
            if(cell == 1) {
                canvasCtx.fillRect(rowIndex*10,colIndex*10,10,10);
            }
        })
    )
}

var vel = document.getElementById("velocidad");
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var parar = false;
stop.addEventListener("click",()=>{
    parar = true;
})
play.addEventListener("click",()=>{
    parar = false;
    update();
})
function update() {
    if(parar){
        return 0;
    }
    solocanvas();
    pintarUniverse();
    universe.evolucion();
    setTimeout(update,vel.value);
}
