class Universe {
    constructor(size1, size2) {
        this.size1 = size1;
        this.size2 = size2;
        this.existence = Array.from({length: this.size1}, () =>
            Array.from({length: this.size2}, () =>{} /*Math.random() > 0.5 ? 1 : 0*/)
    )
}
    copiar(otherExistence) {
        this.existence = JSON.parse(
            JSON.stringify(otherExistence)
        )
    }

    evolucion() {
        var tempUniverse = new Universe(this.size1 ,this.size2);
        this.existence.forEach( (row, rowIndex) =>{
            row.forEach( (cell, colIndex) => {
                var numerDestino = this.numeroDestion(rowIndex,colIndex);
                tempUniverse.existence[rowIndex][colIndex] = this.Destino(numerDestino,cell);
            })
        })
        this.copiar(tempUniverse.existence)
    }

    numeroDestion(x, y) {
        var vecinos = 0;
        for(var i = x-1 ; i <= x+1; i++){
            for(var j = y-1; j <= y+1; j++){
                if( i >= 0 && i < this.size2 && j >= 0 && j < this.size1 && !(i == x && j == y) && this.existence[i][j] == 1) {
                    vecinos++;
                }
            }
        }
        return vecinos;
    }

    Destino(alrededor, cell) {
        if(alrededor < 2 || alrededor > 3) {
            return 0;
        } else if(alrededor == 3) {
            return 1;
        } else {
            return cell;
        }
    }
}

var canvas = document.getElementById("GOL");
var universe = new Universe(500, 400);
var canvasCtx = document.querySelector("#GOL").getContext("2d");
var vel = document.getElementById("velocidad");
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var step = document.getElementById("step");
var div = document.getElementById("div");
var clean = document.getElementById("clean");
var parar = false;
var cuadritos = [];


cuadricula();
var xs = window.innerWidth/500;
var ys = window.innerHeight/400;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 80;

function cuadricula(){
    var columnas = [];
    var filas = [];
    canvasCtx.strokeStile = "black";
    canvasCtx.lineWidth = 1;
    for(i = xs; i<canvas.width; i+=xs){
        canvasCtx.beginPath();
        canvasCtx.moveTo(i,0);
        canvasCtx.lineTo(i, canvas.height);
        canvasCtx.stroke();
        columnas.push(i);
    }
    for(i = ys; i<canvas.height; i+=ys){
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
            cuadritos.push([columnas[x],filas[y], xs,ys]);
        }
    }
}

clean.addEventListener('click', ()=>{
    universe.existence.forEach( (row, rowIndex) =>
        row.forEach( (cell, colIndex) => {
            universe.existence[rowIndex][colIndex] = 0;
        })
    )
    pintarUniverse();
    solocanvas();
})

canvas.onclick = function(e){
    var canvaspos = canvas.getBoundingClientRect();
    // alert(e.clientX +" " + canvaspos.top);
    // alert(Math.floor((e.clientX-canvaspos.left)/10) +  " " + Math.floor((e.clientY-canvaspos.top)/10));
    universe.existence[Math.floor((e.clientX-canvaspos.left)/xs)][Math.floor((e.clientY-canvaspos.top)/ys)] = 1;
    pintarUniverse();
}

var solocanvas = () => {
    canvasCtx.fillStyle ="#FFFFFF";
    canvasCtx.fillRect(0,0,canvas.width,canvas.height);
    cuadricula();
}

var pintarUniverse = () => {
    canvasCtx.fillStyle ="#000"
    universe.existence.forEach( (row, rowIndex) =>
        row.forEach( (cell, colIndex) => {
            if(cell == 1) {
                canvasCtx.fillRect(rowIndex*xs,colIndex*ys,xs,ys);
            }
        })
    )
}

stop.addEventListener("click",()=>{
    parar = true;
})

play.addEventListener("click",()=>{
    parar = false;
    update();
})
solocanvas();
step.addEventListener("click",()=>{
    universe.evolucion();
    solocanvas();
    pintarUniverse();
})

function update() {
    solocanvas();
    pintarUniverse();
    universe.evolucion();
    if(parar){
        return 0;
    }
    setTimeout(update,vel.value);
}
