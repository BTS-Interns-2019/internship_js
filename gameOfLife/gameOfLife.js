var cols = 500;
var rows = 400;
var playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var tiempoReproduccion = document.getElementById('rangeInput').addEventListener("change",function(ev){	
    document.getElementById('rangeInput').speed = ev.currentTarget.value;	
  },true);

// iniciar
function iniciar() {
    creaTabla();
    grids();
    reseteaGrids();
    controlBotones();
}

function grids() {
    for (i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

function reseteaGrids() {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

function copiaResetea() {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            grid[i][j] = nextGrid[i][j];
            nextGrid[i][j] = 0;
        }
    }
}

// board
function creaTabla() {
    var gridContainer = document.getElementById('gridContainer');
    var table = document.createElement("table");
    
    for (i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < cols; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = clickCell;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

function clickCell() {
    var rowcol = this.id.split("_");
    var row = rowcol[0];
    var col = rowcol[1];
    
    var classes = this.getAttribute("class");
    if(classes.indexOf("live") > -1) {
        this.setAttribute("class", "dead");
        grid[row][col] = 0;
    } else {
        this.setAttribute("class", "live");
        grid[row][col] = 1;
    }
    
}

function actualizaVista() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            if (grid[i][j] == 0) {
                cell.setAttribute("class", "dead");
            } else {
                cell.setAttribute("class", "live");
            }
        }
    }
}

function controlBotones() {
    var startButton = document.getElementById('start');
    startButton.onclick = botonStart;

    var clearButton = document.getElementById('clear');
    clearButton.onclick = botonClear;
}


// limpiar grid
function botonClear() {
    console.log("Clear grid");
    
    playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "Start";    
    clearTimeout(timer);
    
    var cellsList = document.getElementsByClassName("live");
    var cells = [];
    for (i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }
    
    for (i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    reseteaGrids;
}

// start/pause/continue 
function botonStart() {
    if (playing) {
        console.log("Pause");
        playing = false;
        this.innerHTML = "Continue";
        clearTimeout(timer);
    } else {
        console.log("Continue");
        playing = true;
        this.innerHTML = "Pause";
        play();
    }
}

// inicia juego
function play() {
    siguienteGen();
    
    if (playing) {
        timer = setTimeout(play, tiempoReproduccion);
    }
}

function siguienteGen() {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            reglas(i, j);
        }
    }
    copiaResetea();
    actualizaVista();
}

// saber número de vecinos
function contarVecinos(row, col) {
    var count = 0;
    if (row-1 >= 0) {
        if (grid[row-1][col] == 1) count++;
    }
    if (row-1 >= 0 && col-1 >= 0) {
        if (grid[row-1][col-1] == 1) count++;
    }
    if (row-1 >= 0 && col+1 < cols) {
        if (grid[row-1][col+1] == 1) count++;
    }
    if (col-1 >= 0) {
        if (grid[row][col-1] == 1) count++;
    }
    if (col+1 < cols) {
        if (grid[row][col+1] == 1) count++;
    }
    if (row+1 < rows) {
        if (grid[row+1][col] == 1) count++;
    }
    if (row+1 < rows && col-1 >= 0) {
        if (grid[row+1][col-1] == 1) count++;
    }
    if (row+1 < rows && col+1 < cols) {
        if (grid[row+1][col+1] == 1) count++;
    }
    return count;
}

// aquí se aplican las reglas
function reglas(row, col) {
    var numVecinos = contarVecinos(row, col);
    if (grid[row][col] == 1) {
        if (numVecinos < 2) {
            nextGrid[row][col] = 0;
        } else if (numVecinos == 2 || numVecinos == 3) {
            nextGrid[row][col] = 1;
        } else if (numVecinos > 3) {
            nextGrid[row][col] = 0;
        }
    } else if (grid[row][col] == 0) {
        if (numVecinos == 3) {
            nextGrid[row][col] = 1;
        }
    }
}

// iniciar todo al cargar la página
window.onload = iniciar;