(function () {
  let celulas = [];
  function addVecino(celula) {
    let x = celula.num;
    let up = x - 500 >= 0;
    let down = x + 500 <= 199999;
    let izq = x % 500 != 0;
    let der = (x + 1) % 500 != 0;
    if (up) {
      celula.vecinos.push(x - 500)
    }
    if (izq) {
      celula.vecinos.push(x - 1)
    }
    if (down) {
      celula.vecinos.push(x + 500)
    }
    if (der) {
      celula.vecinos.push(x + 1)
    }
    if (up && izq) {
      celula.vecinos.push(x - 501);
    }
    if (up && der) {
      celula.vecinos.push(x - 499);
    }
    if (down && izq) {
      celula.vecinos.push(x + 499);
    }
    if (down && der) {
      celula.vecinos.push(x + 501);
    }


  }
  class Celula {
    constructor(num, elemento, clase) {
      this.num = num;
      this.elemento = elemento;
      this.isAlive = false;
      this.clase = clase;
      this.vecinos = [];
      addVecino(this);
      this.nextState = undefined;

      elemento.addEventListener('click', () => {
        num_turno=0;
        turnos.innerText=num_turno;
        this.isAlive = !this.isAlive;
        if (this.isAlive) {
          let nclase = this.clase + " ";
          nclase += this.clase == 'cel1' ? "live1" : "live2"
          this.elemento.setAttribute("class", nclase);
        } else {
          this.elemento.setAttribute("class", this.clase);
        }
      })
    }
    get vecinosVivos() {
      let vivos = 0;
      for (let v of this.vecinos) {
        if (celulas[v].isAlive) {
          vivos++;
        }
      }
      return vivos
    }
  }

  function avanzar() {
    num_turno++;
    for (let cel of celulas) {
      if (cel.isAlive) {
        if (cel.vecinosVivos <= 1 || cel.vecinosVivos >= 4) {
          cel.nextState = false;
        }
        if (cel.vecinosVivos == 2 || cel.vecinosVivos == 3) {
          cel.nextState = true;
        }
      } else {
        if (cel.vecinosVivos == 3) {
          cel.nextState = true;
        }
      }
    }
    for(let cel of celulas){
      if(cel.nextState!==undefined&&cel.isAlive!=cel.nextState){
        cel.nextState = undefined;
        cel.isAlive = !cel.isAlive;
        if (cel.isAlive) {
          let nclase = cel.clase + " ";
          nclase += cel.clase == 'cel1' ? "live1" : "live2"
          cel.elemento.setAttribute("class", nclase);
        } else {
          cel.elemento.setAttribute("class", cel.clase);
        }
      }
    }
turnos.innerText=num_turno;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const tablero = document.getElementById("tablero");
  const turnos = document.getElementById("turno");
  var num_turno = 0;
  var started = false;
  let c = true;
  for (let j = 0; j < 200000; j++) {
    let nc = document.createElement('div');
    if (j % 500 == 0 && j > 499) c = !c
    let clase = c ? "cel1" : "cel2";
    nc.setAttribute("class", clase)
    c = !c
    tablero.appendChild(nc);
    celulas.push(new Celula(j, nc, clase))
  }
  const next = document.getElementById("next");
  next.addEventListener("click", avanzar)
  const start = document.getElementById("start");
  const velocidad = document.getElementById('velocidad');
  start.addEventListener('click',async function(){
    started = !started;
    if(started){
      start.innerText="Stop"
    }else{
      start.innerText="Start"
    }
    while(started){
      avanzar();
     let s = 2000 - velocidad.value;
      await sleep(s);
    }
  })
})();